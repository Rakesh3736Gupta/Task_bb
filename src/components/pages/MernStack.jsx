import { DatabaseIcon, CodeIcon, ServerIcon, LayersIcon } from "lucide-react";
import React from "react";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";

export default function MernStack() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            MERN Stack Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful web applications with MongoDB, Express.js, React.js,
            and Node.js
          </p>
        </motion.div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            // Array of card data for ease of rendering
            {
              icon: <DatabaseIcon className="w-6 h-6 text-blue-600" />,
              title: "MongoDB",
              description:
                "NoSQL database for storing application data in JSON-like documents",
            },
            {
              icon: <ServerIcon className="w-6 h-6 text-green-600" />,
              title: "Express.js",
              description:
                "Web application framework for building robust APIs and server-side applications",
            },
            {
              icon: <CodeIcon className="w-6 h-6 text-blue-600" />,
              title: "React.js",
              description:
                "JavaScript library for building dynamic user interfaces and components",
            },
            {
              icon: <LayersIcon className="w-6 h-6 text-green-600" />,
              title: "Node.js",
              description:
                "Runtime environment for executing JavaScript code server-side",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-6 border rounded-lg shadow-sm bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-4 text-black">
              Why Choose MERN Stack?
            </h2>
            <div className="space-y-4">
              {[
                // Array of benefit data for ease of rendering
                "Single language (JavaScript) across the entire stack",
                "Open-source and large community support",
                "Flexible and scalable architecture",
                "Real-time capabilities with WebSocket integration",
              ].map((benefit, index) => (
                <div className="flex items-start" key={index}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <img
              src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
              alt="MERN Stack Development"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-black">
            Ready to Build Your Next Project?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/enquiry")}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
