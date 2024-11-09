import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Saksham</p>
              <p className="text-gray-400 mt-2">Computer Science Student</p>
              <p className="text-gray-400">SRM Institute of Science and Technology</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a 
                  href="https://www.linkedin.com/in/saksham-kumar-b25188297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://github.com/sakshamcod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://x.com/Saksham80073938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <p className="text-gray-400">
                <a href="mailto:amiablesaksham3@gmail.com" className="hover:text-teal-400 transition-colors duration-300">
                  amiablesaksham3@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+918962888548" className="hover:text-teal-400 transition-colors duration-300">
                  +91 8962888548
                </a>
              </p>
            </div>
          </div>

          <div className="w-full border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              &copy; {currentYear} Saksham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer