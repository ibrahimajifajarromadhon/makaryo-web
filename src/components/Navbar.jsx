import { useState } from "react";
import Download from "./Download";
import logo from "../assets/img/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black p-4 sm:px-6 lg:px-8">
            <div className="xl:container mx-auto flex flex-col lg:flex-row items-end justify-between xl:pl-20 xl:pr-20">
                <div className="flex justify-between w-full lg:w-auto">
                    <a href="#home"><img src={logo} alt="Makryo Logo" className=""/></a>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none lg:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-end lg:flex lg:flex-row lg:justify-center lg:items-center`}>
                    <a href="#home" className="px-3 py-2 rounded hover:text-orange-500">Home</a>
                    <a href="#services" className="px-3 py-2 rounded hover:text-orange-500">Services</a>
                    <a href="#features" className="px-3 py-2 rounded hover:text-orange-500">Features</a>
                    <a href="#testimonials" className="px-3 py-2 rounded hover:text-orange-500">Testimonials</a>
                    <a href="#faq" className="px-3 py-2 rounded hover:text-orange-500">FAQs</a>               
                    <a href="#team" className="px-3 py-2 rounded hover:text-orange-500 xl:mr-20 lg:mr-10">Team</a>               
                    <Download/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;