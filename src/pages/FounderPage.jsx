import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FoundersData } from "../data/Data";

const FounderPage = () => {
  const founders = FoundersData;

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mt-8 mb-5 text-orange-500">Kelompok 2</h1>
      <p className="text-lg text-gray-600 mb-8">
        Ini adalah kelompok kami yang terdiri dari 5 anggota dengan keunikan
        masing-masing.
      </p>
      <div className="flex flex-wrap justify-center mb-10">
        {founders.map((founder, i) => (
          <div
            key={i}
            className="min-w-72 rounded-2xl shadow-lg shadow-orange-500 m-4 hover:bg-orange-500 hover:text-white transition-transform duration-500 ease-in-out hover:scale-105 p-10 my-5"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="rounded-full w-50 h-40 mx-auto my-5"
            />
            <h2 className="text-lg font-semibold">{founder.name}</h2>
            <p className="my-2">NIM: {founder.nim}</p>

            <a href={founder.linkedin}>
              <FontAwesomeIcon
                className="size-10 m-3 text-blue-500 hover:text-blue-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faLinkedin}
              />
            </a>
            <a href={founder.github}>
              <FontAwesomeIcon
                className="size-10 m-3 text-black hover:text-black-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faGithub}
              />
            </a>
            <a href={founder.ig}>
              <FontAwesomeIcon
                className="size-10 m-3 text-red-500 hover:text-red-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faInstagram}
              />
            </a>
            <a href={founder.fb}>
              <FontAwesomeIcon
                className="size-10 m-3 text-blue-500 hover:text-blue-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faFacebook}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderPage;
