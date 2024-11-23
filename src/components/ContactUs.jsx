// import React from "react";

// const ContactUs = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Add the Web3 access key here
//     formData.append("access_key", "5343e6f5-73e3-422d-91c4-911015ed3008");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       alert("Message sent successfully!");
//     } else {
//       console.log("Error", res);
//       alert("There was an error sending the message.");
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="bg-blue-100">
//           <div className="text-center mb-6">
//             <h1 className="text-4xl font-bold mb-2 text-black">
//               Let's chat.
//               <br />
//               Tell me about your project.
//             </h1>
//           </div>

//           <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6 space-y-4 md:space-y-0 md:space-x-12 ">
//             {/* Contact Form Section */}
//             <div className="bg-white rounded-lg p-6 w-full md:w-1/2 mt-2 shadow-xl">
//               <h2 className="text-xl font-semibold text-black mb-4">
//                 Send us a message
//                 <span className="ml-2 ">
//                   <i className="fas text-gray-500   bg-[url('/rocket.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block pt-6"></i>{" "}
//                 </span>
//               </h2>
//               <form onSubmit={onSubmit} className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full name*"
//                     className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email address*"
//                     className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone number"
//                     className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <textarea
//                     name="message"
//                     placeholder="Tell us more about your project*"
//                     className="w-full border border-gray-300 rounded-lg p-3 h-32 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   ></textarea>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700 transition"
//                   >
//                     Send message
//                   </button>
//                   {/* mail and contact number */}

//                   <div className="flex lg:flex-row flex-col">
//                     <div className="w-full px-2 mt-6">
//                       <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <i className="text-gray-500 bg-[url('/phone.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//                           <span className="text-black">Call</span>
//                         </div>
//                         <a
//                           href="tel:+919336140141"
//                           className="text-blue-600 font-semibold ml-3"
//                         >
//                           +91 93361 40141
//                         </a>
//                       </div>
//                     </div>

//                     <div className="w-full px-2 mt-6">
//                       <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <i className="text-gray-500 bg-[url('/email.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//                           <span className="text-black">Mail</span>
//                         </div>
//                         <a
//                           href="mailto:info@pairtech.in"
//                           className="text-blue-600 font-semibold ml-2"
//                         >
//                           info@pairtech.in
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             {/* Image Section */}
//             <div className="w-full md:w-1/2 flex flex-col items-center">
//               <img
//                 src="./Contact4.svg" // Replace with actual SVG path
//                 alt="Illustration of people working on business solutions"
//                 className="w-full max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105"
//                 style={{ maxHeight: "500px", objectFit: "contain" }}
//               />

//               {/* Address Section */}
//               <div className="mt-6">
//                 <div className="bg-white flex items-center justify-center">
//                   <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between lg:flex-row flex-col">
//                     <div className="flex items-center space-x-2 gap-2">
//                       <i className="fas text-gray-500 bg-[url('/location.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
//                       <span className="text-black">Address</span>
//                     </div>
//                     <br />
//                     <span className="text-blue-600 ml-2">
//                       Bahlolpur Sector 65 Noida UP (India)
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Details */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

// ContactUs.js

import React, { useState } from "react";
import { hatch } from "ldrs";

hatch.register();

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader on submit
    const formData = new FormData(event.target);

    // Add the Web3 access key here
    formData.append("access_key", "5343e6f5-73e3-422d-91c4-911015ed3008");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
      alert("My team will connect with you shortly.!");
    } else {
      alert("There was an error sending the message.");
    }
  };

  return (
    <div>
      <div className="bg-blue-100">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 text-black pt-10">
            Let's chat.
            <br />
            Tell me about your project.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6 space-y-4 md:space-y-0 md:space-x-12 ">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg p-6 w-full md:w-1/2 mt-2 shadow-xl">
            <h2 className="text-xl font-semibold text-black mb-4">
              Send us a message
              <span className="ml-2 ">
                <i className="fas text-gray-500   bg-[url('/rocket.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block pt-6"></i>{" "}
              </span>
            </h2>
            <form
              onSubmit={onSubmit}
              className="space-y-4 "
              defaultValue=""
              required
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name*"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us more about your project*"
                  className="w-full border border-gray-300 rounded-lg p-3 h-32 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                {loading ? (
                  <l-hatch size="28" stroke="4" speed="3.5" color="black" />
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700 transition"
                  >
                    Send message
                  </button>
                )}

                <div className="flex lg:flex-row flex-col">
                  <div className="w-full px-2 mt-6">
                    <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <i className="text-gray-500 bg-[url('/phone.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                        <span className="text-black">Call</span>
                      </div>
                      <a
                        href="tel:+919336140141"
                        className="text-blue-600 font-semibold ml-3"
                      >
                        +91 93361 40141
                      </a>
                    </div>
                  </div>

                  <div className="w-full px-2 mt-6">
                    <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <i className="text-gray-500 bg-[url('/email.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                        <span className="text-black">Mail</span>
                      </div>
                      <a
                        href="mailto:info@pairtech.in"
                        className="text-blue-600 font-semibold ml-2"
                      >
                        info@pairtech.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src="./Contact4.svg" // Replace with actual SVG path
              alt="Illustration of people working on business solutions"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />

            {/* Address Section */}
            <div className="mt-6">
              <div className="bg-white flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-4 inline-flex items-center justify-between lg:flex-row flex-col">
                  <div className="flex items-center space-x-2 gap-2">
                    <i className="fas text-gray-500 bg-[url('/location.gif')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                    <span className="text-black">Address</span>
                  </div>
                  <br />
                  <span className="text-blue-600 ml-2">
                    Bahlolpur Sector 65 Noida UP (India)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
