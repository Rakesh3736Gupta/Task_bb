import {
  BookOpenIcon,
  CodeIcon,
  ServerIcon,
  ShieldIcon,
  GlobeIcon,
} from "lucide-react";
import React from "react";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";

export default function DotNetPage() {
  return (
    <div className="w-full bg-blue-100">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-blue-100 to-purple-100 text-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                .NET Development
              </h1>
              <p className="text-xl md:text-2xl">Build anything with .NET</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
              alt=".NET Logo"
              className="w-48 md:w-64 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-16">
        {/* Why Choose .NET Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Why Choose .NET?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              // Array of card data for ease of rendering
              {
                icon: <ServerIcon className="w-12 h-12 text-[#512BD4]" />,
                title: "High Performance",
                description:
                  "Build fast, scalable applications with optimized performance",
              },
              {
                icon: <ShieldIcon className="w-12 h-12 text-[#512BD4]" />,
                title: "Secure",
                description: "Enterprise-level security with built-in features",
              },
              {
                icon: <GlobeIcon className="w-12 h-12 text-[#512BD4]" />,
                title: "Cross-Platform",
                description: "Run anywhere on Windows, Linux, and macOS",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 border rounded-lg shadow-sm bg-white"
              >
                {card.icon}
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
                title: ".NET Core",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
                title: "ASP.NET",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
                title: "C#",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
                title: "Blazor",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-4 border rounded-lg text-center bg-white shadow-sm"
              >
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-800">{tech.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning Resources Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <BookOpenIcon className="w-8 h-8 text-[#512BD4] mr-4 flex-shrink-0" />
                ),
                title: "Documentation",
                description:
                  "Comprehensive guides and API references for .NET development",
              },
              {
                icon: (
                  <CodeIcon className="w-8 h-8 text-[#512BD4] mr-4 flex-shrink-0" />
                ),
                title: "Code Samples",
                description:
                  "Learn from practical examples and starter projects",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 border rounded-lg flex items-start bg-white shadow-sm"
              >
                {resource.icon}
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
