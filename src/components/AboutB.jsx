import React from "react";
import { motion } from "framer-motion";
import MediaButton from "./MediaIcon";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <h1 className="text-xl md:text-2xl font-bold text-blue-500 text-center hover:text-blue-700 mb-8">
          We’re a passionate group of people building the future of Websites and
          Apps
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
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
              delay: 0.4,
            }}
            className="order-2 md:order-1 space-y-6 px-4"
          >
            <p className="text-gray-600">
              At Pairtech, we believe that technology should empower your
              business, not hinder it. That's why we're dedicated to providing
              top-notch IT services that help you stay ahead of the curve. Our
              team of expert technicians, consultants, and engineers is
              committed to delivering exceptional solutions that meet the unique
              needs of your organization.
            </p>
            <p className="text-gray-600">
              Founded on innovation, integrity, and customer satisfaction,
              Pairtech started with a simple idea: to deliver reliable,
              efficient, and cost-effective IT services that empower businesses
              to thrive in a fast-paced digital world. Today, we are a trusted
              partner for organizations of all sizes, from startups to large
              enterprises.
            </p>
          </motion.div>

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
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src="./About.svg"
              alt="Team"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
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
            delay: 0.6,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4"
        >
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver innovative solutions that empower businesses to thrive
              in the digital age.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the leading force in digital transformation, setting new
              standards in technology.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-black">
              Our Values
            </h3>
            <p className="text-gray-600">
              Innovation, integrity, and excellence in everything we do.
            </p>
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
            delay: 0.8,
          }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            <MediaButton />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
