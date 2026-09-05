import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";
import ScrollToHash from "@/components/ScrollToHash";

const TradisiPage = () => {
  return (
    <>
      <Header text="TRADISI" />
      <main className="w-screen min-h-screen md:min-h-200 lg:min-h-screen">
        <ScrollToHash />
        <section
          id="penjor"
          className="2xl:min-h-screen lg:min-h-100 min-h-120 py-12 px-8 md:px-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center items-start lg:items-center gap-12 md:gap-8 lg:gap-0"
        >
          <div className="order-2 md:order-1 col-span-1">
            <figure className="relative 2xl:w-132.25 2xl:h-154.75 lg:w-90 lg:h-110 md:w-60 md:h-80 w-44 h-56">
              <Image
                src="/penjor.webp"
                alt="Penjor Bali"
                width={2000}
                height={1365}
                sizes="(max-width: 759px) 176px, (max-width: 1024px) 240px, (max-width: 1279px) 360px, 529px"
                className="object-cover w-full h-full rounded-2xl"
              />
            </figure>
          </div>
          <div className="order-1 md:order-2 col-span-1 2xl:pe-32 lg:pe-10">
            <h2 className="text-heading2">TRADISI PENJOR KARANG DALEM TUA</h2>
            <article className="text-body md:mt-8">
              Penjor Galungan adalah wujud syukur atas kemakmuran dan simbol
              keharmonisan manusia dengan alam semesta. Di Karang Dalem Tua,
              pembuatan penjor dilakukan secara serentak oleh krama desa setelah
              menerima tirta suci, memperkuat kesatuan spiritual dan nilai
              kebersamaan adat.
            </article>
          </div>
        </section>
        <section
          id="tata-ruang"
          className="2xl:min-h-screen lg:min-h-100 min-h-120 py-12 px-8 md:px-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center items-start lg:items-center gap-12 md:gap-8 lg:gap-0"
        >
          <div className="order-2 md:order-2 col-span-1">
            <figure className="relative 2xl:w-132.25 2xl:h-154.75 lg:w-90 lg:h-110 md:w-60 md:h-80 w-44 h-56">
              <Image
                src="/ruang-2.webp"
                alt="Tata Ruang Pura"
                width={2000}
                height={1365}
                sizes="(max-width: 759px) 176px, (max-width: 1024px) 240px, (max-width: 1279px) 360px, 529px"
                className="object-cover w-full h-full rounded-2xl"
              />
            </figure>
          </div>
          <div className="order-1 md:order-1 col-span-1 2xl:ps-32 lg:ps-10">
            <h2 className="text-heading2">TRADISI TATA RUANG PURA</h2>
            <article className="text-body md:mt-8">
              Bagi masyarakat Karang Dalem Tua, tradisi adalah fondasi hidup
              yang diwujudkan melalui filosofi Tri Hita Karana demi menjaga
              keharmonisan sesama, alam, dan Tuhan. Tatanan desa ini
              berlandaskan konsep Tri Mandala, mencerminkan kesadaran spiritual
              dan tata ruang sakral yang selaras dengan kosmos Bali.
            </article>
          </div>
        </section>
      </main>
    </>
  );
};
export default TradisiPage;
