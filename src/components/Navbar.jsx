import Download from "./Download";
import logo from "../assets/img/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
         <nav className="nav-container bg-white text-black p-4 sm:px-6 lg:px-8">
         <div className="container mx-auto flex items-center justify-between pl-20 pr-20">
             <div className="flex items-center">
                <a href="#home"><img src={logo} alt="logo" className="h-8 mr-3"/></a>
             </div>
             <div className="lg:hidden">
                 <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                     </svg>
                 </button>
             </div>
             <div className={`${isOpen ? 'flex' : 'hidden'} flex-grow flex justify-center lg:flex lg:flex-row lg:items-center lg:justify-end`}>
                 <a href="#home" className="px-3 py-2 rounded hover:text-orange-500">Home</a>
                 <a href="#services" className="px-3 py-2 rounded hover:text-orange-500">Services</a>
                 <a href="#features" className="px-3 py-2 rounded hover:text-orange-500">Features</a>
                 <a href="#testimonials" className="px-3 py-2 rounded hover:text-orange-500">Testimonials</a>
                 <a href="#faq" className="px-3 py-2 rounded hover:text-orange-500">FAQs</a>
             </div>
             <div className="hidden lg:flex lg:flex-grow lg:justify-end">
                 <Download/>
             </div>
         </div>
     </nav>
    );
};

export default Navbar;



