// import {
//   ArrowRightIcon,
//   BarChartIcon,
//   TrendingUpIcon,
//   UsersIcon,
//   MessageSquareIcon,
// } from "lucide-react";

// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../shared/Footer";
// export default function DigitalMarketing() {
//   return (
//     <div className="w-full overflow-hidden">
//       <main>
//         <section className="container mx-auto px-4 py-20">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="flex flex-col md:flex-row items-center gap-12"
//           >
//             <div className="flex-1">
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
//                 Transform Your Digital Presence
//               </h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Boost your business with our comprehensive digital marketing
//                 solutions. We help you reach your target audience and achieve
//                 measurable results.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
//                 <button
//                   onClick={() => navigate("/enquiry")}
//                   className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//                 >
//                   Get Started
//                   {/* <HeroBtn name=" Get Started" /> */}
//                 </button>
//                 <button
//                   onClick={() => navigate("/services")}
//                   className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300  overflow-x-hidden overflow-y-hidden"
//                 >
//                   Our Services
//                 </button>
//               </div>
//             </div>
//             <motion.div
//               initial={{
//                 scale: 0.8,
//               }}
//               animate={{
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               className="flex-1"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
//                 alt="Digital Marketing"
//                 className="rounded-lg shadow-2xl"
//               />
//             </motion.div>
//           </motion.div>
//         </section>

//         <section className="bg-blue-100 py-20">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-16 text-black">
//               Our Services
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               <motion.div
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <BarChartIcon size={40} className="text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   SEO Optimization
//                 </h3>
//                 <p className="text-gray-600">
//                   Improve your search engine rankings and drive organic traffic.
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <TrendingUpIcon size={40} className="text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   Social Media
//                 </h3>
//                 <p className="text-gray-600">
//                   Engage with your audience across all social platforms.
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <UsersIcon size={40} className="text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   Content Marketing
//                 </h3>
//                 <p className="text-gray-600">
//                   Create valuable content that resonates with your audience.
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <MessageSquareIcon size={40} className="text-blue-600 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   Email Marketing
//                 </h3>
//                 <p className="text-gray-600">
//                   Build relationships through targeted email campaigns.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <section className="container mx-auto px-4 py-20 bg-blue-100">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4 text-black ">
//               Our Success Stories
//             </h2>
//             <p className="text-gray-600">
//               See how we've helped businesses grow their digital presence
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//               }}
//               className="overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
//                 alt="Case Study 1"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   E-commerce Growth
//                 </h3>
//                 <p className="text-gray-600">
//                   200% increase in online sales through targeted campaigns
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//               }}
//               className="overflow-hidden rounded-lg shadow-lg bg-white"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
//                 alt="Case Study 2"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   Brand Awareness
//                 </h3>
//                 <p className="text-gray-600">
//                   5x social media engagement within 6 months
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//               }}
//               className="overflow-hidden rounded-lg shadow-lg bg-white"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
//                 alt="Case Study 3"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-black">
//                   Lead Generation
//                 </h3>
//                 <p className="text-gray-600">
//                   150% increase in qualified leads through SEO
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import {
  ArrowRightIcon,
  BarChartIcon,
  TrendingUpIcon,
  UsersIcon,
  MessageSquareIcon,
} from "lucide-react";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";

export default function DigitalMarketing() {
  return (
    <div className="w-full overflow-hidden">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                Transform Your Digital Presence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Boost your business with our comprehensive digital marketing
                solutions. We help you reach your target audience and achieve
                measurable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
                <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  Get Started
                </button>
                <button className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
                  Our Services
                </button>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                alt="Digital Marketing"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-black">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <BarChartIcon size={40} className="text-blue-600 mb-4" />
                  ),
                  title: "SEO Optimization",
                  description:
                    "Improve your search engine rankings and drive organic traffic.",
                },
                {
                  icon: (
                    <TrendingUpIcon size={40} className="text-blue-600 mb-4" />
                  ),
                  title: "Social Media",
                  description:
                    "Engage with your audience across all social platforms.",
                },
                {
                  icon: <UsersIcon size={40} className="text-blue-600 mb-4" />,
                  title: "Content Marketing",
                  description:
                    "Create valuable content that resonates with your audience.",
                },
                {
                  icon: (
                    <MessageSquareIcon
                      size={40}
                      className="text-blue-600 mb-4"
                    />
                  ),
                  title: "Email Marketing",
                  description:
                    "Build relationships through targeted email campaigns.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-transform duration-300"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="container mx-auto px-4 py-20 bg-blue-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black ">
              Our Success Stories
            </h2>
            <p className="text-gray-600">
              See how we've helped businesses grow their digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
                title: "E-commerce Growth",
                description:
                  "200% increase in online sales through targeted campaigns.",
              },
              {
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
                title: "Brand Awareness",
                description: "5x social media engagement within 6 months.",
              },
              {
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3",
                title: "Lead Generation",
                description: "150% increase in qualified leads through SEO.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">{story.description}</p>
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
