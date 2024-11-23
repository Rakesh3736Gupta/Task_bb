import { CodeIcon, SmartphoneIcon, LayersIcon, RocketIcon } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
import MagicCard from "../MagicCard";
export default function AndroidDevelopment() {
  return (
    <div className="w-full overflow-hidden">
      <header className="relative h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3"
          alt="Android Development"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
              Android Development
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Build powerful and innovative mobile applications for the world's
              most popular platform
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-20">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow bg-white">
                <CodeIcon className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  Native Development
                </h3>
                <p className="text-gray-600">
                  Build high-performance applications using Kotlin and Java with
                  Android SDK
                </p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow bg-white">
                <LayersIcon className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  Material Design
                </h3>
                <p className="text-gray-600">
                  Create beautiful user interfaces following Google's design
                  guidelines
                </p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow bg-white">
                <RocketIcon className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-2xl font-semibold mb-3 text-black">
                  Performance
                </h3>
                <p className="text-gray-600">
                  Optimize your apps for speed and efficiency across all Android
                  devices
                </p>
              </div>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="flex-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3"
                  alt="Android Studio"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="flex-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Modern Development Tools
                </h2>
                <p className="text-gray-600 mb-6">
                  Use industry-standard tools like Android Studio, featuring
                  advanced code editing, debugging, and performance tooling to
                  build exceptional Android applications.
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 text-green-600" />
                  <SmartphoneIcon className="w-8 h-8 text-green-600" />
                </div>
              </motion.div>
            </div>
          </section>

          <section>
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
                Trusted by Leading Companies
              </h2>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 px-4 sm:px-6 md:px-12 lg:px-20">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <MagicCard imageSrc={`/client-${index + 1}.png`} />
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
