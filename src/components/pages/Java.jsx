// import { CodeIcon, LayersIcon, BoxIcon, RefreshCwIcon } from "lucide-react";
// import { render } from "react-dom";
// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../shared/Footer";
// import java from "../../../public/java.jpg";
// export default function JavaDevelopment() {
//   return (
//     <div className="w-full overflow-hidden">
//       <main>
//         <section className="py-20 px-4">
//           <div className="container mx-auto">
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               className="text-center mb-16"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
//                 Java Development Solutions
//               </h1>
//               <p className="text-xl text-gray-800 max-w-3xl mx-auto">
//                 Build robust, scalable applications with Java's powerful
//                 ecosystem
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
//               >
//                 <CodeIcon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                   Enterprise Solutions
//                 </h3>
//                 <p className="text-gray-600">
//                   Develop secure and scalable enterprise applications
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
//               >
//                 <LayersIcon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                   Microservices
//                 </h3>
//                 <p className="text-gray-600">
//                   Build and deploy microservices architecture
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
//               >
//                 <BoxIcon className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 to-gray-800">
//                   Cloud Native
//                 </h3>
//                 <p className="text-gray-600">
//                   Deploy Java applications to any cloud platform
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-blue-100 py-20 px-4 ">
//           <div className="container mx-auto ">
//             <div className="flex flex-col md:flex-row items-center gap-12">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: -50,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                 }}
//                 className="md:w-1/2"
//               >
//                 <img
//                   src={java}
//                   alt="Java Development"
//                   className="rounded-lg shadow-xl w-full"
//                 />
//               </motion.div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: 50,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                 }}
//                 className="md:w-1/2"
//               >
//                 <h2 className="text-3xl font-bold mb-6 text-gray-800 ">
//                   Why Choose Java?
//                 </h2>
//                 <ul className="space-y-4">
//                   <li className="flex items-center">
//                     <RefreshCwIcon className="w-6 h-6 text-blue-600 mr-3 " />
//                     <span className=" text-gray-600">
//                       Platform Independence
//                     </span>
//                   </li>
//                   <li className="flex items-center ">
//                     <RefreshCwIcon className="w-6 h-6 text-blue-600 mr-3" />
//                     <span className=" text-gray-600">Rich Ecosystem</span>
//                   </li>
//                   <li className="flex items-center">
//                     <RefreshCwIcon className="w-6 h-6 text-blue-600 mr-3" />
//                     <span className=" text-gray-600">Enterprise Support</span>
//                   </li>
//                   <li className="flex items-center">
//                     <RefreshCwIcon className="w-6 h-6 text-blue-600 mr-3" />
//                     <span className="text-gray-600">Security Features</span>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { CodeIcon, LayersIcon, BoxIcon, RefreshCwIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";

const FeatureItem = ({ text }) => (
  <li className="flex items-center">
    <RefreshCwIcon className="w-6 h-6 text-blue-600 mr-3" />
    <span className="text-gray-600">{text}</span>
  </li>
);

export default function JavaDevelopment() {
  return (
    <div className="w-full overflow-hidden">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                Java Development Solutions
              </h1>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Build robust, scalable applications with Java's powerful
                ecosystem
              </p>
            </motion.div>

            {/* Cards Section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  overflow-y-hidden overflow-x-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
              >
                <CodeIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-600">
                  Develop secure and scalable enterprise applications
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
              >
                <LayersIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Microservices
                </h3>
                <p className="text-gray-600">
                  Build and deploy microservices architecture
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
              >
                <BoxIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Cloud Native
                </h3>
                <p className="text-gray-600">
                  Deploy Java applications to any cloud platform
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Java Section */}
        <section className="bg-blue-100 py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <img
                  src="/java.jpg" // Updated to use the public folder image
                  alt="Java Development"
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Why Choose Java?
                </h2>
                <ul className="space-y-4">
                  <FeatureItem text="Platform Independence" />
                  <FeatureItem text="Rich Ecosystem" />
                  <FeatureItem text="Enterprise Support" />
                  <FeatureItem text="Security Features" />
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
