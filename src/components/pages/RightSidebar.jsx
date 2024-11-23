import React, { useEffect, useState } from "react";
import { Navbar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import HeroSec1 from "../HeroSec1";
import { hatch } from "ldrs";

hatch.register();

function RightSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const closeSidebar = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
      navigate("/");
    }
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Web3 Form Submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader on submit
    setMessage(""); // Clear previous message
    const formData = new FormData(event.target);
    formData.append("access_key", "5343e6f5-73e3-422d-91c4-911015ed3008");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      setLoading(false); // Hide loader after response

      if (res.success) {
        setMessage("My team will connect with you shortly.");
      } else {
        setMessage("There was an error sending the message.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-blue-100 bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 md:w-96 w-80 bg-white h-full z-50 transition-transform transform overflow-y-auto max-h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-black">Request A Quote</h2>
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
            className="text-black"
          >
            &times;
          </button>
        </div>

        {/* Form with Web3 submission */}
        <form className="p-4 space-y-4" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="w-full p-2 border rounded text-black bg-blue-100 placeholder-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-full p-2 border rounded text-black bg-blue-100 placeholder-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
            className="w-full p-2 border rounded text-black bg-blue-100 placeholder-black"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="w-full p-2 border rounded text-black bg-blue-100 placeholder-black"
            rows="4"
          />
          <button
            type="submit"
            className="w-full p-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded"
            disabled={loading}
          >
            {loading ? (
              <l-hatch size="28" stroke="4" speed="3.5" color="white" />
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {message && (
          <p className="p-4 text-center text-green-500 font-semibold">
            {message}
          </p>
        )}

        {/* Contact Information */}
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold text-blue-900">Get In Touch</h1>
          <p className="text-black">
            Please fill out the form below if you have a plan or project in mind
            that you'd like to share with us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-map-marker-alt text-red-500 text-2xl"></i>
              <div>
                <p className="text-blue-900 font-bold">Bahlolpur Sector 65</p>
                <p className="text-blue-900 font-bold">Noida 201307</p>
                <p className="text-blue-900 font-bold">Uttar Pradesh (India)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
              <div>
                <p className="text-blue-900 font-bold">+91 93361 40141</p>
                <p className="text-black">Mon-Sat 9am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-envelope text-yellow-500 text-2xl"></i>
              <div>
                <p className="text-blue-900 font-bold">info@pairtech.in</p>
                <p className="text-black">Online Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar and Hero Section */}
      <Navbar className="z-60">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">My App</h1>
          <div className="space-x-4">
            <a href="/" className="text-gray-600">
              Home
            </a>
            <a href="/about" className="text-gray-600">
              About
            </a>
            <a href="/contact" className="text-gray-600">
              Contact
            </a>
          </div>
        </div>
      </Navbar>
      <HeroSec1 />
    </div>
  );
}

export default RightSidebar;
