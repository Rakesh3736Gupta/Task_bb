// import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";

// const codeLines = [
//   {
//     text: "import { useEffect, useState } from 'react';",
//     color: "text-blue-400",
//   },
//   {
//     text: "  const [data, setData] = useState(null);",
//     color: "text-green-400",
//   },
//   { text: "", color: "" },
//   { text: "  useEffect(() => {", color: "text-blue-400" },
//   {
//     text: "    fetch('https://api.example.com')",
//     color: "text-purple-400",
//   },
//   {
//     text: "      .then(response => response.json())",
//     color: "text-purple-400",
//   },
//   { text: "      .then(json => setData(json))", color: "text-purple-400" },
//   {
//     text: "      .catch(error => console.error('Error:', error));",
//     color: "text-purple-400",
//   },
//   { text: "  }, []);", color: "text-blue-400" },
//   { text: "      <h1>API Data</h1>", color: "text-red-400" },
//   { text: "      {data ? (", color: "text-yellow-400" },
//   { text: "          {data.map(item => (", color: "text-yellow-400" },
//   {
//     text: "            <li key={item.id}>{item.name}</li>  ))}",
//     color: "text-yellow-400",
//   },
// ];

// export default function PairTechComponent() {
//   const [currentLine, setCurrentLine] = useState(0);
//   const [displayedLines, setDisplayedLines] = useState([]);
//   const [currentText, setCurrentText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   // Typing animation logic
//   useEffect(() => {
//     if (currentLine < codeLines.length && isTyping) {
//       const line = codeLines[currentLine].text;
//       if (currentText.length < line.length) {
//         const timeout = setTimeout(() => {
//           setCurrentText(line.substring(0, currentText.length + 1));
//         }, 50); // Typing speed
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setDisplayedLines((prev) => [...prev, { ...codeLines[currentLine] }]);
//           setCurrentText(""); // Reset the currentText to display the next line
//           setCurrentLine((prev) => prev + 1); // Move to the next line
//         }, 500); // Delay before moving to the next line
//         return () => clearTimeout(timeout);
//       }
//     } else if (currentLine >= codeLines.length && isTyping) {
//       const timeout = setTimeout(() => {
//         setCurrentLine(0); // Restart the animation
//         setDisplayedLines([]); // Clear displayed lines
//         setCurrentText(""); // Reset the currentText
//       }, 2000); // Delay before restarting the animation
//       return () => clearTimeout(timeout);
//     }
//   }, [currentLine, currentText, isTyping]);

//   return (
//     <div className="min-h-screen bg-blue-100  ">
//       <div className="container mx-auto px-4 ">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Left Column */}
//           <div className="space-y-6 text-center lg:text-left order-2">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
//               Empower Your Business with{" "}
//               <span className="text-cyan-400">PairTech Solutions</span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-xl mt-4">
//               At PairTech, we deliver cutting-edge software solutions tailored
//               to meet your business needs. Whether it's web development, custom
//               software, or enterprise-level applications, we’ve got you covered
//               with innovative, efficient, and reliable solutions.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
//               <button className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-300 transition-colors">
//                 Our Services
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//               <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
//                 Get in Touch
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Code Editor */}
//           <div className="relative rounded-lg border bg-black p-6 font-mono text-lg text-gray-300 shadow-2xl">
//             <div className="absolute right-4 top-4 flex space-x-2">
//               <div className="h-3 w-3 rounded-full bg-red-500" />
//               <div className="h-3 w-3 rounded-full bg-yellow-500" />
//               <div className="h-3 w-3 rounded-full bg-green-500" />
//             </div>
//             <div className="mt-6 flex">
//               <div className="mr-6 flex-none text-right text-[#facc14]">
//                 {/* Display line numbers based on the actual displayed lines */}
//                 {displayedLines.map((_, i) => (
//                   <div key={i} className="leading-6">
//                     {i + 1}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex-1">
//                 {displayedLines.map((line, i) => (
//                   <div key={i} className="leading-6">
//                     <span className={line.color}>{line.text}</span>
//                   </div>
//                 ))}
//                 {currentText && (
//                   <div className="leading-6">
//                     <span className={codeLines[currentLine]?.color}>
//                       {currentText}
//                     </span>
//                     <span className="animate-pulse text-white">|</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const codeLines = [
  {
    text: "import { useEffect, useState } from 'react';",
    color: "text-blue-400",
  },
  {
    text: "  const [data, setData] = useState(null);",
    color: "text-green-400",
  },
  { text: "", color: "" },
  { text: "  useEffect(() => {", color: "text-blue-400" },
  {
    text: "    fetch('https://api.example.com')",
    color: "text-purple-400",
  },
  {
    text: "      .then(response => response.json())",
    color: "text-purple-400",
  },
  { text: "      .then(json => setData(json))", color: "text-purple-400" },
  {
    text: "      .catch(error => console.error('Error:', error));",
    color: "text-purple-400",
  },
  { text: "  }, []);", color: "text-blue-400" },
  { text: "      <h1>API Data</h1>", color: "text-red-400" },
  { text: "      {data ? (", color: "text-yellow-400" },
  { text: "          {data.map(item => (", color: "text-yellow-400" },
  {
    text: "            <li key={item.id}>{item.name}</li>  ))}",
    color: "text-yellow-400",
  },
];

export default function PairTechComponent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine < codeLines.length && isTyping) {
      const line = codeLines[currentLine].text;
      if (currentText.length < line.length) {
        const timeout = setTimeout(() => {
          setCurrentText(line.substring(0, currentText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, { ...codeLines[currentLine] }]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }, 500); // Delay before moving to the next line
        return () => clearTimeout(timeout);
      }
    } else if (currentLine >= codeLines.length && isTyping) {
      const timeout = setTimeout(() => {
        setCurrentLine(0);
        setDisplayedLines([]);
        setCurrentText("");
      }, 2000); // Delay before restarting the animation
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentText, isTyping]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 overflow-x-hidden p-4 md:p-8 lg:p-12">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Empower Your Business with{" "}
              <span className="text-cyan-400">PairTech Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mt-4">
              At PairTech, we deliver cutting-edge software solutions tailored
              to meet your business needs. Whether it's web development, custom
              software, or enterprise-level applications, we’ve got you covered
              with innovative, efficient, and reliable solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              <button
                onClick={() => navigate("/services")}
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-300 transition-colors"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/enquiry")}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <div className="relative rounded-lg border bg-black p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base text-gray-300 shadow-2xl order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <div className="absolute right-4 top-4 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="mt-6 flex">
              <div className="mr-4 flex-none text-right text-[#facc14]">
                {displayedLines.map((_, i) => (
                  <div key={i} className="leading-6">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {displayedLines.map((line, i) => (
                  <div key={i} className="leading-6">
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
                {currentText && (
                  <div className="leading-6">
                    <span className={codeLines[currentLine]?.color}>
                      {currentText}
                    </span>
                    <span className="animate-pulse text-white">|</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
