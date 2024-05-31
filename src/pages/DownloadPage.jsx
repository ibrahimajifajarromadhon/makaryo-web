import Slider from "react-slick";
import logo from "../assets/img/icon-big.png";
import DownloadApp from "../components/DownloadApp";
import RatingStar from "../components/RatingStar";
import { PreviewImage, ServicesData } from "../data/Data";

const DownloadPage = () => {
  const preview = PreviewImage;
  const services = ServicesData;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="py-5 px-10">
      <h1 className="text-5xl font-semibold">Mini Store App</h1>
      <div className="bg-black rounded-md w-full min-h-1 flex items-center justify-center mt-3"></div>
      <div className="bg-gray-200 rounded-md w-full min-h-10 flex items-center justify-center text-center my-5">
        Aplikasi ini hanya tersedia bagi pengguna Android.
      </div>
      <main className="container mx-auto">
        <div className="flex flex-wrap my-7">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Makaryo Apps"
              className="min-w-40 min-h-40 mx-10"
            />
          </div>
          <div className="my-auto">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold">Makaryo App</h1>
              <button className="border border-black font-semibold rounded-md mx-2 px-1 h-5 text-xs">
                4+
              </button>
            </div>
            <p className="my-2 text-blue-500 font-semibold text">
              MAKARYO INDONESIA, PT
            </p>
            <div className="flex">
              <RatingStar color="yellow" />
              <RatingStar color="yellow" />
              <RatingStar color="yellow" />
              <RatingStar color="yellow" />
              <RatingStar color="black" />
            </div>
            <div className="my-3">
              <DownloadApp />
            </div>
          </div>
        </div>
        <Slider {...settings} className="container mx-auto">
          {preview.map((p, i) => (
            <img
              key={i}
              src={p.image}
              alt="oke"
              className=" rounded-2xl overflow-hidden"
            />
          ))}
        </Slider>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Tentang Aplikasi</h2>
          <p className="my-3">
            Makaryo Apps adalah aplikasi pemesanan jasa tukang online yang
            memudahkan pengguna untuk memesan jasa tukang secara online.
          </p>
          <p>Makaryo Apps kini telah hadir dengan empat layanan baru yaitu:</p>
          {services.map((service, i) => (
            <div key={i}>
              <p className="mt-3">{service.title}:</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DownloadPage;