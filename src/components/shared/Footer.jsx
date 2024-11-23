// import React from "react";
// import MediaButton from "../MediaIcon";

// const Footer = () => {
//   return (
//     <div className="container mx-auto py-10 px-4 bg-blue-100 text-black">
//       <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
//         {/* Company Info */}
//         <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-4 sm:w-1/4 ">
//           <img
//             src="./logo.jpg"
//             alt="Pairtech logo"
//             className="mb-4 w-16 md:w-20 lg:w-32 lg:pl-10  " // Adjust size for different screen sizes
//           />
//           <p className="text-xl font-semibold mb-2 lg:pl-10">Pairtech</p>
//           <p className="text-base leading-relaxed lg:pl-10">
//             Pairtech company works in sectors such as human resources, Fintech
//             Development, latest technologies, and outsourcing software developer
//             staff services.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="w-full md:w-1/5 mb-6 md:mb-0 pr-4">
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-lg">
//             <li className="hover:text-blue-500 transition duration-300">
//               Home
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               About us
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Career
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Services
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Terms of service
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Privacy policy
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Contact Us
//             </li>
//           </ul>
//         </div>

//         {/* Our Services */}
//         <div className="w-full md:w-1/5 mb-6 md:mb-0 pr-4">
//           <h3 className="text-xl font-semibold mb-4">Our Services</h3>
//           <ul className="space-y-2 text-lg">
//             <li className="hover:text-blue-500 transition duration-300">
//               Website Creation
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Software Development
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Application Development
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Google Services
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">SEO</li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Social Media Promotion
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Billing Software for Telecom Sector
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               ERP Software Integration
//             </li>
//             <li className="hover:text-blue-500 transition duration-300">
//               Remote Software Developer Staff (Java, Python, Node.js, .NET)
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="w-full md:w-1/4 pr-4">
//           <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-lg">
//             <li className="flex items-center">
//               <i className=" text-gray-500 bg-[url('/email.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//               <span>Email:</span>
//             </li>
//             <li className="ml-6">info@pairtech.in</li>
//             <li className="flex items-center mt-2">
//               <i className=" text-gray-500 bg-[url('/phone.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//               <span>Phone:</span>
//             </li>
//             <li className="ml-6">+91 93361 40141</li>
//             <li className="flex items-center mt-2">
//               <i className=" text-gray-500 bg-[url('/location.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//               <span>Address:</span>
//             </li>
//             <li className="ml-6">
//               Bahlolpur Sector 65, Noida 201307, Uttar Pradesh (India)
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons */}

//       <div className="flex justify-center mt-10 space-x-4 text-xl">
//         {/* <i className="fab fa-facebook-f hover:text-blue-500 transition duration-300"></i>
//         <i className="fab fa-instagram hover:text-blue-500 transition duration-300"></i>
//         <i className="fab fa-linkedin-in hover:text-blue-500 transition duration-300"></i>
//         <i className="fab fa-youtube hover:text-blue-500 transition duration-300"></i> */}
//         <MediaButton />
//       </div>

//       {/* Footer Text */}
//       <div className="text-center mt-4 text-sm">
//         © Copyright Pairtech. All Rights Reserved. Designed by Pairtech.in
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import MediaButton from "../MediaIcon";
import logo from "../../../public/logo.jpg";
const Footer = () => {
  return (
    <div className="container mx-auto py-10 px-4 bg-blue-100 text-black">
      <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
        {/* Company Info */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-4 sm:w-full">
          <img
            src={logo}
            alt="Pairtech logo"
            className="mb-4 w-16 md:w-20 lg:w-32 lg:pl-10 rounded-full"
          />
          <p className="text-xl font-semibold mb-2 lg:pl-10">Pairtech</p>
          <p className="text-base leading-relaxed lg:pl-10">
            Pairtech company works in sectors such as human resources, Fintech
            Development, latest technologies, and outsourcing software developer
            staff services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 pr-4 sm:w-full">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-blue-500 transition duration-300">
              Home
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              About us
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Career
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Services
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Terms of service
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Privacy policy
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 pr-4 sm:w-full">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-blue-500 transition duration-300">
              Website Creation
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Software Development
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Application Development
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Google Services
            </li>
            <li className="hover:text-blue-500 transition duration-300">SEO</li>
            <li className="hover:text-blue-500 transition duration-300">
              Social Media Promotion
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Billing Software for Telecom Sector
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              ERP Software Integration
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Remote Software Developer Staff (Java, Python, Node.js, .NET)
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 pr-4 sm:w-full">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center">
              <i className="text-gray-500 bg-[url('/email.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
              <span>Email:</span>
            </li>
            <li className="ml-6">info@pairtech.in</li>
            <li className="flex items-center mt-2">
              <i className="text-gray-500 bg-[url('/phone.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
              <span>Phone:</span>
            </li>
            <li className="ml-6">+91 93361 40141</li>
            <li className="flex items-center mt-2">
              <i className="text-gray-500 bg-[url('/location.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
              <span>Address:</span>
            </li>
            <li className="ml-6">
              Bahlolpur Sector 65, Noida 201307, Uttar Pradesh (India)
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-10 space-x-4 text-xl">
        <MediaButton />
      </div>

      {/* Footer Text */}
      <div className="text-center mt-4 text-sm">
        © Copyright Pairtech. All Rights Reserved. Designed by Pairtech.in
      </div>
    </div>
  );
};

export default Footer;
