import { FaGithub } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-center items-center space-x-10">
            <p className="text-gray-400"> &copy; {new Date().getFullYear()} Juan Pablo Castaño Botero. All rights reserved.</p>
            <div className="flex my-4 md:my-0">
                <a href="https://github.com/Thero16" target="_blank" className="text-gray-400 hover:text-white">
                    <FaGithub></FaGithub>
                </a>
            </div>
        </div> 
    </footer>
  )
}
