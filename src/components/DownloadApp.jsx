import apk from '../../src/assets/apk/makaryo.apk';
import { MdDownloadForOffline } from "react-icons/md";

const DownloadApp = () => {
  return (
    <a href={apk} download="makaryo.apk">
      <button className="text-white font-bold text-xl py-3 px-6 rounded-md bg-green-600 hover:bg-green-700 flex items-center justify-center">
        Install App
        <MdDownloadForOffline className="h-6 w-6 ml-3" />
      </button>
    </a>
  );
};

export default DownloadApp;