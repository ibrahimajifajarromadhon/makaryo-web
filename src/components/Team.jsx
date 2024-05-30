import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { TeamsData } from "../data/Data";

const Team = () => {
  const teams = TeamsData;

  return (
    <section id="team" className="text-center">
      <h1 className="text-5xl font-bold mt-8 mb-5 text-orange-500">Team 2</h1>
      <p className="text-lg text-gray-600 mb-8">
        Ini adalah kelompok kami yang terdiri dari 5 anggota dengan keunikan
        masing-masing.
      </p>
      <div className="flex flex-wrap justify-center mb-10">
        {teams.map((team, i) => (
          <div
            key={i}
            className="min-w-72 rounded-2xl shadow-lg shadow-orange-500 m-4 hover:bg-orange-500 hover:text-white transition-transform duration-500 ease-in-out hover:scale-105 px-10 py-5 my-5"
          >
            <img
              src={team.image}
              alt={team.name}
              className="rounded-full w-50 h-40 mx-auto my-5"
            />
            <h2 className="text-lg font-semibold">{team.name}</h2>
            <p className="my-2">NIM: {team.nim}</p>

            <a href={team.linkedin}>
              <FontAwesomeIcon
                className="size-10 m-3 text-blue-500 hover:text-blue-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faLinkedin}
              />
            </a>
            <a href={team.github}>
              <FontAwesomeIcon
                className="size-10 m-3 text-black hover:text-black-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faGithub}
              />
            </a>
            <a href={team.ig}>
              <FontAwesomeIcon
                className="size-10 m-3 text-red-500 hover:text-red-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faInstagram}
              />
            </a>
            <a href={team.fb}>
              <FontAwesomeIcon
                className="size-10 m-3 text-blue-500 hover:text-blue-500 transition-transform duration-500 ease-in-out hover:scale-125"
                icon={faFacebook}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;