import { MdDownloadForOffline } from "react-icons/md";

const Download = () => {
  return (
    <a href="/download" className='download'>
      <button className="text-white font-bold py-2 px-4 rounded-full hover:bg-orange-500 flex items-center justify-center">
        Download App
        <MdDownloadForOffline className="h-6 w-6 ml-3" />
      </button>
    </a>
  );
};

export default Download;
