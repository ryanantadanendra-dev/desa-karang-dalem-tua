/**
 * convert-to-webp-sharp-only.mjs
 *
 * Versi tanpa dependency "glob" - hanya pakai sharp + modul bawaan Node.js
 * (fs, path). Membaca semua file gambar di SRC_DIR (termasuk subfolder),
 * resize, lalu convert ke WebP ke OUT_DIR.
 *
 * CARA PAKAI:
 *   1. npm install sharp --save-dev
 *   2. node convert-to-webp-sharp-only.mjs
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";

// ---- KONFIGURASI: sesuaikan dengan project kamu ----
const SRC_DIR = "asset-org"; // folder berisi gambar asli
const OUT_DIR = "public"; // folder yang di-serve Next.js
const MAX_WIDTH = 2000; // lebar maksimal (px)
const QUALITY = 85; // kualitas webp (75-85 disarankan)
const EXTENSIONS = [".jpg", ".jpeg", ".png"]; // ekstensi yang diproses
// -----------------------------------------------------

// Cari semua file gambar secara rekursif tanpa "glob",
// cukup pakai fs.readdirSync bawaan Node.js
function findImages(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(findImages(fullPath));
    } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }

  return results;
}

async function convertImage(file) {
  const relPath = path.relative(SRC_DIR, file);
  const outPath = path.join(
    OUT_DIR,
    relPath.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
  );

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const metadata = await sharp(file).metadata();

  // Orientation 5-8 means the image is rotated 90°/270°, so the width/height
  // sharp reports here (pre-rotation) will be swapped once .rotate() applies
  // the EXIF orientation. Use the post-rotation width for the resize check.
  const isSideways = metadata.orientation && metadata.orientation >= 5;
  const effectiveWidth = isSideways ? metadata.height : metadata.width;
  const needsResize = effectiveWidth && effectiveWidth > MAX_WIDTH;

  let pipeline = sharp(file).rotate(); // auto-orient based on EXIF, then bake it into pixels
  if (needsResize) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: QUALITY }).toFile(outPath);

  const originalSize = fs.statSync(file).size;
  const newSize = fs.statSync(outPath).size;
  const savings = (100 - (newSize / originalSize) * 100).toFixed(1);

  console.log(
    `${relPath} -> ${path.relative(OUT_DIR, outPath)} | ` +
      `${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(0)}KB ` +
      `(-${savings}%)${needsResize ? ` [diresize ke ${MAX_WIDTH}px]` : ""}`,
  );
}

async function run() {
  if (!fs.existsSync(SRC_DIR)) {
    console.log(
      `Folder "${SRC_DIR}" tidak ditemukan. Buat folder itu dan taruh gambar aslinya di sana.`,
    );
    return;
  }

  const files = findImages(SRC_DIR);

  if (files.length === 0) {
    console.log(`Tidak ada gambar ditemukan di "${SRC_DIR}".`);
    return;
  }

  console.log(`Ditemukan ${files.length} gambar. Memproses...\n`);

  for (const file of files) {
    try {
      await convertImage(file);
    } catch (err) {
      console.error(`Gagal memproses ${file}:`, err.message);
    }
  }

  console.log(
    "\nSelesai. Update path <Image src='...'> di kode kamu jadi .webp.",
  );
}

run();
