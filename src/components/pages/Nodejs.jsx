// import React from "react";
// import { motion } from "framer-motion";
// import { FaServer, FaDocker, FaNpm } from "react-icons/fa"; // Removed FaNodeJs if already declared/imported elsewhere
// import { SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si"; // Ensure these are included
// import Footer from "../shared/Footer";
// export default function NodejsPage() {
//   return (
//     <div className="w-full min-h-screen bg-blue-100 ">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Node.js Development
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Build scalable and efficient server-side applications with Node.js
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//             }}
//             className="p-6 bg-white rounded-xl shadow-md"
//           >
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <FaServer className="w-6 h-6 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">
//               Event-Driven Architecture
//             </h3>
//             <p className="text-gray-600">
//               Non-blocking I/O and event-driven programming for high performance
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{
//               scale: 1.05,
//             }}
//             className="p-6 bg-white rounded-xl shadow-md"
//           >
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <FaNpm className="w-6 h-6 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">
//               NPM Ecosystem
//             </h3>
//             <p className="text-gray-600">
//               Access to the world's largest software registry with countless
//               packages
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{
//               scale: 1.05,
//             }}
//             className="p-6 bg-white rounded-xl shadow-md"
//           >
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <FaDocker className="w-6 h-6 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">
//               Containerization
//             </h3>
//             <p className="text-gray-600">
//               Easy deployment with Docker and container technologies
//             </p>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             delay: 0.2,
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
//         >
//           <div className="order-2 md:order-1">
//             <h2 className="text-3xl font-bold mb-4 text-black">
//               Why Choose Node.js?
//             </h2>
//             <div className="space-y-4">
//               <motion.div
//                 whileHover={{
//                   x: 10,
//                 }}
//                 className="flex items-start"
//               >
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
//                   1
//                 </div>
//                 <p className="ml-4 text-gray-600">
//                   Fast execution and high performance
//                 </p>
//               </motion.div>
//               <motion.div
//                 whileHover={{
//                   x: 10,
//                 }}
//                 className="flex items-start"
//               >
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
//                   2
//                 </div>
//                 <p className="ml-4 text-gray-600">
//                   Large and active community support
//                 </p>
//               </motion.div>
//               <motion.div
//                 whileHover={{
//                   x: 10,
//                 }}
//                 className="flex items-start"
//               >
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
//                   3
//                 </div>
//                 <p className="ml-4 text-gray-600">
//                   Cross-platform development capabilities
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//           <div className="order-1 md:order-2">
//             <motion.img
//               whileHover={{
//                 scale: 1.05,
//               }}
//               src="https://nodejs.org/static/images/logo.svg"
//               alt="Node.js Development"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.4,
//           }}
//           className="bg-gray-50 rounded-2xl p-8 mb-20"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Popular Tools & Frameworks
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="flex flex-col items-center space-y-4">
//               <SiExpress className="text-5xl text-gray-700" />
//               <span className="font-medium">Express.js</span>
//             </div>
//             <div className="flex flex-col items-center space-y-4">
//               <SiMongodb className="text-5xl text-green-500" />
//               <span className="font-medium">MongoDB</span>
//             </div>
//             <div className="flex flex-col items-center space-y-4">
//               <FaNodeJs className="text-5xl text-green-600" />
//               <span className="font-medium">npm</span>
//             </div>
//             <div className="flex flex-col items-center space-y-4">
//               <SiSocketdotio className="text-5xl text-gray-700" />
//               <span className="font-medium">Socket.IO</span>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             delay: 0.4,
//           }}
//           className="mt-16 text-center"
//         >
//           <h2 className="text-3xl font-bold mb-8 text-black">
//             Start Building with Node.js
//           </h2>
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//             }}
//             className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaServer, FaDocker, FaNpm } from "react-icons/fa"; // Correctly importing FaNodeJs and other icons
import { SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si"; // Additional icons for other frameworks/tools
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";

export default function NodejsPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
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
            Node.js Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build scalable and efficient server-side applications with Node.js
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaServer className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Event-Driven Architecture
            </h3>
            <p className="text-gray-600">
              Non-blocking I/O and event-driven programming for high performance
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaNpm className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              NPM Ecosystem
            </h3>
            <p className="text-gray-600">
              Access to the world's largest software registry with countless
              packages
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FaDocker className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Containerization
            </h3>
            <p className="text-gray-600">
              Easy deployment with Docker and container technologies
            </p>
          </motion.div>
        </div>

        {/* Why Choose Node.js Section */}
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
              Why Choose Node.js?
            </h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                  1
                </div>
                <p className="ml-4 text-gray-600">
                  Fast execution and high performance
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                  2
                </div>
                <p className="ml-4 text-gray-600">
                  Large and active community support
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 10,
                }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                  3
                </div>
                <p className="ml-4 text-gray-600">
                  Cross-platform development capabilities
                </p>
              </motion.div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              src="https://nodejs.org/static/images/logo.svg"
              alt="Node.js Development"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Popular Tools & Frameworks Section */}
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
            delay: 0.4,
          }}
          className="bg-gray-50 rounded-2xl p-8 mb-20 mt-16 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Tools & Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <SiExpress className="text-5xl text-gray-700" />
              <span className="font-medium">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiMongodb className="text-5xl text-green-500" />
              <span className="font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <FaNodeJs className="text-5xl text-green-600" />
              <span className="font-medium">npm</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <SiSocketdotio className="text-5xl text-gray-700" />
              <span className="font-medium">Socket.IO</span>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
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
            Start Building with Node.js
          </h2>
          <motion.button
            onClick={() => navigate("/enquiry")}
            whileHover={{
              scale: 1.05,
            }}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
