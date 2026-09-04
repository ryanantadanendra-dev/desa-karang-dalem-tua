import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";
import ScrollToHash from "@/components/ScrollToHash";

const images = {
  left: [{ src: Image1.src }, { src: Image1.src }, { src: Image1.src }],
  right: [{ src: Image1.src }, { src: Image1.src }],
};

const images2 = {
  left: [{ src: Image1.src }, { src: Image1.src }, { src: Image1.src }],
  right: [{ src: Image1.src }, { src: Image1.src }],
};
const ProyekPage = () => {
  return (
    <>
      <Header text="PROYEK KAMI" />
      <main className="w-screen min-h-screen">
        <ScrollToHash />
        <section
          id="jalak-bali"
          className="w-screen lg:min-h-180 min-h-100 bg-background grid grid-cols-2 place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5 "
        >
          <div className="col-span-2 md:col-span-1 pt-12 lg:pt-0">
            <h2 className="text-heading2">PENANGKARAN JALAK BALI</h2>
            <article className="text-body mt-6">
              Penangkaran Jalak Bali dimulai pada tahun 2019 sebagai bentuk
              komitmen desa dalam konservasi burung endemik Bali dan menjaga
              keseimbangan ekosistem. Saat ini populasi mencapai sekitar 60 ekor
              dan sebagian telah hidup bebas di lingkungan desa.
              <br />
              <br />
              Uniknya, penangkar Jalak Bali merupakan mantan pemburu burung yang
              kini menjadi pelindung satwa. Kehadiran Jalak Bali turut
              mengundang berbagai jenis burung lain seperti perkutut dan raja
              udang, menjadikan desa sebagai habitat alami yang semakin hidup.
            </article>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="flex flex-col gap-3">
                {images.left.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-3">
                {images.right.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover flex-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="daur-ulang"
          className="bg-primary text-background w-screen lg:min-h-180 min-h-100 grid grid-cols-2 grid-flow-row place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5"
        >
          <div className="col-span-2 md:col-span-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Right column */}
              <div className="flex flex-col gap-3">
                {images2.right.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover flex-1"
                  />
                ))}
              </div>

              {/* Left column */}
              <div className="flex flex-col gap-3">
                {images2.left.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 pt-12 lg:pt-0 order-1 md:order-2">
            <h2 className="text-heading2">KERAJINAN DAUR ULANG</h2>
            <article className="text-body mt-6">
              Kerajinan daur ulang mulai dikembangkan sejak tahun 2018 oleh
              kelompok ibu-ibu melalui Paiketan Krama Istri Eco Pertiwi.
              Kegiatan ini bertujuan mengurangi sampah sekaligus meningkatkan
              ekonomi kreatif masyarakat desa.
              <br />
              <br />
              Berbagai produk ramah lingkungan dihasilkan seperti tas belanja,
              dompet, gantungan kunci, dan kerajinan kreatif lainnya. Program
              ini menjadi bagian dari gerakan desa hijau yang mendukung
              keberlanjutan lingkungan dan pemberdayaan perempuan.
            </article>
          </div>
        </section>
        <section
          id="perak"
          className="w-screen lg:min-h-180 min-h-100 bg-background grid grid-cols-2 place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5"
        >
          <div className="col-span-2 md:col-span-1 pt-12 lg:pt-0">
            <h2 className="text-heading2">KERAJINAN PERAK</h2>
            <article className="text-body mt-6">
              Kerajinan perak telah berkembang di Karang Dalem Tua sejak tahun
              1980-an dan pernah menjadi mata pencaharian utama masyarakat, di
              mana pada era 1990–2000 hampir seluruh warga merupakan pengrajin
              perak. Meskipun jumlah pengrajin kini berkurang akibat perubahan
              global, tradisi kerajinan ini tetap dilestarikan sebagai identitas
              desa.
              <br />
              <br />
              Berbagai produk perhiasan seperti cincin, gelang, kalung, liontin,
              dan bros dibuat dengan teknik tradisional khas Bali. Saat ini,
              kerajinan perak juga dikembangkan dalam bentuk Silver Workshop, di
              mana pengunjung dapat belajar dan terlibat langsung dalam proses
              pembuatan perak secara autentik.
            </article>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="flex flex-col gap-3">
                {images.left.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-3">
                {images.right.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover flex-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="lebah-madu"
          className="bg-primary text-background w-screen lg:min-h-180 min-h-100 grid grid-cols-2 grid-flow-row place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center  py-12 2xl:px-32 md:px-12 px-5"
        >
          <div className="col-span-2 md:col-span-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Right column */}
              <div className="flex flex-col gap-3">
                {images2.right.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover flex-1"
                  />
                ))}
              </div>

              {/* Left column */}
              <div className="flex flex-col gap-3">
                {images2.left.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 pt-12 lg:pt-0 order-1 md:order-2">
            <h2 className="text-heading2">BUDIDAYA LEBIH MADU</h2>
            <article className="text-body mt-6">
              Budidaya lebah madu Trigona mulai berkembang sebagai bagian dari
              pertanian berkelanjutan desa. Lebah tanpa sengat ini menghasilkan
              madu alami berkualitas tinggi dengan manfaat kesehatan yang baik
              bagi tubuh.
              <br />
              <br />
              Puluhan sarang lebah telah dikembangkan oleh beberapa keluarga
              desa, dan selain sebagai sumber produksi madu, kegiatan ini juga
              menjadi bagian dari edukasi wisata alam yang memperkenalkan
              pentingnya keseimbangan ekosistem dan pertanian ramah lingkungan.
            </article>
          </div>
        </section>
        <section
          id="biogas"
          className="w-screen lg:min-h-180 min-h-100 bg-background grid grid-cols-2 place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5"
        >
          <div className="col-span-2 md:col-span-1 pt-12 lg:pt-0">
            <h2 className="text-heading2">BIOGAS</h2>
            <article className="text-body mt-6">
              Program biogas dimulai sejak tahun 2018 sebagai upaya pengolahan
              limbah ternak babi menjadi energi ramah lingkungan. Kotoran ternak
              dimasukkan ke dalam digester, menghasilkan gas metan yang
              digunakan sebagai bahan bakar memasak, sementara sisa proses
              menjadi pupuk organik untuk pertanian.
              <br />
              <br />
              Penerapan biogas membawa perubahan signifikan bagi desa, di
              antaranya lingkungan menjadi lebih bersih dan bebas bau,
              penggunaan LPG berkurang, serta limbah ternak dapat dimanfaatkan
              menjadi energi dan pupuk yang mendukung pertanian berkelanjutan.
            </article>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Left column */}
              <div className="flex flex-col gap-3">
                {images.left.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-3">
                {images.right.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt=""
                    width={100}
                    height={100}
                    className="w-65 h-65 rounded-md object-cover flex-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default ProyekPage;
