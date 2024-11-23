import React from "react";

const WorkingDomain = () => {
  return (
    <>
      {/* Header Section with Animation */}
      <div className="flex justify-center text-[#ef4444] font-bold text-2xl md:text-3xl bg-purple-100 hover:underline py-10 animate__animated animate__fadeIn">
        <span className="pt-6 md:pt-10 md:px-auto">INDUSTRIES WE WORK FOR</span>
      </div>

      {/* Main Content Section with Animation */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-blue-100 py-6 md:py-10 animate__animated animate__fadeIn animate__delay-1s">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Text Section with Animation */}
            <div className="md:w-1/3 animate__animated animate__fadeIn animate__delay-2s">
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Helping Businesses in All Domains
                </h1>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  From cutting-edge startups to established <br />
                  corporations, we empower businesses in all domains with
                  custom-tailored digital solutions.
                  <br />
                  We understand the unique challenges and opportunities each
                  industry faces and leverage <br />
                  our comprehensive knowledge to deliver results that matter.
                </p>
              </div>
            </div>

            {/* Right Grid Section with Animated Items */}
            <div className="md:w-2/3 animate__animated animate__fadeIn animate__delay-3s">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    color: "bg-blue-200",
                    icon: "fas fa-code",
                    text: "Web Development",
                  },
                  {
                    color: "bg-green-200",
                    icon: "fas fa-cogs",
                    text: "ERP Software Solutions",
                  },
                  {
                    color: "bg-orange-200",
                    icon: "fas fa-mobile-alt",
                    text: "Android Development",
                  },
                  {
                    color: "bg-teal-200",
                    icon: "fas fa-exchange-alt",
                    text: "Integration Software",
                  },
                  {
                    color: "bg-blue-200",
                    icon: "fas fa-users",
                    text: "Social Networking",
                  },
                  {
                    color: "bg-yellow-200",
                    icon: "fas fa-bullhorn",
                    text: "Digital Marketing",
                  },
                  {
                    color: "bg-green-200",
                    icon: "fas fa-shopping-bag",
                    text: "Ecommerce Development",
                  },
                  {
                    color: "bg-orange-200",
                    icon: "fas fa-video",
                    text: "Video Service",
                  },
                  {
                    color: "bg-lime-200",
                    icon: "fas fa-university",
                    text: "Banking Service",
                  },
                  {
                    color: "bg-pink-200",
                    icon: "fas fa-building",
                    text: "Enterprise Service",
                  },
                  {
                    color: "bg-purple-200",
                    icon: "fas fa-graduation-cap",
                    text: "Education Service",
                  },
                  {
                    color: "bg-teal-200",
                    icon: "fas fa-plane",
                    text: "Tour and Travels",
                  },
                  {
                    color: "bg-cyan-200",
                    icon: "fas fa-heartbeat",
                    text: "Health Service",
                  },
                  {
                    color: "bg-blue-300",
                    icon: "fas fa-ticket-alt",
                    text: "Event & Ticket",
                  },
                  {
                    color: "bg-yellow-300",
                    icon: "fas fa-utensils",
                    text: "Restaurant Service",
                  },
                  {
                    color: "bg-green-300",
                    icon: "fas fa-user-tie",
                    text: "Business Consultant",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      item.color
                    } p-8 sm:p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden animate__animated animate__fadeIn animate__delay-${
                      index + 4
                    }s`}
                  >
                    <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-moving-border"></span>
                    <i
                      className={`${item.icon} text-4xl sm:text-3xl text-gray-700 mb-4`}
                    ></i>
                    <p className="text-gray-700 font-semibold text-center text-lg sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Border Animation */}
      <style>
        {`
          @keyframes moving-border {
            0% {
              border-color: #ff3d00;
            }
            25% {
              border-color: #ff8a00;
            }
            50% {
              border-color: #ffd600;
            }
            75% {
              border-color: #00e676;
            }
            100% {
              border-color: #ff3d00;
            }
          }

          .animate-moving-border {
            animation: moving-border 5s linear infinite;
          }
        `}
      </style>

      {/* Animation library (e.g., animate.css) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </>
  );
};

export default WorkingDomain;

// import React from "react";
// import { motion } from "framer-motion";

// const WorkingDomain = () => {
//   return (
//     <>
//       {/* Header Section with Animation */}
//       <div className="flex justify-center text-[#ef4444] font-bold text-2xl md:text-3xl bg-purple-100 hover:underline py-10">
//         <motion.span
//           className="pt-6 md:pt-10 md:px-auto"
//           initial={{ x: -100, opacity: 0 }} // start from the left
//           animate={{ x: 0, opacity: 1 }} // move to the original position and fade in
//           transition={{ duration: 0.8 }}
//         >
//           INDUSTRIES WE WORK FOR
//         </motion.span>
//       </div>

//       {/* Main Content Section with Animation */}
//       <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-blue-100 py-6 md:py-10">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Left Text Section with Animation */}
//             <motion.div
//               className="md:w-1/3"
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="text-left">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//                   Helping Businesses in All Domains
//                 </h1>
//                 <p className="text-gray-600 mt-4 text-sm sm:text-base">
//                   From cutting-edge startups to established <br />
//                   corporations, we empower businesses in all domains with
//                   custom-tailored digital solutions.
//                   <br />
//                   We understand the unique challenges and opportunities each
//                   industry faces and leverage <br />
//                   our comprehensive knowledge to deliver results that matter.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Right Grid Section with Animated Items */}
//             <div className="md:w-2/3">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//                 {[
//                   {
//                     color: "bg-blue-200",
//                     icon: "fas fa-code",
//                     text: "Web Development",
//                   },
//                   {
//                     color: "bg-green-200",
//                     icon: "fas fa-cogs",
//                     text: "ERP Software Solutions",
//                   },
//                   {
//                     color: "bg-orange-200",
//                     icon: "fas fa-mobile-alt",
//                     text: "Android Development",
//                   },
//                   {
//                     color: "bg-teal-200",
//                     icon: "fas fa-exchange-alt",
//                     text: "Integration Software",
//                   },
//                   {
//                     color: "bg-blue-200",
//                     icon: "fas fa-users",
//                     text: "Social Networking",
//                   },
//                   {
//                     color: "bg-yellow-200",
//                     icon: "fas fa-bullhorn",
//                     text: "Digital Marketing",
//                   },
//                   {
//                     color: "bg-green-200",
//                     icon: "fas fa-shopping-bag",
//                     text: "Ecommerce Development",
//                   },
//                   {
//                     color: "bg-orange-200",
//                     icon: "fas fa-video",
//                     text: "Video Service",
//                   },
//                   {
//                     color: "bg-lime-200",
//                     icon: "fas fa-university",
//                     text: "Banking Service",
//                   },
//                   {
//                     color: "bg-pink-200",
//                     icon: "fas fa-building",
//                     text: "Enterprise Service",
//                   },
//                   {
//                     color: "bg-purple-200",
//                     icon: "fas fa-graduation-cap",
//                     text: "Education Service",
//                   },
//                   {
//                     color: "bg-teal-200",
//                     icon: "fas fa-plane",
//                     text: "Tour and Travels",
//                   },
//                   {
//                     color: "bg-cyan-200",
//                     icon: "fas fa-heartbeat",
//                     text: "Health Service",
//                   },
//                   {
//                     color: "bg-blue-300",
//                     icon: "fas fa-ticket-alt",
//                     text: "Event & Ticket",
//                   },
//                   {
//                     color: "bg-yellow-300",
//                     icon: "fas fa-utensils",
//                     text: "Restaurant Service",
//                   },
//                   {
//                     color: "bg-green-300",
//                     icon: "fas fa-user-tie",
//                     text: "Business Consultant",
//                   },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className={`${item.color} p-8 sm:p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, delay: index * 0.2 }}
//                   >
//                     <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-moving-border"></span>
//                     <i
//                       className={`${item.icon} text-4xl sm:text-3xl text-gray-700 mb-4`}
//                     ></i>
//                     <p className="text-gray-700 font-semibold text-center text-lg sm:text-base">
//                       {item.text}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Moving Border Animation */}
//       <style>
//         {`
//           @keyframes moving-border {
//             0% {
//               border-color: #ff3d00;
//             }
//             25% {
//               border-color: #ff8a00;
//             }
//             50% {
//               border-color: #ffd600;
//             }
//             75% {
//               border-color: #00e676;
//             }
//             100% {
//               border-color: #ff3d00;
//             }
//           }

//           .animate-moving-border {
//             animation: moving-border 5s linear infinite;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default WorkingDomain;
