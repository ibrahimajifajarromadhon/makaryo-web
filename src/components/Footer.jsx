import logoWhite from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white md:px-16 px-5 py-10">
      <div className="container mx-auto md:px-5 grid grid-cols-3 gap-4">
        <div>
          <div className="flex items-center text-white">
            <a href="#home">
              <img src={logoWhite} alt="Makaryo Logo" />
            </a>
          </div>
          <h3 className="text-md font-bold mt-5 mb-3">PT. Makaryo Indonesia</h3>
          <p className="text-sm">
            Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55281
          </p>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-orange-400">
                Our Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#features" className="hover:text-orange-400">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#testimonials" className="hover:text-orange-400">
                Testimonials
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:text-orange-400">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="/founder" className="hover:text-orange-400">
                Founder
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Makaryo. All rights reserved.
          </p>
          <a href="/term" className="hover:text-orange-400">
            <p className="text-sm md:text-base py-2">Terms of Service</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
