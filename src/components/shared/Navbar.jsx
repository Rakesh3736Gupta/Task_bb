// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [dropdownStates, setDropdownStates] = useState({
//     services: false,
//     solutions: false,
//     technologies: false,
//     erpSolutions: false,
//   });

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navigate = useNavigate();

//   const toggleDropdown = (menu) => {
//     setDropdownStates((prevStates) => ({
//       ...prevStates,
//       [menu]: !prevStates[menu],
//     }));
//   };

//   return (
//     <header className="bg-blue-100 shadow-md w-full fixed top-0 left-0 z-50">
//       <div className="flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             alt="PairTech logo"
//             className="mr-4 rounded-full cursor-pointer"
//             height="50"
//             src="logo.jpg"
//             width="50"
//             onClick={() => navigate("/")}
//           />
//           <span
//             onClick={() => navigate("/")}
//             className="font-bold text-xl text-black cursor-pointer"
//           >
//             PairTech
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6 text-lg">
//           <Link className="text-blue-600 hover:underline" to="/">
//             Home
//           </Link>
//           <div className="relative group">
//             <Link className="text-blue-600 hover:underline" to="/services">
//               Services
//             </Link>
//             <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
//               <Link
//                 to="/services/website-creation"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Website Creation
//               </Link>
//               <Link
//                 to="/services/software-development"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Software Development
//               </Link>
//               <Link
//                 to="/services/application-development"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Application Development
//               </Link>
//               <Link
//                 to="/services/google-services"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Google Services
//               </Link>
//               <Link
//                 to="/services/seo"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 SEO
//               </Link>
//               <Link
//                 to="/services/social-media-promotion"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Social Media Promotion
//               </Link>
//             </div>
//           </div>
//           <div className="relative group">
//             <Link className="text-blue-600 hover:underline" to="/solutions">
//               Solutions
//             </Link>
//             <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
//               <Link
//                 to="/solutions/web-development"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Web Development
//               </Link>
//               <Link
//                 to="/solutions/digital-marketing"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Digital Marketing
//               </Link>
//               <div className="relative group">
//                 <Link
//                   className="block px-4 py-2 hover:bg-blue-100 text-black"
//                   onClick={() => toggleDropdown("erpSolutions")}
//                   to="#"
//                 >
//                   ERP Software Solutions
//                 </Link>
//                 {dropdownStates.erpSolutions && (
//                   <div className="absolute top-0 left-full flex flex-col bg-white shadow-md rounded-md w-52 z-10 ml-1">
//                     <Link
//                       to="/solutions/erp/billing-cdr"
//                       className="block px-4 py-2 hover:bg-blue-100 text-black"
//                     >
//                       Billing CDR
//                     </Link>
//                     <Link
//                       to="/solutions/erp/billing-restaurants"
//                       className="block px-4 py-2 hover:bg-blue-100 text-black"
//                     >
//                       Billing Restaurants
//                     </Link>
//                   </div>
//                 )}
//               </div>
//               <Link
//                 to="/solutions/android-development"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Android Development
//               </Link>
//               <Link
//                 to="/solutions/integration-software"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Integration Software
//               </Link>
//             </div>
//           </div>
//           <div className="relative group">
//             <Link className="text-blue-600 hover:underline" to="/technologies">
//               Technologies
//             </Link>
//             <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 React Native
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Python
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Java
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Android
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 ReactJs
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Meanstack
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 NodeJs
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Dot Net
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 PHP
//               </Link>
//               <Link
//                 to="/technologies"
//                 className="block px-4 py-2 hover:bg-blue-100 text-black"
//               >
//                 Salesforce
//               </Link>
//             </div>
//           </div>

//           <Link className="text-blue-600 hover:underline" to="/about">
//             About Us
//           </Link>
//           <Link
//             className="font-bold text-blue-600 hover:underline"
//             to="/enquiry"
//           >
//             ENQUIRY
//           </Link>
//         </nav>

//         {/* Request A Quote Button (Desktop) */}
//         <div className="hidden md:flex items-center">
//           <button
//             onClick={() => navigate("/rightSidebar")}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full"
//           >
//             Request A Quote
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden ">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-blue-500 focus:outline-none "
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden text-lg">
//           <Link className="block p-4 text-blue-500" to="/">
//             Home
//           </Link>
//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("services")}
//               className="block p-4 text-blue-500 w-full text-left"
//             >
//               Services
//             </button>
//             {dropdownStates.services && (
//               <div className="bg-white shadow-md">
//                 <Link
//                   className="block p-4 text-black"
//                   to="/services/website-creation"
//                 >
//                   Website Creation
//                 </Link>
//                 <Link
//                   className="block p-4 text-black"
//                   to="/services/software-development"
//                 >
//                   Software Development
//                 </Link>
//                 <Link
//                   className="block p-4 text-black"
//                   to="/services/application-development"
//                 >
//                   Application Development
//                 </Link>
//                 <Link
//                   className="block p-4 text-black"
//                   to="/services/google-services"
//                 >
//                   Google Services
//                 </Link>
//                 <Link className="block p-4 text-black" to="/services/seo">
//                   SEO
//                 </Link>
//                 <Link
//                   className="block p-4 text-black"
//                   to="/services/social-media-promotion"
//                 >
//                   Social Media Promotion
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("solutions")}
//               className="block p-4 text-blue-500 w-full text-left"
//             >
//               Solutions
//             </button>
//             {dropdownStates.solutions && (
//               <div className="bg-white shadow-md">
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/solutions/web-development"
//                 >
//                   Web Development
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/solutions/digital-marketing"
//                 >
//                   Digital Marketing
//                 </Link>
//                 <Link className="block p-4 text-gray-700" to="/solutions/erp">
//                   ERP Software Solutions
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/solutions/android-development"
//                 >
//                   Android Development
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/solutions/integration-software"
//                 >
//                   Integration Software
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown("technologies")}
//               className="block p-4 text-blue-500 w-full text-left"
//             >
//               Technologies
//             </button>
//             {dropdownStates.technologies && (
//               <div className="bg-white shadow-md">
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/react-native"
//                 >
//                   React Native
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/python"
//                 >
//                   Python
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/java"
//                 >
//                   Java
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/android"
//                 >
//                   Android
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/reactjs"
//                 >
//                   ReactJs
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/meanstack"
//                 >
//                   Meanstack
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/nodejs"
//                 >
//                   NodeJs
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/dotnet"
//                 >
//                   Dot Net
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/php"
//                 >
//                   PHP
//                 </Link>
//                 <Link
//                   className="block p-4 text-gray-700"
//                   to="/technologies/salesforce"
//                 >
//                   Salesforce
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link className="block p-4 text-blue-500" to="/about">
//             About Us
//           </Link>
//           <Link className="block p-4 font-bold text-blue-500" to="/contact">
//             ENQUIRY
//           </Link>
//           <button
//             onClick={() => navigate("/rightSidebar")}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full w-full"
//           >
//             Request A Quote
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    services: false,
    solutions: false,
    technologies: false,
    erpSolutions: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [menu]: !prevStates[menu],
    }));
  };

  // Helper function to handle link clicks
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-blue-100 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            alt="PairTech logo"
            className="mr-4 rounded-full cursor-pointer"
            height="50"
            src={logo}
            width="50"
            onClick={() => {
              navigate("/");
              handleLinkClick();
            }}
          />
          <span
            onClick={() => {
              navigate("/");
              handleLinkClick();
            }}
            className="font-bold text-xl text-black cursor-pointer"
          >
            PairTech
          </span>
        </div>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <Link className="text-blue-600 hover:underline" to="/">
            Home
          </Link>
          <div className="relative group">
            <Link className="text-blue-600 hover:underline" to="/services">
              Services
            </Link>
            <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
              <Link
                to="/services/website-creation"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Website Creation
              </Link>
              <Link
                to="/service/softwareDeve"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Software Development
              </Link>
              <Link
                to="/service/Applications"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Application Development
              </Link>
              <Link
                to="/service/google-services"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Google Services
              </Link>
              <Link
                to="/service/seo-services"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                SEO
              </Link>
              <Link
                to="/service/social-media"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Social Media Promotion
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link className="text-blue-600 hover:underline" to="/solutions">
              Solutions
            </Link>
            <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
              <Link
                to="/solutions/webdevelopment"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Web Development
              </Link>
              <Link
                to="/solutions/digital-marketing"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Digital Marketing
              </Link>
              <div className="relative group">
                <Link
                  className="block px-4 py-2 hover:bg-blue-100 text-black"
                  onClick={() => toggleDropdown("erpSolutions")}
                  to="#"
                >
                  ERP Software Solutions
                </Link>
                {dropdownStates.erpSolutions && (
                  <div className="absolute top-0 left-full flex flex-col bg-white shadow-md rounded-md w-52 z-10 ml-1">
                    <Link
                      to="/solutions"
                      className="block px-4 py-2 hover:bg-blue-100 text-black"
                    >
                      Billing CDR
                    </Link>
                    <Link
                      to="/solutions"
                      className="block px-4 py-2 hover:bg-blue-100 text-black"
                    >
                      Billing Restaurants
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/solutions/android-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Android Development
              </Link>
              <Link
                to="/solutions/Software-Integration"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Integration Software
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link className="text-blue-600 hover:underline" to="/technologies">
              Technologies
            </Link>
            <div className="dropdown-menu absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md mt-0 rounded-md w-52 z-10">
              <Link
                to="/technologies/react-native"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                React Native
              </Link>
              <Link
                to="/technologies/python-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Python
              </Link>
              <Link
                to="/technologies/java-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Java
              </Link>
              <Link
                to="/technologies/android-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Android
              </Link>
              <Link
                to="/technologies/react-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                ReactJs
              </Link>
              <Link
                to="/technologies/mernstack-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Meanstack
              </Link>
              <Link
                to="/technologies/nodejs-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                NodeJs
              </Link>
              <Link
                to="/technologies/dotnet"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Dot Net
              </Link>
              <Link
                to="/technologies/php-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                PHP
              </Link>
              <Link
                to="/technologies/sales-development"
                className="block px-4 py-2 hover:bg-blue-100 text-black"
              >
                Salesforce
              </Link>
            </div>
          </div>

          <Link className="text-blue-600 hover:underline" to="/about">
            About Us
          </Link>
          <Link
            className="font-bold text-blue-600 hover:underline"
            to="/enquiry"
          >
            ENQUIRY
          </Link>
        </nav>

        {/* Request A Quote Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => navigate("/rightSidebar")}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Request A Quote
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-blue-500 focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-lg h-[100vh]">
          <Link
            className="block p-4 text-blue-500"
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="block p-4 text-blue-500 w-full text-left focus:outline-none"
            >
              Services
            </button>
            {dropdownStates.services && (
              <div className="bg-white shadow-md">
                <Link
                  className="block p-4 text-black"
                  to="/services/website-creation"
                  onClick={handleLinkClick}
                >
                  Website Creation
                </Link>
                <Link
                  className="block p-4 text-black"
                  to="/service/softwareDeve"
                  onClick={handleLinkClick}
                >
                  Software Development
                </Link>
                <Link
                  className="block p-4 text-black"
                  to="/service/Applications"
                  onClick={handleLinkClick}
                >
                  Application Development
                </Link>
                <Link
                  className="block p-4 text-black"
                  to="/service/google-services"
                  onClick={handleLinkClick}
                >
                  Google Services
                </Link>
                <Link
                  className="block p-4 text-black"
                  to="/service/seo-services"
                  onClick={handleLinkClick}
                >
                  SEO
                </Link>
                <Link
                  className="block p-4 text-black"
                  to="/service/social-media"
                  onClick={handleLinkClick}
                >
                  Social Media Promotion
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("solutions")}
              className="block p-4 text-blue-500 w-full text-left focus:outline-none"
            >
              Solutions
            </button>
            {dropdownStates.solutions && (
              <div className="bg-white shadow-md">
                <Link
                  className="block p-4 text-gray-700"
                  to="/solutions"
                  onClick={handleLinkClick}
                >
                  Web Development
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/solutions/digital-marketing"
                  onClick={handleLinkClick}
                >
                  Digital Marketing
                </Link>
                {/* ERP Solutions Submenu */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("erpSolutions")}
                    className="block p-4 text-gray-700 w-full text-left focus:outline-none"
                  >
                    ERP Software Solutions
                  </button>
                  {dropdownStates.erpSolutions && (
                    <div className="bg-white shadow-md ml-4">
                      <Link
                        className="block p-4 text-black"
                        to="/solutions"
                        onClick={handleLinkClick}
                      >
                        Billing CDR
                      </Link>
                      <Link
                        className="block p-4 text-black"
                        to="/solutions"
                        onClick={handleLinkClick}
                      >
                        Billing Restaurants
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  className="block p-4 text-gray-700"
                  to="/solutions/android-development"
                  onClick={handleLinkClick}
                >
                  Android Development
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/solutions/Software-Integration"
                  onClick={handleLinkClick}
                >
                  Integration Software
                </Link>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("technologies")}
              className="block p-4 text-blue-500 w-full text-left focus:outline-none"
            >
              Technologies
            </button>
            {dropdownStates.technologies && (
              <div className="bg-white shadow-md">
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/react-native"
                  onClick={handleLinkClick}
                >
                  React Native
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/python-development"
                  onClick={handleLinkClick}
                >
                  Python
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/java-development"
                  onClick={handleLinkClick}
                >
                  Java
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/android-development"
                  onClick={handleLinkClick}
                >
                  Android
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/react-development"
                  onClick={handleLinkClick}
                >
                  ReactJs
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/mernstack-development"
                  onClick={handleLinkClick}
                >
                  Meanstack
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/nodejs-development"
                  onClick={handleLinkClick}
                >
                  NodeJs
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/dotnet"
                  onClick={handleLinkClick}
                >
                  Dot Net
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/php-development"
                  onClick={handleLinkClick}
                >
                  PHP
                </Link>
                <Link
                  className="block p-4 text-gray-700"
                  to="/technologies/sales-development"
                  onClick={handleLinkClick}
                >
                  Salesforce
                </Link>
              </div>
            )}
          </div>

          <Link
            className="block p-4 text-blue-500"
            to="/about"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            className="block p-4 font-bold text-blue-500"
            to="/enquiry"
            onClick={handleLinkClick}
          >
            ENQUIRY
          </Link>
          <button
            onClick={() => {
              navigate("/rightSidebar");
              handleLinkClick();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full w-full"
          >
            Request A Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
