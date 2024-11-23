// import React from "react";
// import "./TeamC.css"; // Import custom CSS for styling

// const TeamC = () => {
//   const teamMembers = [
//     {
//       name: "Rakesh Gupta",
//       title: "Software Developer",
//       experience:
//         "I am a Full Stack Developer with 1 year of experience, developing end-to-end solutions.",
//       image: "./rakesh.jpeg",
//       alt: "Portrait of Rakesh Gupta",
//     },
//     {
//       name: "Jerome Bell",
//       title: "Data Analysis",
//       experience: "Co-founder, Chairman, Executive Director",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
//       alt: "Portrait of Jerome Bell",
//     },
//     {
//       name: "Jerome Bell",
//       title: "UI Designer",
//       experience: "Co-founder, Chairman, Executive Director",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
//       alt: "Portrait of Jerome Bell",
//     },
//     {
//       name: "Jerome Bell",
//       title: "Software Developer",
//       experience: "Co-founder, Chairman, Executive Director",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
//       alt: "Portrait of Jerome Bell",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl font-pj hover:text-blue-500">
//             Meet Our Creative Team
//           </h2>
//           <p className="mt-2 text-xl text-gray-900 font-semibold">
//             We're a dynamic group of individuals who are passionate about what
//             we do and dedicated to delivering the best results for our clients.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="border-wrapper">
//               <div className="team-card bg-white rounded-lg p-6 text-center">
//                 <img
//                   className="w-32 h-32 rounded-full mx-auto"
//                   src={member.image}
//                   alt={member.alt}
//                 />
//                 <h3 className="mt-4 text-lg font-medium text-black">
//                   {member.name}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-400">{member.title}</p>
//                 <p className="mt-2 text-sm text-gray-500">
//                   {member.experience}
//                 </p>
//                 <div className="mt-4 flex justify-center space-x-3">
//                   <a href="#" className="text-gray-400 hover:text-gray-300">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-gray-300">
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-gray-300">
//                     <i className="fab fa-facebook"></i>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-gray-300">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamC;
