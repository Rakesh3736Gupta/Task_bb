import React from "react";
import { motion } from "framer-motion";
import MediaButton from "../MediaIcon";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"; // Correct import
import Footer from "../shared/Footer";

export default function SocialMediaPromotion() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-100">
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
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Boost Your Social Media Presence
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Transform your brand with our comprehensive social media marketing
            solutions.
          </p>

          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 flex flex-col justify-start">
                <p className="text-lg sm:text-xl text-black">
                  Elevate your brand with our powerful social media promotion
                  tools. Reach more customers and grow your audience
                  effortlessly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
                  <button
                    onClick={() => navigate("/enquiry")}
                    className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    Get Started
                    {/* <HeroBtn name=" Get Started" /> */}
                  </button>
                  <button
                    onClick={() => navigate("/services")}
                    className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                    Our Services
                  </button>
                </div>
              </div>
              <div className="relative flex items-start">
                <img
                  src="/social2.png"
                  alt="Social Media Dashboard"
                  className="w-full max-w-xs md:max-w-sm h-auto rounded-lg shadow-2xl transition duration-300 transform hover:scale-105"
                />
                <div className="absolute -bottom-4 -left-4 bg-indigo-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <span className="text-lg font-bold">50%</span>
                  <span className="block text-xs">More Engagement</span>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3"
              alt="Social Media Management"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-black">
              Social Media Management
            </h3>
            <p className="text-gray-600">
              Expert content creation and community engagement.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
              alt="Analytics & Reporting"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-black">
              Analytics & Reporting
            </h3>
            <p className="text-gray-600">
              Data-driven insights to optimize your strategy.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3"
              alt="Ad Campaigns"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-black">
              Ad Campaigns
            </h3>
            <p className="text-gray-600">
              Targeted advertising that drives results.
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
            duration: 1,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
            Connect With Us
          </h2>
          <div>
            <MediaButton />
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
            duration: 0.8,
          }}
          className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center shadow-xl"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful brands using our services.
          </p>
          <button
            onClick={() => navigate("/enquiry")}
            className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
