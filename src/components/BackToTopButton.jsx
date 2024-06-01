import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react'; 

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <button className={`fixed bottom-32 right-14 bg-orange-500 text-white p-5 rounded-full cursor-pointer flex items-center justify-center hover:bg-orange-600 transition-transform duration-500 ease-in-out hover:scale-105 ${isVisible ? 'block' : 'hidden'}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;