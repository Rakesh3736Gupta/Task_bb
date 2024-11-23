import { render } from "react-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaPhp, FaDatabase, FaServer, FaCode, FaCogs } from "react-icons/fa";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";
import php from "../../../public/php.jpg";

export default function PhpPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-100 mt-14">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Modern PHP Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful web applications with PHP 8's advanced features and
            modern frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaCode className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Modern Syntax
            </h3>
            <p className="text-gray-600">
              Take advantage of PHP 8's new features including attributes, named
              arguments, and match expressions
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaServer className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Laravel Framework
            </h3>
            <p className="text-gray-600">
              Build elegant applications with Laravel, the most popular PHP
              framework with extensive features
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FaDatabase className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Database Integration
            </h3>
            <p className="text-gray-600">
              Seamless integration with MySQL, PostgreSQL, and other major
              databases
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Why Choose PHP?
            </h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                  1
                </div>
                <p className="ml-4 text-gray-600">
                  Powers 77.4% of all websites with known server-side
                  programming languages
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                  2
                </div>
                <p className="ml-4 text-gray-600">
                  Rich ecosystem with over 25 million PHP developers worldwide
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                  3
                </div>
                <p className="ml-4 text-gray-600">
                  Fast development cycle with modern tooling and frameworks
                </p>
              </motion.div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              src={php}
              alt="PHP Development"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-black">
            Start Building with PHP
          </h2>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => navigate("/enquiry")}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors  font-semibold  shadow-md duration-300"
          >
            Get Started
            {/* <HeroBtn name=" Get Started" /> */}
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
