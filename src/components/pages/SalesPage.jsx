import { render } from "react-dom";
import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaChartLine, FaUsers, FaRocket, FaCog } from "react-icons/fa";
import Footer from "../shared/Footer";
import salesforce from "../../../public/salesforce.jpg";
import { useNavigate } from "react-router-dom";

export default function SalesforcePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-100 mt-20">
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
            Salesforce Cloud Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with the world's #1 CRM platform and cloud
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaChartLine className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Sales Cloud
            </h3>
            <p className="text-gray-600">
              Close more deals and accelerate growth with the world's #1 sales
              platform
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Service Cloud
            </h3>
            <p className="text-gray-600">
              Deliver smarter, faster, and more personalized customer service
              experiences
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FaRocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Marketing Cloud
            </h3>
            <p className="text-gray-600">
              Create personalized marketing journeys across all digital channels
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
              Why Choose Salesforce?
            </h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  1
                </div>
                <p className="ml-4 text-gray-600">
                  Increase sales productivity by up to 37%
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  2
                </div>
                <p className="ml-4 text-gray-600">
                  Improve customer satisfaction by 45%
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  3
                </div>
                <p className="ml-4 text-gray-600">
                  ROI of 37% on average for Salesforce customers
                </p>
              </motion.div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              src={salesforce}
              alt="Salesforce Platform"
              className="w-full h-auto rounded-lg shadow-lg"
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
            Start Your Digital Transformation
          </h2>
          <motion.button
            onClick={() => navigate("/enquiry")}
            whileHover={{
              scale: 1.05,
            }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
