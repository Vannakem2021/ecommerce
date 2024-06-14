import { Link } from "react-router-dom";
import { SiZendesk } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">
                Subscribe our newsletter to get update.
              </h1>

              <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
                <input
                  id="email"
                  type="text"
                  className="rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  placeholder="Email Address"
                />

                <button className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Quick Link</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Industries</p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8" />

          <div className="flex items-center justify-between">
            <Link className="text-3xl" to="/">
              <h2 className="text-2xl font-medium tracking-wider">ZENSTORE</h2>
            </Link>
            <div className="flex space-x-2 text-2xl md:text-3xl">
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaSquareThreads />
              <FaYoutubeSquare />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
