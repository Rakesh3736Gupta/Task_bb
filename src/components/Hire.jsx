import React from "react";

const Hire = () => {
  return (
    <div className="bg-blue-100">
      <header className="text-center py-8">
        <h1 className="text-2xl font-light text-black">
          <span className="font-bold text-black">
            Hire a Dedicated Developer
          </span>
        </h1>
        <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
          Hire Now
        </button>
      </header>
      <main className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg h-56 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-4">
                Our Development Services
              </h2>
              <p className="mb-4">
                We believe in the transformative development of digital
                technology and leverage our expertise to help clients achieve
                their online goals and skyrocket their growth.
              </p>
              <a href="#" className="text-white font-bold">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Web Development Card */}
            <div className="bg-[#98f5e2] p-6 rounded-lg shadow-lg h-56 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">Web Development</h2>
                <p className="text-gray-600">
                  PHP <span className="mx-2">|</span> REACT{" "}
                  <span className="mx-2">|</span> JAVA{" "}
                  <span className="mx-2">|</span> DJANGO
                </p>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="Web Development Icon"
                className="ml-4"
              />
            </div>

            {/* Ecommerce Development Card */}
            <div className="bg-[#fff18a] p-6 rounded-lg shadow-lg h-56 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">
                  Ecommerce Development
                </h2>
                <p className="text-gray-600">
                  PHP <span className="mx-2">|</span> REACT{" "}
                  <span className="mx-2">|</span> SHOPIFY{" "}
                  <span className="mx-2">|</span> MAGENTO
                </p>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="Ecommerce Development Icon"
                className="ml-4"
              />
            </div>

            {/* Mobile App Development Card */}
            <div className="bg-[#bcf7d1] p-6 rounded-lg shadow-lg h-56 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">
                  Mobile App Development
                </h2>
                <p className="text-gray-600">
                  IPHONE <span className="mx-2">|</span> ANDROID{" "}
                  <span className="mx-2">|</span> CROSS PLATFORM
                </p>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="Mobile App Development Icon"
                className="ml-4"
              />
            </div>

            {/* Software Development Card */}
            <div className="bg-[#facde6] p-6 rounded-lg shadow-lg h-56 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">Software Development</h2>
                <p className="text-gray-600">
                  REACT.JS <span className="mx-2">|</span> NODE.JS{" "}
                  <span className="mx-2">|</span> ANGULAR.JS
                </p>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="Software Development Icon"
                className="ml-4"
              />
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-[#86f0ad] p-6 rounded-lg shadow-lg h-56 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
                <p className="text-gray-600">
                  SEO <span className="mx-2">|</span> SMO{" "}
                  <span className="mx-2">|</span> PPC{" "}
                </p>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="Digital Marketing Icon"
                className="ml-4"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hire;
