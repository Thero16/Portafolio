import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ href, children }) => (
    <a href={href} className="block md:inline hover:text-gray-400 transition-colors duration-300">
      {children}
    </a>
  );

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black text-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-2xl font-bold">Juan Pablo</div>
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto mt-4 md:mt-0`}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About me</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4 md:mt-0"
        >
          Connect with me
        </button>
      </div>
    </nav>
  );
};