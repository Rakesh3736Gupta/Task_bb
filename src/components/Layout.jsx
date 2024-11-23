// MainLayout.js
import React from "react";
import Navbar from "./shared/Navbar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Define paths that require specific margins
  const marginPaths = {
    "/services": "mt-16", // Margin for services page
    "/enquiry": "mt-20",
    "/solutions": "mt-16",
    "/about": "mt-16",
    "/technologies": "mt-12",
    "/service/softwareDeve": "mt-20",
    "/service/Applications": "mt-20",
    "/service/google-services": "mt-8",
    "/service/seo-services": "mt-16",
    "/service/social-media": "mt-16",
    "/solutions/digital-marketing": "mt-16",
    "/solutions/android-development": "mt-16",
    "/solutions/Software-Integration": "mt-8",
    "/technologies/react-native": "mt-16",
    "/technologies/java-development": "mt-8",
    "/technologies/react-development": "mt-16",
    "/technologies/Android-development": "mt-16",
    "/technologies/dotnet": "mt-20",
    "/technologies/mernstack-development": "mt-16",
    "/technologies/sales-development ": "mt-40",
    "/technologies/nodejs-development": "mt-16",

    // Margin for enquiry page
    // Add more paths as needed
  };

  // Determine the margin class based on the current path
  const marginTopClass = marginPaths[location.pathname] || "mt-0"; // Default margin

  return (
    <>
      <Navbar />
      <div className={`bg-blue-100 overflow-x-hidden ${marginTopClass}`}>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
