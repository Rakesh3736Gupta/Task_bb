import {
  CodeIcon,
  LayersIcon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
export default function WebDevelopment() {
  return (
    <div className="w-full overflow-hidden">
      <header className="w-full h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
          alt="Web Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
            >
              Modern Web Development
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-xl text-white text-center max-w-2xl"
            >
              Building responsive, scalable, and performant web applications
            </motion.p>
          </div>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <MonitorIcon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2  text-black">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                Creating beautiful and intuitive user interfaces using modern
                frameworks
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <CodeIcon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Backend Development
              </h3>
              <p className="text-gray-600">
                Building robust server-side applications and APIs
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <SmartphoneIcon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Ensuring perfect display across all devices and screen sizes
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <LayersIcon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Full Stack Solutions
              </h3>
              <p className="text-gray-600">
                End-to-end development services for complete web applications
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Latest Technologies
              </h2>
              <p className="text-gray-600 mb-6">
                We use cutting-edge technologies and frameworks to build modern
                web applications that are fast, secure, and scalable.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  alt="React"
                  className="h-16 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                  alt="Tailwind"
                  className="h-16 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                  alt="Node.js"
                  className="h-16 object-contain"
                />
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3"
              alt="Development"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
