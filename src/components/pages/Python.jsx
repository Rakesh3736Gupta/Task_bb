import { BookOpenIcon, CodeIcon, DatabaseIcon, CloudIcon } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";

export default function PythonPage() {
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
            duration: 0.8,
          }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Python Programming Language
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Python is a powerful, easy-to-learn programming language that
            emphasizes readability and simplicity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <BookOpenIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Easy to Learn
            </h3>
            <p className="text-gray-600">
              Simple syntax and readable code make Python perfect for beginners
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <CodeIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Versatile
            </h3>
            <p className="text-gray-600">
              Used in web development, data science, AI, and more
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <DatabaseIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Rich Libraries
            </h3>
            <p className="text-gray-600">
              Extensive collection of libraries and frameworks
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <CloudIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Cross-Platform
            </h3>
            <p className="text-gray-600">
              Runs on Windows, Mac, Linux, and more
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
            delay: 0.4,
          }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src="https://www.python.org/static/community_logos/python-powered-h-140x182.png"
            alt="Python Code"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
              <button
                onClick={() => navigate("/enquiry")}
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Get Started
                {/* <HeroBtn name=" Get Started" /> */}
              </button>
              <button
                onClick={() => navigate("/services")}
                className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
