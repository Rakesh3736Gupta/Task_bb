import React from "react";

const Btn = () => {
  return (
    <div className="relative group">
      <Btn className="relative w-[10em] h-[3.5em] border-4 border-ridge-149Cea outline-none bg-transparent text-white font-bold text-lg rounded-lg cursor-pointer transition duration-1000 hover:shadow-[inset_0px_0px_25px_#1479EA]">
        Hover me
      </Btn>

      {/* Pseudo-elements using Tailwind for hover effect */}
      <div className="absolute top-[-10px] left-[3%] w-[95%] h-[40%] bg-[#212121] transition-all duration-500 group-hover:scale-0 transform origin-center" />
      <div className="absolute top-[80%] left-[3%] w-[95%] h-[40%] bg-[#212121] transition-all duration-500 group-hover:scale-0 transform origin-center" />
    </div>
  );
};

export default Btn;
