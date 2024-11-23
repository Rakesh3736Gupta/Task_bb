// TestimonialsSection.js
import { Linkedin, Twitter, Facebook, Star } from "lucide-react";
import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MediaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &.linkedin {
    color: #0077b5;
    background-color: rgba(0, 119, 181, 0.1);
    &:hover {
      background-color: #0077b5;
      color: white;
      transform: translateY(-2px);
    }
  }

  &.twitter {
    color: #1da1f2;
    background-color: rgba(29, 161, 242, 0.1);
    &:hover {
      background-color: #1da1f2;
      color: white;
      transform: translateY(-2px);
    }
  }

  &.facebook {
    color: #4267b2;
    background-color: rgba(66, 103, 178, 0.1);
    &:hover {
      background-color: #4267b2;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const Pattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25px 25px,
      rgba(255, 255, 255, 0.2) 2%,
      transparent 0%
    ),
    radial-gradient(
      circle at 75px 75px,
      rgba(255, 255, 255, 0.2) 2%,
      transparent 0%
    );
  background-size: 100px 100px;
  opacity: 0.1;
  pointer-events: none;
`;

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-600"
        }`}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-blue-100 py-24 px-4 relative overflow-hidden">
      {" "}
      {/* Changed background color */}
      <Pattern />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-blue-500 mb-6 tracking-tight">
            {" "}
            {/* Changed heading color */}
            Trusted by thousands
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            {" "}
            {/* Changed text color */}
            Discover why developers worldwide choose our platform for their
            projects
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="bg-blue-100 rounded-xl p-8 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`https://images.unsplash.com/photo-${
                    index + 1494790108377
                  }-be9c29b29330`}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-800"
                />
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg">
                    {" "}
                    {/* Changed text color */}
                    Daniella Doe
                  </h3>
                  <p className="text-black">
                    {" "}
                    {/* Changed text color */}
                    {index < 3 ? "Senior Mobile Developer" : "@daniella"}
                  </p>
                </div>
              </div>
              <StarRating rating={4} />
              <p className="text-black leading-relaxed mb-6">
                {" "}
                {/* Changed text color */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aliquid quo eum quae quos illo eorum ipsa doloribus nostrum
                minus libero aspernatur laborum cum, a suscipit, ratione ea
                totam ullam!
              </p>
              <div className="flex mt-6">
                <MediaButton
                  href="#"
                  className="linkedin"
                  aria-label="LinkedIn"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Linkedin size={20} />
                </MediaButton>
                <MediaButton
                  href="#"
                  className="twitter"
                  aria-label="Twitter"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Twitter size={20} />
                </MediaButton>
                <MediaButton
                  href="#"
                  className="facebook"
                  aria-label="Facebook"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Facebook size={20} />
                </MediaButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

render(<TestimonialsSection />, document.getElementById("root"));
