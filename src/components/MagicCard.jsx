// import React from "react";

// const MagicCard = ({ imageSrc }) => {
//   return (
//     <div className="relative z-10 w-[280px] h-[200px] p-[2px] bg-gradient-to-l from-[#dec58c] to-[#e57579] rounded-xl overflow-visible transition-transform transform hover:scale-105 hover:shadow-2xl">
//       <div className="flex items-center justify-center w-full h-full bg-[#ffff] text-[#181818] rounded-lg transition-colors duration-1000 hover:text-[#f7ba2b]">
//         <img
//           src={imageSrc}
//           alt="Client"
//           className="object-contain w-full h-full rounded-lg"
//         />
//       </div>
//       <div className="absolute top-[30px] left-0 right-0 z-[-1] w-full h-full  transform scale-80 blur-[25px] opacity-100 transition-opacity duration-500 hover:opacity-0" />
//     </div>
//   );
// };

// export default MagicCard;

import React from "react";

const MagicCard = ({ imageSrc }) => {
  return (
    <div className="relative z-10 w-[280px] h-[200px] p-[2px] bg-gradient-to-l from-[#dec58c] to-[#e57579] rounded-xl overflow-visible transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center w-full h-full bg-[#ffff] text-[#181818] rounded-lg transition-colors duration-1000 hover:text-[#f7ba2b]">
        <img
          src={imageSrc}
          alt="Client"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute top-[30px] left-0 right-0 z-[-1] w-full h-full transform scale-80 blur-[25px] opacity-100 transition-opacity duration-500 hover:opacity-0" />
    </div>
  );
};

export default MagicCard;
