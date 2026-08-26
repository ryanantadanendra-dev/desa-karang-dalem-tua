import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";

const AboutPage = () => {
  return (
    <main>
      <Header text="Tentang Kami" />
      <section className="w-screen lg:h-180 min-h-100 bg-background grid grid-cols-2 gap-8 md:gap-8 md:justify-items-center lg:items-start md:items-center lg:py-12 py-12 md:py-0 lg:px-32 md:px-12 px-5">
        <div className="col-span-2 md:col-span-1 gap-6 md:pt-0 ">
          <h2 className="text-heading2 font-extrabold">
            MENGENAL DESA KARANG DALEM TUA
          </h2>
          <article className="text-body lg:pe-32 md:pe-12 pe-8 md:mt-4 lg:mt-8">
            Desa Adat Karang Dalem Tua di Bongkasa Pertiwi, Badung, tetap
            memelihara adat, budaya, dan spiritualitas Bali secara utuh.
            Berlandaskan keseimbangan manusia, alam, dan Tuhan, desa asri ini
            menawarkan pengalaman Bali yang tenang, autentik, serta kaya nilai
            tradisi.
          </article>
        </div>
        <div className="col-span-2 md:col-span-1">
          <figure className="relative lg:w-194.5 lg:h-127 md:w-90 md:h-72 w-80 h-50">
            <Image
              src={Image1}
              alt="Desa Karang Dalem Tua"
              fill
              className="object-cover rounded-tl-0 rounded-tr-[80px] rounded-br-0 rounded-bl-[80px]"
            />
          </figure>
        </div>
      </section>
      <section className="w-screen lg:h-200 min-h-120 bg-primary grid grid-cols-2 place-items-center lg:place-items-start lg:py-12 lg:px-32 md:px-12 px-5 md:gap-8 gap-3">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2 justify-center">
          <figure className="relative lg:w-194.5 lg:h-67 md:w-80 md:h-30 w-80 h-20">
            <Image
              src={Image1}
              alt="Desa Karang Dalem Tua"
              fill
              className="object-cover rounded-tl-0 md:rounded-tr-[80px] rounded-tr-[50px] rounded-br-0 md:rounded-bl-[80px] rounded-bl-[50px]"
            />
          </figure>
          <figure className="relative lg:w-194.5 lg:h-67 md:w-80 md:h-30 w-80 h-20">
            <Image
              src={Image1}
              alt="Desa Karang Dalem Tua"
              fill
              className="object-cover md:rounded-tl-[80px] rounded-tl-[50px] rounded-tr-0 md:rounded-br-[80px] rounded-br-[50px] rounded-bl-0"
            />
          </figure>
        </div>
        <div className="col-span-2 md:col-span-1 gap-6 lg:pt-27 text-background">
          <h2 className="text-heading2 font-extrabold">
            WARISAN AGUNG KERAJAAN MENGWI
          </h2>
          <article className="text-body lg:pe-32 mt-8">
            Berakar dari era Kerajaan Mengwi, Desa Adat Karang Dalem Tua menjaga
            kelestarian struktur Kahyangan Tiga dan tata ruang sakral, sekaligus
            mengembangkan pariwisata berbasis masyarakat yang menyatukan
            tradisi, alam, dan budaya Bali sejak 2010.
          </article>
        </div>
      </section>
      <section className="w-screen lg:min-h-200 min-h-120 bg-background grid grid-cols-1 text-center py-12 lg:px-32 md:px-12 px-5">
        <div className="col-span-1">
          <h2 className="text-heading2">PROFIL DESA</h2>
          <article className="text-body lg:px-94 md:px-32 mt-8">
            Desa Adat Karang Dalem Tua memiliki luas wilayah sekitar 83 hektar
            dengan jumlah penduduk 359 jiwa yang terdiri dari 106 kepala
            keluarga. Struktur kehidupan masyarakat masih sangat erat dengan
            sistem adat dan kebersamaan sosial, di mana kegiatan desa
            dilaksanakan secara gotong royong berdasarkan nilai tradisi Bali.
            <br />
            <br />
            Sebagian besar masyarakat bekerja sebagai petani yang memanfaatkan
            lahan pertanian dan tegalan, sementara sebagian lainnya bergerak di
            sektor pariwisata, kerajinan, dan usaha berbasis masyarakat.
            Kehidupan desa berjalan harmonis dengan alam dan adat istiadat yang
            tetap terjaga.
            <br />
            <br />
            Desa dapat diakses dengan mudah melalui jalur darat menggunakan
            kendaraan pribadi maupun kendaraan pariwisata. Infrastruktur jalan
            desa cukup baik untuk mendukung aktivitas masyarakat dan kunjungan
            wisata.
          </article>
          <div className="grid grid-cols-3 md:gap-8 gap-2 mt-20">
            <figure className="relative lg:w-full lg:h-90 md:h-56 h-25 col-span-1">
              <Image
                src={Image1}
                alt="Profil Desa"
                fill
                className="object-cover rounded-tl-0 md:rounded-tr-[80px] rounded-tr-[50px] rounded-br-0 md:rounded-bl-[80px] rounded-bl-[50px]"
              />
            </figure>
            <figure className="relative col-span-2 lg:h-90 md:h-56 h-25">
              <Image
                src={Image1}
                alt="Profil Desa"
                fill
                className="object-cover md:rounded-tl-[80px] rounded-tl-[50px] rounded-tr-0 md:rounded-br-[80px] rounded-br-[50px] rounded-bl-0"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="w-screen lg:min-h-180 min-h-120 bg-primary text-background grid grid-cols-2 justify-items-center lg:items-start items-center py-12 lg:px-32 md:px-12 px-5">
        <div className="col-span-2 md:col-span-1 gap-6 lg:pt-8 ">
          <h2 className="text-heading2 font-extrabold">
            JEJAK ABADI KARANG DALEM TUA
          </h2>
          <article className="text-body lg:pe-12 mt-8">
            Berdiri sejak masa Kerajaan Mengwi (1722–1740 M) dan dikukuhkan
            secara resmi pada 2023, Karang Dalem Tua bermakna tanah perjuangan
            keluar dari kesengsaraan. Dinamika sejarahnya berakar dari Pura Ulun
            Tegal, temuan arkeologis Pura Batu Megong, hingga pemugaran berkala
            yang memperkuat identitas spiritual dan budaya desa hingga kini.
          </article>
        </div>
        <div className="col-span-2 md:col-span-1 flex md:gap-6 gap-1 pt-12 md:pt-0">
          <figure className="relative lg:w-78.25 lg:h-175 md:w-32 md:h-96 w-28 h-56">
            <Image
              src={Image1}
              alt="Desa Karang Dalem Tua"
              fill
              className="object-cover rounded-tl-0 rounded-tr-[80px] rounded-br-0 rounded-bl-[80px]"
            />
          </figure>
          <div>
            <figure className="relative lg:w-65.25 lg:h-86 md:w-32 md:h-45 w-22 h-25">
              <Image
                src={Image1}
                alt="Desa Karang Dalem Tua"
                fill
                className="object-cover rounded-tl-[80px] rounded-tr-[80px] rounded-br-0 rounded-bl-0"
              />
            </figure>
            <figure className="relative lg:w-65.25 lg:h-86 md:w-32 md:h-45 w-22 h-25 mt-4">
              <Image
                src={Image1}
                alt="Desa Karang Dalem Tua"
                fill
                className="object-cover rounded-tl-0 rounded-tr-0 rounded-br-[80px] rounded-bl-[80px]"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
