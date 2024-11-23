import {
  SearchIcon,
  CloudIcon,
  SmartphoneIcon,
  LayoutGridIcon,
  ShieldIcon,
  GlobeIcon,
  UsersIcon,
  RocketIcon,
} from "lucide-react";
import React from "react";
import bg1 from "../../../public/bg1.png";

import { motion } from "framer-motion";
import Footer from "@/components/shared/Footer";
export default function GoogleServices() {
  return (
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              duration: 0.6,
            }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Google Services for Everyone
            </h1>
            <p className="text-xl text-black mb-12 max-w-3xl mx-auto">
              Discover the power of Google's integrated ecosystem of products
              and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <img
                src="/bg1.png"
                alt="Google Search"
                className="rounded-lg shadow-xl"
              />
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
                duration: 0.6,
                delay: 0.4,
              }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <SearchIcon className="h-8 w-8 text-[#4285F4]" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Google Search
                  </h3>
                  <p className="text-black">
                    The world's information at your fingertips
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <CloudIcon className="h-8 w-8 text-[#DB4437]" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Google Cloud
                  </h3>
                  <p className="text-black">
                    Secure and scalable cloud solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <LayoutGridIcon className="h-8 w-8 text-[#F4B400]" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Google Workspace
                  </h3>
                  <p className="text-black">
                    Collaborative tools for productivity
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                duration: 0.6,
              }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Google Services Work Together
              </h2>
              <p className="text-xl text-black">
                Seamlessly integrated services for a better digital experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <ShieldIcon className="h-12 w-12 text-[#4285F4] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Security First
                </h3>
                <p className="text-black">
                  Advanced security across all services
                </p>
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
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <GlobeIcon className="h-12 w-12 text-[#0F9D58] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Global Access
                </h3>
                <p className="text-black">Available anywhere, anytime</p>
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
                  duration: 0.6,
                  delay: 0.6,
                }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <UsersIcon className="h-12 w-12 text-[#DB4437] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Collaboration
                </h3>
                <p className="text-black">Work together seamlessly</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
