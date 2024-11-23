import { CodeIcon, LayersIcon, PackageIcon, BoxIcon } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";
import MagicCard from "../MagicCard";

export default function ReactFeatures() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <main className="max-w-7xl mx-auto px-4 py-12">
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            A JavaScript library for building user interfaces
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              onClick={() => navigate("/enquiry")}
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Get Started
              {/* <HeroBtn name=" Get Started" /> */}
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              onClick={() => navigate("/services")}
              className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{
              y: -10,
            }}
            className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-white"
          >
            <CodeIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Declarative
            </h3>
            <p className="text-gray-600">
              React makes it painless to create interactive UIs.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-white"
          >
            <LayersIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Component-Based
            </h3>
            <p className="text-gray-600">
              Build encapsulated components that manage their state.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-white"
          >
            <PackageIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Learn Once, Write Anywhere
            </h3>
            <p className="text-gray-600">
              Develop new features without rewriting existing code.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="p-6 rounded-xl border hover:shadow-lg transition-shadow bg-white"
          >
            <BoxIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Virtual DOM
            </h3>
            <p className="text-gray-600">
              A lightweight representation of the real DOM.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-black">
            Trusted by thousands of companies
          </h2>
          {/* <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg"
              alt="Amazon"
              className="h-8"
            />
          </div> */}

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 px-4 sm:px-6 md:px-12 lg:px-20">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <MagicCard imageSrc={`/client-${index + 1}.png`} />
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
