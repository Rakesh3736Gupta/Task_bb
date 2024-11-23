// import React from "react";
// import "tailwindcss/tailwind.css"; // Ensure TailwindCSS is set up

// import MagicCard from "./MagicCard";

// const ClientPage = () => {
//   return (
//     <div className="text-center py-12 bg-blue-100">
//       <h1 className="text-4xl font-bold text-black">Our Clients</h1>
//       <p className="text-gray-700 mt-2">
//         Our clients are very happy after we provide service through Pairtech
//         teams for customer requirements.
//       </p>
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 mx-20">
//         {[...Array(8)].map((_, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center h-32 bg-white p-8 border border-gray-200 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg"
//           >
//             <img
//               src={`/client-${index + 1}.png`}
//               alt={`Client ${index + 1}`}
//               className="max-h-full"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientPage;

import React from "react";
import "tailwindcss/tailwind.css"; // Ensure TailwindCSS is set up

import MagicCard from "./MagicCard";

const ClientPage = () => {
  return (
    <div className="text-center py-12 bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-500">Our Clients</h1>
      <p className="text-gray-700 mt-6 font-semibold">
        Our clients are very happy after we provide service through Pairtech
        teams for customer requirements.
      </p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 px-4 sm:px-6 md:px-12 lg:px-20">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <MagicCard imageSrc={`/client-${index + 1}.png`} />
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default ClientPage;
