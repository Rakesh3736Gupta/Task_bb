// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSec1 = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-blue-100 text-white lg:mt-0 px-4">
//       <div className="text-center lg:text-left lg:w-1/2 space-y-4 lg:mb-0 lg:gap-48">
//         <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-black lg:pl-40">
//           We provide
//           <br />
//           <span className="text-blue-500 underline">solutions</span>
//           <br />
//           for your business!
//         </h1>
//         <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
//           <button
//             onClick={() => navigate("/enquiry")}
//             className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//           >
//             Get Started
//             {/* <HeroBtn name=" Get Started" /> */}
//           </button>
//           <button
//             onClick={() => navigate("/services")}
//             className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
//           >
//             Our Services
//           </button>
//         </div>
//       </div>
//       <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 pt-10">
//         <img
//           src="./Coding workshop-amico.svg" // Replace with actual SVG path
//           alt="Illustration of people working on business solutions"
//           className="w-full max-w-xs md:max-w-sm lg:max-w-md transition-transform duration-300 hover:scale-105" // Added hover effect here
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSec1;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSec1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-blue-100 text-white lg:mt-0 px-4">
      <div className="text-center lg:text-left lg:w-1/2 space-y-4 lg:mb-0 lg:gap-48">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-black lg:pl-40"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We provide
          <br />
          <span className="text-blue-500 underline">solutions</span>
          <br />
          for your business!
        </motion.h1>

        {/* Animated Button Section */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
          <motion.button
            onClick={() => navigate("/enquiry")}
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.button>

          <motion.button
            onClick={() => navigate("/services")}
            className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Our Services
          </motion.button>
        </div>
      </div>

      {/* Animated Image Section */}
      <motion.div
        className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 pt-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="./Coding workshop-amico.svg" // Replace with actual SVG path
          alt="Illustration of people working on business solutions"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md transition-transform duration-300 hover:scale-105" // Added hover effect here
        />
      </motion.div>
    </div>
  );
};

export default HeroSec1;
