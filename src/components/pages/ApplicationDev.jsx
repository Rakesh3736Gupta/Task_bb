import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Monitor, Rocket, Cloud } from "lucide-react"; // Import necessary icons
import Footer from "@/components/shared/Footer";

const ApplicationDev = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce pt-10">
          Application Development
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We specialize in creating high-quality applications tailored to your
          business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Development"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Code className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Custom Development
                </h3>
                <p className="text-gray-600">
                  Tailored solutions for your unique needs
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Smartphone className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Mobile First
                </h3>
                <p className="text-gray-600">
                  Responsive designs that work on all devices
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Monitor className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Web Applications
                </h3>
                <p className="text-gray-600">
                  Modern web apps with cutting-edge tech
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="bg-blue-100 py-20 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">
                We follow a streamlined process to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <Rocket className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Planning
                </h3>
                <p className="text-gray-600">
                  Detailed project planning and requirement analysis
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <Code className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Development
                </h3>
                <p className="text-gray-600">
                  Agile development with regular updates
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Deployment
                </h3>
                <p className="text-gray-600">
                  Smooth deployment and ongoing support
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/300x200?text=Mobile+App"
              alt="Screenshot of a mobile application"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Mobile Apps
            </h2>
            <p className="text-gray-600">
              Developing intuitive and engaging mobile applications for iOS and
              Android.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/300x200?text=Web+App"
              alt="Screenshot of a web application"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Web Apps</h2>
            <p className="text-gray-600">
              Creating responsive and dynamic web applications for various
              industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/300x200?text=Mobile+App"
              alt="Screenshot of a mobile application"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Desktop Apps
            </h2>
            <p className="text-gray-600">
              Building powerful desktop applications for Windows, macOS, and
              Linux.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationDev;
