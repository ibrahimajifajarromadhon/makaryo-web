import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const CustomerServiceButton = () => {
  const handleCustomerServiceClick = () => {
    window.open("https://api.whatsapp.com/send?phone=6287778667251", "_blank");
  };

  return (
    <div
      className="fixed bottom-5 right-10 bg-orange-500 text-white p-5 rounded-full cursor-pointer flex items-center justify-center hover:bg-orange-600 transition-transform duration-500 ease-in-out hover:scale-125"
      onClick={handleCustomerServiceClick}
    >
      <FontAwesomeIcon className="size-10" icon={faHeadset} />
    </div>
  );
};

export default CustomerServiceButton;