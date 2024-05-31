import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const RatingStar = ({ color }) => {
    const starColor = color === "black" ? "text-gray-500" : "text-yellow-500"
  return <FontAwesomeIcon className={`size-5 ${starColor}`} icon={faStar} />;
};

RatingStar.propTypes = {
    color: PropTypes.node.isRequired,
  };

export default RatingStar;