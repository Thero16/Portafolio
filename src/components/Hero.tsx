import React, { MouseEvent } from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white text-center py-16">
      <img 
        src="\img.png" 
        alt="Juan Pablo Castaño Botero"
        className="mx-auto mb-8 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Juan Pablo Castaño Botero
        </span> {" "}
        A full-stack developer
      </h1>
      <p className="mt-4 text-g text-gray-300 px-4 md:px-32">
        I am a developer passionate about creating amazing web experiences, I specialize in React, NestJs, TypeScript, Java, and Python.
      </p>
      <div className="mt-8 space-x-4">
        <button 
          onClick={scrollToSection('contact')}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact me
        </button>
        <button 
          onClick={scrollToSection('projects')}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Projects
        </button>
      </div>
    </div>
  );
};
