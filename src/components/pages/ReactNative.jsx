// import { GithubIcon, CodeIcon, SmartphoneIcon, LayersIcon } from "lucide-react";

// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../shared/Footer";
// import { useNavigate } from "react-router-dom";
// import react from "../../../public/React-Native.png";
// export default function ReactNativePage() {
//   const navigate = useNavigate();
//   return (
//     <div className="w-full min-h-screen bg-blue-100">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{
//               y: -20,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
//               alt="React Native Logo"
//               className="h-24 mx-auto mb-8"
//             />
//           </motion.div>

//           <motion.h1
//             initial={{
//               y: -20,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.2,
//             }}
//             className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
//           >
//             Build Native Apps with React
//           </motion.h1>

//           <motion.p
//             initial={{
//               y: -20,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.4,
//             }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Create native apps for Android and iOS using React. A framework for
//             building native apps using React.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {[
//             {
//               icon: <CodeIcon size={32} />,
//               title: "Learn Once, Write Anywhere",
//               description:
//                 "Build mobile apps with React's declarative UI paradigm",
//             },
//             {
//               icon: <SmartphoneIcon size={32} />,
//               title: "Native Components",
//               description:
//                 "Use platform-specific native components for best performance",
//             },
//             {
//               icon: <LayersIcon size={32} />,
//               title: "Platform Specific",
//               description: "Write platform-specific code when needed",
//             },
//             {
//               icon: <GithubIcon size={32} />,
//               title: "Open Source",
//               description:
//                 "Active community and extensive third-party packages",
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{
//                 y: 20,
//                 opacity: 0,
//               }}
//               animate={{
//                 y: 0,
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.2 * index,
//               }}
//               className="bg-gray-50 p-6 rounded-lg"
//             >
//               <div className="text-blue-600 mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-black">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{
//               x: -50,
//               opacity: 0,
//             }}
//             animate={{
//               x: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">
//               Develop with Ease
//             </h2>
//             <p className="text-lg text-gray-600">
//               React Native combines the best parts of native development with
//               React, a best-in-class JavaScript library for building user
//               interfaces.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6  pt-6">
//               <button
//                 onClick={() => navigate("/enquiry")}
//                 className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//               >
//                 Get Started
//                 {/* <HeroBtn name=" Get Started" /> */}
//               </button>
//               <button
//                 onClick={() => navigate("/services")}
//                 className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
//               >
//                 Our Services
//               </button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{
//               x: 50,
//               opacity: 0,
//             }}
//             animate={{
//               x: 0,
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="relative"
//           >
//             <img
//               src={react}
//               alt="React Native Development"
//               className="rounded-lg shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { GithubIcon, CodeIcon, SmartphoneIcon, LayersIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom";
import react from "../../../public/React-Native.png";

export default function ReactNativePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-blue-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="React Native Logo"
              className="h-24 mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Build Native Apps with React
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Create native apps for Android and iOS using React. A framework for
            building native apps using React.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <CodeIcon size={32} />,
              title: "Learn Once, Write Anywhere",
              description:
                "Build mobile apps with React's declarative UI paradigm",
            },
            {
              icon: <SmartphoneIcon size={32} />,
              title: "Native Components",
              description:
                "Use platform-specific native components for best performance",
            },
            {
              icon: <LayersIcon size={32} />,
              title: "Platform Specific",
              description: "Write platform-specific code when needed",
            },
            {
              icon: <GithubIcon size={32} />,
              title: "Open Source",
              description:
                "Active community and extensive third-party packages",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
              }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Develop with Ease
            </h2>
            <p className="text-lg text-gray-600">
              React Native combines the best parts of native development with
              React, a best-in-class JavaScript library for building user
              interfaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 pt-6">
              <motion.button
                onClick={() => navigate("/enquiry")}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                onClick={() => navigate("/services")}
                whileHover={{ scale: 1.1 }}
                className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.img
              src={react}
              alt="React Native Development"
              className="rounded-lg shadow-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
