// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const technologies = [
//   { name: "MEAN Stack", color: "bg-yellow-300", icon: "fas fa-layer-group" },
//   { name: "Node.js", color: "bg-green-400", icon: "fab fa-node" },
//   { name: "React Native", color: "bg-blue-300", icon: "fab fa-react" },
//   { name: "Python", color: "bg-green-200", icon: "fab fa-python" },
//   { name: "Java", color: "bg-red-300", icon: "fab fa-java" },
//   { name: "Android", color: "bg-green-300", icon: "fab fa-android" },
//   { name: "ReactJs", color: "bg-blue-300", icon: "fab fa-react" },

//   { name: ".NET", color: "bg-purple-300", icon: "fas fa-code" },
//   { name: "PHP", color: "bg-indigo-300", icon: "fab fa-php" },
//   { name: "Salesforce", color: "bg-blue-500", icon: "fas fa-cloud" },
//   { name: "AngularJS", color: "bg-red-200", icon: "fab fa-angular" },

//   { name: "Django", color: "bg-green-200", icon: "fas fa-leaf" },
//   { name: "Flutter", color: "bg-cyan-200", icon: "fas fa-mobile-alt" },
//   { name: "Xcode", color: "bg-indigo-200", icon: "fas fa-code" },
//   { name: "Firebase", color: "bg-yellow-200", icon: "fas fa-fire" },
//   { name: "Docker", color: "bg-blue-400", icon: "fab fa-docker" },
//   { name: "Vue.js", color: "bg-green-300", icon: "fab fa-vuejs" },
//   { name: "Laravel", color: "bg-red-300", icon: "fab fa-laravel" },
//   { name: "Kubernetes", color: "bg-blue-300", icon: "fas fa-server" },
// ];

// function TechnologyExpertise() {
//   return (
//     <div className="container mx-auto text-center py-12 bg-blue-100 text-black">
//       <h1 className="text-3xl font-bold mb-4">Our Technology Expertise</h1>
//       <div>
//         <p className="text-black mb-8 w-1/2 font-semibold container mx-auto text-center">
//           Discover the power behind our custom software development services
//           with a cutting-edge technology. From cloud-native to cross-platform
//           solutions, we ensure seamless experiences and scalable solutions.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mx-8 mx-4">
//         {technologies.map((tech, index) => (
//           <div
//             key={index}
//             className={`${tech.color} p-8 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
//           >
//             <i className={`${tech.icon} text-4xl text-gray-700 mb-4`}></i>
//             <p className="text-gray-700 font-semibold text-center text-lg">
//               {tech.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TechnologyExpertise;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./shared/Footer";

const technologies = [
  { name: "MEAN Stack", color: "bg-yellow-300", icon: "fas fa-layer-group" },
  { name: "Node.js", color: "bg-green-400", icon: "fab fa-node" },
  { name: "React Native", color: "bg-blue-300", icon: "fab fa-react" },
  { name: "Python", color: "bg-green-200", icon: "fab fa-python" },
  { name: "Java", color: "bg-red-300", icon: "fab fa-java" },
  { name: "Android", color: "bg-green-300", icon: "fab fa-android" },
  { name: "ReactJs", color: "bg-blue-300", icon: "fab fa-react" },
  { name: ".NET", color: "bg-purple-300", icon: "fas fa-code" },
  { name: "PHP", color: "bg-indigo-300", icon: "fab fa-php" },
  { name: "Salesforce", color: "bg-blue-500", icon: "fas fa-cloud" },
  { name: "AngularJS", color: "bg-red-200", icon: "fab fa-angular" },
  { name: "Django", color: "bg-green-200", icon: "fas fa-leaf" },
  { name: "Flutter", color: "bg-cyan-200", icon: "fas fa-mobile-alt" },
  { name: "Xcode", color: "bg-indigo-200", icon: "fas fa-code" },
  { name: "Firebase", color: "bg-yellow-200", icon: "fas fa-fire" },
  { name: "Docker", color: "bg-blue-400", icon: "fab fa-docker" },
  { name: "Vue.js", color: "bg-green-300", icon: "fab fa-vuejs" },
  { name: "Laravel", color: "bg-red-300", icon: "fab fa-laravel" },
  { name: "Kubernetes", color: "bg-blue-300", icon: "fas fa-server" },
];

function TechnologyExpertise() {
  return (
    <div className="container mx-auto text-center py-12 bg-blue-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Our Technology Expertise</h1>
      <div>
        <p className="text-black mb-8 w-1/2 font-semibold container mx-auto text-center">
          Discover the power behind our custom software development services
          with a cutting-edge technology. From cloud-native to cross-platform
          solutions, we ensure seamless experiences and scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mx-8 mx-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`${tech.color} p-8 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
          >
            <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-moving-border"></span>
            <i className={`${tech.icon} text-4xl text-gray-700 mb-4`}></i>
            <p className="text-gray-700 font-semibold text-center text-lg">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      {/* Moving Border Animation */}
      <style>
        {`
          @keyframes moving-border {
            0% { border-color: #ff3d00; }
            25% { border-color: #ff8a00; }
            50% { border-color: #ffd600; }
            75% { border-color: #00e676; }
            100% { border-color: #ff3d00; }
          }
          .animate-moving-border {
            animation: moving-border 5s linear infinite;
          }
        `}
      </style>
      <Footer />
    </div>
  );
}

export default TechnologyExpertise;
