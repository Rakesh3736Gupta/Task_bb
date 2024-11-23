import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/shared/Footer";

export default function SoftwareDevelopmentLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 text-black">
      {/* <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">DevCo</span>
        </div>
      </header> */}

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Transforming ideas into powerful, scalable applications
          </motion.p>
          {/* <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Get Started
          </motion.button> */}

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:pl-40 pt-6">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => navigate("/enquiry")}
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Get Started
              {/* <HeroBtn name=" Get Started" /> */}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => navigate("/services")}
              className="border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Our Services
            </motion.button>
          </div>
        </section>

        <section className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              className="bg-blue-100"
              icon={<Globe className="w-12 h-12 text-blue-500" />}
              title="Web Development"
              description="Create responsive and dynamic web applications using cutting-edge technologies."
            />
            <ServiceCard
              className="bg-blue-100"
              icon={<Cpu className="w-12 h-12 text-green-500" />}
              title="Mobile App Development"
              description="Build native and cross-platform mobile apps for iOS and Android devices."
            />
            <ServiceCard
              className="bg-blue-100"
              icon={<Zap className="w-12 h-12 text-yellow-500" />}
              title="Cloud Solutions"
              description="Leverage cloud technologies to scale your applications and improve performance."
            />
          </div>
        </section>

        <section
          className="container mx-auto px-4 py-20 cursor-pointer "
          onClick={() => navigate("/information")}
        >
          <div className="bg-blue-100 rounded-lg  overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="/Coding workshop-rafiki.svg"
                  alt="Team collaboration"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
                <p className="text-black">
                  Our team of expert developers is passionate about creating
                  innovative solutions tailored to your needs. With years of
                  experience and a commitment to staying at the forefront of
                  technology, we deliver high-quality software that drives your
                  business forward.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-xl hover:shadow-xl  duration-300 hover:scale-105"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-blue-500 ">
        {title}
      </h3>
      <p className="text-black text-center ">{description}</p>
    </motion.div>
  );
}
