import Image from "next/image";
import Image1 from "../public/jalak-bali.webp";
import Link from "next/link";

const projects = [
  {
    title: "Penangkaran Jalak Bali",
    image: Image1,
  },
  {
    title: "Kerajinan Perak",
    image: Image1,
  },
  {
    title: "Biogas",
    image: Image1,
  },
  {
    title: "Budidaya Lebah Madu",
    image: Image1,
  },
  {
    title: "Kerajinan Daur Ulang",
    image: Image1,
  },
];

const views = [
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
];

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <section
        id="hero"
        className="bg-background lg:px-32 md:px-12 px-5 py-20 grid place-items-center grid-cols-2 lg:items-start md:items-center lg:pt-36 gap-12 md:gap-5"
      >
        <div className="col-span-2 md:col-span-1 md:pe-2 lg:pe-0">
          <h1 className="text-heading1 font-extrabold text-primary text-center md:text-start">
            DESA KARANG DALEM TUA
          </h1>
          <p className="text-body font-light text-center md:text-start">
            Karang Dalem Tua – Harmoni Tradisi, Alam, dan Kehidupan
          </p>
          <button className="mt-8 mx-auto md:mx-0 bg-primary text-background w-28 h-12 md:w-44 md:h-16 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1">
            <p className="text-body">Jelajahi</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="md:w-4 w-3"
            >
              <path
                fill="#FFFFFF"
                d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
              />
            </svg>
          </button>
        </div>
        <div className=" col-span-2 md:col-span-1 flex items-center lg:gap-12 md:gap-3 gap-5">
          <figure className="relative w-32 h-44 md:w-38 md:h-56 lg:w-87.25 lg:h-122.25">
            <Image
              src={Image1}
              alt="Home Image"
              fill
              className="object-cover rounded-tl-[80px] rounded-tr-[80px] rounded-br-0 rounded-bl-0"
            />
          </figure>
          <figure
            className="relative w-32 h-44
            md:w-46 md:h-100
            lg:w-87.25 lg:h-186"
          >
            <Image
              src={Image1}
              alt="Home Image"
              fill
              className="object-cover rounded-tl-[50px] md:rounded-tl-[80px] rounded-tr-0 rounded-br-[50px] md:rounded-br-[80px] rounded-bl-0"
            />
          </figure>
        </div>
      </section>
      <section
        id="about"
        className="text-background w-screen lg:h-261.75 min-h-160 lg:px-32 md:px-12 px-12 py-12 md:py-0 bg-primary grid grid-cols-2 items-center gap-24 md:gap-5"
      >
        <div className="col-span-2 md:col-span-1 h-full flex items-center">
          <figure className="relative lg:w-155.5 lg:h-155.5 md:w-80 md:h-80 w-56 h-56">
            <Image
              src={Image1}
              alt="About Section Image"
              fill
              className="object-cover object-top rounded-tl-0 rounded-tr-[80px] rounded-br-0 rounded-bl-[80px]"
            />
            <figure className="absolute lg:w-89.25 lg:h-89.25 md:w-44 md:h-44 w-36 h-36 lg:-bottom-20 lg:-right-20 md:-right-8 -right-16 -bottom-16">
              <Image
                src={Image1}
                alt="About Section Image"
                fill
                className="object-cover object-top rounded-tl-0 lg:rounded-tr-[80px] md:rounded-tr-[50px] rounded-br-0 lg:rounded-bl-[80px] md:rounded-bl-[50px]"
              />
            </figure>
          </figure>
        </div>
        <div className="col-span-2 md:col-span-1 h-full flex flex-col justify-center">
          <h2 className="text-background text-heading2 font-extrabold lg:mt-28">
            Mengenal Desa Adat Karang Dalem Tua
          </h2>
          <article className="text-body mt-6">
            Desa Adat Karang Dalem Tua terletak di wilayah Perbekelan Bongkasa
            Pertiwi, Kecamatan Abiansemal, Kabupaten Badung, Bali. Desa ini
            dikenal sebagai kawasan yang masih menjaga kelestarian adat, budaya,
            dan spiritualitas Bali secara utuh. Kehidupan masyarakat bertumpu
            pada keseimbangan antara manusia, alam, dan Tuhan, dengan lingkungan
            yang masih asri, pertanian tradisional, serta nilai gotong royong
            (ngayah) yang tetap hidup hingga kini. Karang Dalem Tua menghadirkan
            pengalaman Bali yang autentik, tenang, dan sarat makna budaya.
          </article>
          <button className="lg:mt-20 mt-12  bg-accent text-primary w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1">
            <p className="text-body">Jelajahi</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="md:w-4 w-3"
            >
              <path
                fill="#2a3324"
                d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
              />
            </svg>
          </button>
        </div>
      </section>
      <section
        id="proyek"
        className="w-screen lg:min-h-261.75 min-h-160 px-0 md:px-0 py-20 bg-background"
      >
        <div className="px-12 md:px-0">
          <h2 className="text-primary text-heading2 text-center font-extrabold lg:mt-20 ">
            APA YANG KAMI KERJAKAN
          </h2>
          <p className="text-body text-center">
            Ragam Kegiatan yang Kami Jaga dan Kembangkan
          </p>
        </div>
        <div className="w-screen flex justify-center flex-wrap lg:gap-44 md:gap-12 gap-5 lg:mt-32 mt-12">
          {projects.map((p, index) => (
            <div className="">
              <figure className="relative lg:w-87.25 lg:h-99.5 md:w-64 w-32 h-44 md:h-80">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-tl-[80px] rounded-tr-[80px] rounded-br-0 rounded-bl-0"
                />
              </figure>
              <Link
                href=""
                className="text-body text-center underline text-sky-500 mt-8 block"
              >
                {p.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section
        id="tradisi"
        className="w-screen lg:h-261.75 md:min-h-140 min-h-90 grid grid-cols-2"
      >
        <figure className="col-span-1 relative w-full h-full">
          <Image
            src={Image1}
            alt="Penjor Galungan"
            fill
            className="object-cover"
          />
          <div className="overlay absolute w-full h-full bg-black opacity-35 z-0" />
          <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-background text-center text-heading2">
              Penjor Galungan
            </h2>
            <button className="lg:mt-3 mt-8 mx-auto bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1">
              <p className="text-body">Jelajahi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="md:w-4 w-3"
              >
                <path
                  fill="#f8f7f2"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </button>
          </div>
        </figure>
        <figure className="col-span-1 relative w-full h-full">
          <Image
            src={Image1}
            alt="Penjor Galungan"
            fill
            className="object-cover"
          />
          <div className="overlay absolute w-full h-full bg-black opacity-35 z-0" />
          <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-background text-center text-heading2">
              Penjor Galungan
            </h2>
            <button className="lg:mt-3 mt-8 mx-auto bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1">
              <p className="text-body">Jelajahi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="md:w-4 w-3"
              >
                <path
                  fill="#f8f7f2"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </button>
          </div>
        </figure>
      </section>
      <section
        id="alam"
        className="w-screen lg:h-261.75 min-h-160 px-12 gap-12 grid grid-cols-2 lg:px-12 justify-items-center items-center"
      >
        <h2 className="mt-12 text-heading2 text-center col-span-2">
          SEKILAS PESONA ALAM KAMI
        </h2>
        <div className="col-span-2 md:col-span-1">
          <figure className="relative grid grid-cols-3 lg:w-156.75 lg:h-470,25 lg:gap-3 gap-1">
            {views.map((v, index) => (
              <Image
                key={index}
                src={v}
                alt="Pesona Alam Desan Karang Dalem Tua"
                width={100}
                height={100}
                className="object-cover lg:w-52 lg:h-52 md:w-32 md:h-32 w-26 h-26 col-span-1 rounded-4xl"
              />
            ))}
          </figure>
        </div>
        <div className="col-span-2 md:col-span-1 lg:pe-32">
          <article className="text-body">
            Karang Dalem Tua menawarkan suasana pedesaan Bali yang alami,
            tenang, dan asri. Hamparan persawahan, aliran Sungai Ayung, serta
            kehidupan tradisional desa menciptakan pengalaman wisata yang
            autentik dan menenangkan.
            <br />
            <br />
            Berbagai aktivitas dapat dilakukan seperti trekking alam, wisata
            pertanian, eksplorasi budaya desa, serta menikmati panorama
            pedesaan. Waktu terbaik untuk berkunjung adalah pada musim kemarau,
            antara April hingga Oktober, ketika alam berada pada kondisi paling
            indah.
          </article>
        </div>
      </section>
      <section className="w-screen lg:h-170 md:h-150 h-120 lg:px-32 md:px-12 px-5 py-12">
        <figure
          className="w-full h-full relative bg-no-repeat bg-center bg-cover bg-fixed"
          style={{ backgroundImage: `url(${Image1.src})` }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="absolute w-full px-4 lg:px-32 text-background z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-center font-extrabold text-heading2">
              Ingin Tau Lebih Lanjut?
            </h2>
            <article className="text-center text-body md:mt-4 mt-2">
              Desa Adat Karang Dalem Tua membuka diri bagi siapa pun yang ingin
              merasakan kehidupan desa Bali yang autentik, harmonis, dan sarat
              nilai budaya. Dengan perpaduan tradisi, alam, dan masyarakat yang
              ramah, desa ini menghadirkan pengalaman yang bukan sekadar wisata,
              tetapi perjalanan memahami kehidupan Bali yang sesungguhnya.
            </article>
            <div className="flex lg:gap-10 gap-5 flex-wrap justify-center md:mt-8 mt-6">
              <button className="group relative lg:mt-8 bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="md:w-4 w-3"
                >
                  <path
                    fill="#f8f7f2"
                    d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
                <p className="text-body">Instagram</p>
                <span
                  className="absolute inset-0 scale-0 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 bg-background/20 transition-transform duration-200 ease-out group-hover:scale-[1]"
                  style={{ transformOrigin: "center" }}
                />
              </button>
              <button className="group cursor-pointer relative lg:mt-8 bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="md:w-4 w-3"
                >
                  <path
                    fill="#f8f7f2"
                    d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
                <p className="text-body">Whatsapp</p>
                <span
                  className="absolute inset-0 scale-0 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 bg-background/20 transition-transform duration-200 ease-out group-hover:scale-[1]"
                  style={{ transformOrigin: "center" }}
                />
              </button>
              <button className="group relative lg:mt-8 bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="md:w-4 w-3"
                >
                  <path
                    fill="#f8f7f2"
                    d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                  />
                </svg>
                <p className="text-body">Email</p>
                <span
                  className="absolute inset-0 scale-0 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 bg-background/20 transition-transform duration-200 ease-out group-hover:scale-[1]"
                  style={{ transformOrigin: "center" }}
                />
              </button>
            </div>
          </div>
        </figure>
      </section>
    </main>
  );
}
