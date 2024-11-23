// PricingPackages.js
import React from "react";
import { FaCheck, FaComments } from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  originalPrice,
  discount,
  features,
  buttonColor,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/4 mx-2 mb-8 transition-transform duration-300 transform hover:scale-105">
    <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
    <p className="text-sm text-gray-500 text-center">
      Great For Small Business
    </p>
    <div className="flex justify-center items-center my-4">
      <span className="text-3xl font-bold text-gray-800">₹ {price}</span>
      <div className="ml-2 bg-blue-100 text-blue-600 text-sm font-semibold px-2 py-1 rounded">
        {discount}{" "}
        <span className="line-through text-gray-500">₹ {originalPrice}</span>
      </div>
    </div>
    <ul className="text-gray-600 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <FaCheck className="text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 text-white rounded ${buttonColor} hover:opacity-90`}
    >
      Order Now
    </button>
    <div className="flex justify-between items-center mt-4">
      <a href="tel:+918130543714" className="text-sm text-gray-500">
        Call Us: +91 93361 40141
      </a>
      <a href="#" className="text-sm text-blue-500 flex items-center">
        <FaComments className="mr-1" /> Click here to Chat Now
      </a>
    </div>
    <div className="text-center mt-2 text-sm text-gray-500">Need Support</div>
  </div>
);

const PricingPackages = () => (
  <div className="container mx-auto px-4 py-16 bg-blue-100">
    <h2 className="text-center text-sm text-pink-500 font-semibold">
      OUR PRICING
    </h2>
    <h1 className="text-center text-3xl font-bold text-gray-800 mt-2 mb-8">
      Packages that are within your financial constraints
    </h1>
    <div className="flex flex-col md:flex-row justify-center items-stretch">
      <PricingCard
        title="Basic"
        price="29,999"
        originalPrice="33,332"
        discount="10%"
        features={[
          "Website Creation",
          "Domain",
          "Hosting",
          "SSL",
          "User Friendly",
          "Language Converter",
          "Modern UI",
          "Admin Panel",
          "Social Media Page Creations",
        ]}
        buttonColor="bg-blue-500"
      />
      <PricingCard
        title="Professional"
        price="74,999"
        originalPrice="93,748"
        discount="20%"
        features={[
          "Website Creation",
          "Domain",
          "Hosting",
          "SSL",
          "User Friendly",
          "Language Converter",
          "Modern UI",
          "Admin Panel",
          "Social Media Page Creations",
        ]}
        buttonColor="bg-orange-500"
      />
      <PricingCard
        title="Premium"
        price="1,49,999"
        originalPrice="1,99,998"
        discount="25%"
        features={[
          "Website Creations/ E-Commerce",
          "Domain",
          "Hosting",
          "SSL",
          "User Friendly",
          "Language Converter",
          "Modern UI",
          "Admin Panel",
          "Social Media Page Creations",
        ]}
        buttonColor="bg-blue-500"
      />
    </div>
  </div>
);

export default PricingPackages;
