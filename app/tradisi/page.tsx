import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";

const TradisiPage = () => {
  return (
    <>
      <Header text="TRADISI" />
      <main className="w-screen min-h-screen">
        <section
          id="penjor"
          className=" lg:min-h-180 min-h-120 py-12 px-8 md:px-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center items-start gap-12 md:gap-8 lg:gap-0"
        >
          <div className="order-2 md:order-1 col-span-1">
            <figure className="relative lg:w-132.25 lg:h-154.75 md:w-60 md:h-80 w-44 h-56">
              <Image
                src={Image1}
                alt="Penjor Bali"
                fill
                className="object-cover rounded-2xl"
              />
            </figure>
          </div>
          <div className="order-1 md:order-2 col-span-1 lg:pe-32">
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
          className=" lg:min-h-180 min-h-120 py-12 px-8 md:px-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center items-start gap-12 md:gap-8 lg:gap-0"
        >
          <div className="order-2 md:order-2 col-span-1">
            <figure className="relative lg:w-132.25 lg:h-154.75 md:w-60 md:h-80 w-44 h-56">
              <Image
                src={Image1}
                alt="Tata Ruang Pura"
                fill
                className="object-cover rounded-2xl"
              />
            </figure>
          </div>
          <div className="order-1 md:order-1 col-span-1 lg:ps-32">
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
