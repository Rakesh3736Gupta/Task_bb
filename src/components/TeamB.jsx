import React from "react";

const ComponentName = () => {
  return (
    <section className="py-12 bg-blue-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black sm:text-4xl xl:text-4xl font-pj">
            Meet Our Creative Team
          </h2>
          <div className="text-center mb-12">
            {/* <h3 className="text-blue-600 text-xl font-semibold">
              Our Team Members
            </h3> */}
            <p className="text-black font-semibold pt-6">
              We're a dynamic group of individuals who are passionate about what
              ,<br />
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {[
            {
              name: "Rakesh Gupta ",
              position: "Software Developer",
              experience:
                "I am Full Stack Developer last 1 year , I develop end to end Solution ",
              image: "./rakesh.jpeg",
            },
            {
              name: "Jerome Bell",
              position: "data analysis",
              experience: "Co-founder, Chairman, Executive Director",
              image:
                "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
            },
            {
              name: "Jerome Bell",
              position: "UI Designer",
              experience: "Co-founder, Chairman, Executive Director",
              image:
                "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
            },
            {
              name: "Jerome Bell",
              position: "Software Developer",
              experience: "Co-founder, Chairman, Executive Director",
              image:
                "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
            },
          ].map((member, index) => (
            <div key={index}>
              <img
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44  filter transform transition-transform duration-300 ease-in-out hover:scale-110"
                src={member.image}
                alt={member.name}
              />
              <p className="mt-5 text-lg font-bold text-black sm:text-xl sm:mt-8 font-pj">
                {member.name}
                <br />
                <span className="text-gray-400">{member.position}</span>
              </p>
              <p className="mt-2 text-base font-normal text-black font-pj">
                {member.experience}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <line
                key={i}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                  11 + 35 * i
                } 1)`}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ComponentName;

// ComponentName.jsx

// import React from "react";
// import Card from "./CardTeam";

// const ComponentName = () => {
//   const teamMembers = [
//     {
//       name: "Rakesh Gupta",
//       position: "Software Developer",
//       experience:
//         "I am a Full Stack Developer with 1 year of experience, developing end-to-end solutions.",
//       image: "./rakesh.jpeg", // Path to image
//     },
//     {
//       name: "Jerome Bell",
//       position: "Data Analyst",
//       experience:
//         "I am a Full Stack Developer with 1 year of experience, developing end-to-end solutions.",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
//     },
//     {
//       name: "Alice Smith",
//       position: "UI Designer",
//       experience:
//         "Expert in designing beautiful and functional UI interfaces  and expert in Data base .",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
//     },
//     {
//       name: "John Doe",
//       position: "Backend Developer",
//       experience:
//         "Specializing in building scalable backend systems and expert in SEO.",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
//     },
//   ];

//   return (
//     <section className="py-12 bg-blue-100 sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl">
//             Our Creative Team
//           </h2>
//           <p className="text-black font-semibold mt-4">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
//           {teamMembers.map((member, index) => (
//             <Card
//               key={index}
//               name={member.name}
//               position={member.position}
//               experience={member.experience}
//               image={member.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComponentName;
