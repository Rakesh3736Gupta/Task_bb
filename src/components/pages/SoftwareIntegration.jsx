import { ArrowRightIcon, CodeIcon, LayersIcon, ServerIcon } from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";

export default function IntegrationSoftware() {
  return (
    <div className="w-full overflow-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-black"
          >
            Software Integration Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Seamlessly connect your business applications and automate workflows
            with our powerful integration platform.
          </motion.p>
        </div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <ServerIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              API Integration
            </h3>
            <p className="text-gray-600">
              Connect your applications through secure API endpoints and custom
              webhooks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <LayersIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Data Synchronization
            </h3>
            <p className="text-gray-600">
              Keep your data in sync across multiple platforms in real-time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <CodeIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Custom Development
            </h3>
            <p className="text-gray-600">
              Build custom integrations tailored to your specific business
              needs.
            </p>
          </div>

          {/* Additional Card 1 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <i className="fas fa-cogs text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Easy Setup
            </h3>
            <p className="text-gray-600">
              Get started quickly with our easy setup process, designed to get
              you up and running in no time.
            </p>
          </div>

          {/* Additional Card 2 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <i className="fas fa-sync-alt text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Real-time Sync
            </h3>
            <p className="text-gray-600">
              Keep your data synchronized in real-time across all platforms,
              ensuring consistency and accuracy.
            </p>
          </div>

          {/* Additional Card 3 */}
          <div className="rounded-lg border p-6 hover:shadow-lg  bg-white transform transition-transform duration-300 hover:scale-105">
            <i className="fas fa-shield-alt text-blue-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2 text-black">Secure</h3>
            <p className="text-gray-600">
              Our software is built with security in mind, protecting your data
              with advanced encryption and security protocols.
            </p>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Integration Dashboard"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto">
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
