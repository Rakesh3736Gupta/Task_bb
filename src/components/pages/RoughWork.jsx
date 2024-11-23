import { render } from "react-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si";
export default function NodeJsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
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
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Power Your Backend with{" "}
            <span className="text-green-600">Node.js</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build scalable and high-performance applications with JavaScript on
            the server side
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Node.js?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaServer className="text-green-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Fast & Efficient
                  </h3>
                  <p className="text-gray-600">
                    Non-blocking I/O operations for optimal performance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaDatabase className="text-green-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Rich Ecosystem
                  </h3>
                  <p className="text-gray-600">
                    Access to npm with millions of reusable packages
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCloud className="text-green-600 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Scalable</h3>
                  <p className="text-gray-600">
                    Perfect for microservices and real-time applications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="relative"
          >
            <img
              src="https://nodejs.org/static/images/logo-hexagon.svg"
              alt="Node.js Logo"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="bg-gray-50 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Tools & Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <SiExpress className="text-5xl text-gray-700" />
              <span className="font-medium">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiMongodb className="text-5xl text-green-500" />
              <span className="font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaNodeJs className="text-5xl text-green-600" />
              <span className="font-medium">npm</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiSocketdotio className="text-5xl text-gray-700" />
              <span className="font-medium">Socket.IO</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of developers who trust Node.js for their backend
            needs
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Download Node.js
          </button>
        </motion.div>
      </main>
    </div>
  );
}
