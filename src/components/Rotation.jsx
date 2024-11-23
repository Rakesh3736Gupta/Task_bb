import React from "react";

const colors = [
  "142, 249, 252",
  "142, 252, 204",
  "142, 252, 157",
  "215, 252, 142",
  "252, 252, 142",
  "252, 208, 142",
  "252, 142, 142",
  "252, 142, 239",
  "204, 142, 252",
  "142, 202, 252",
];

const images = [
  "./team-1.jpg",
  "./team-2.jpg",
  "./team-3.jpg",
  "./team-1.jpg",
  "./rakesh.jpeg",
  "./team-4.jpg",
  "./team-1.jpg",
  "./team-2.jpg",
  "./team-3.jpg",
  "./team-4.jpg",
];

const RotionCard = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center">
      <div
        className="absolute top-[25%] left-1/2 transform -translate-x-1/2"
        style={{
          width: "100px",
          height: "150px",
          transformStyle: "preserve-3d",
          animation: "rotate 20s linear infinite",
          perspective: "1000px",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 border border-solid rounded-lg overflow-hidden"
            style={{
              borderColor: `rgba(${color})`,
              transform: `rotateY(calc((360deg / ${colors.length}) * ${index})) translateZ(calc(100px + 150px))`,
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundColor: `rgba(${color}, 0.2)`,
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: perspective(1000px) rotateX(-15deg) rotateY(0);
          }
          to {
            transform: perspective(1000px) rotateX(-15deg) rotateY(1turn);
          }
        }
      `}</style>
    </div>
  );
};

export default RotionCard;
