export const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
                <img src="src\assets\desarrollador.png" className="w-72 h-80 object-cover mb-8 md:mb-0"></img>
                <div className="flex-1">
                <p className="text-lg mb-8">I'm a passionate developer with a focus on creating innovative and inclusive digital solutions. With expertise in backend technologies like NestJS, TypeORM, and PostgreSQL, I thrive on building secure, efficient, and scalable applications. I believe in the power of technology to bring people together and make a positive impact, and I’m always excited to explore new challenges and learn new skills along the way.
                </p>
                <div className="space-y-6"> 

              <div className="flex items-center">
                <label htmlFor="htmllandcss" className="w-3/12 text-right pr-4">HTML & CSS</label> 
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="nestjs" className="w-3/12 text-right pr-4">NestJS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="postgresql" className="w-3/12 text-right pr-4">PostgreSQL</label> 
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
