import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Melissa Tatcher",
      role: "Marketing Expert",
      image: "./image.png",
      alt: "Portrait of Melissa Tatcher",
      company: "Marketing Inc.",
      details:
        "Melissa has over 5 years of experience in digital marketing strategies.",
      experience: "2 years",
    },
    {
      name: "Stuard Ferrel",
      role: "Digital Marketer",
      image: "./testimonial-1.jpg",
      alt: "Portrait of Stuard Ferrel",
      company: "Digital Solutions",
      details: "Stuard specializes in social media marketing and analytics.",
      experience: "3 years",
    },
    {
      name: "Eva Hudson",
      role: "Creative Designer",
      image: "./testimonial-2.jpg",
      alt: "Portrait of Eva Hudson",
      company: "Creative Studio",
      details: "Eva is known for her innovative design solutions and branding.",
      experience: "4 years",
    },
    {
      name: "Jackie Sanders",
      role: "SEO Expert",
      image: "./testimonial-3.jpg",
      alt: "Portrait of Jackie Sanders",
      company: "SEO Masters",
      details:
        "Jackie has helped numerous clients improve their search engine rankings.",
      experience: "2 years",
    },
    {
      name: "Chris Johnson",
      role: "Content Writer",
      image: "./testimonial-4.jpg",
      alt: "Portrait of Chris Johnson",
      company: "Content Hub",
      details: "Chris writes engaging content for various platforms.",
      experience: "1 year",
    },
    {
      name: "Alex Doe",
      role: "Web Developer",
      image: "./testimonial-5.jpg",
      alt: "Portrait of Alex Doe",
      company: "Dev Studio",
      details: "Alex is a skilled web developer with expertise in React.",
      experience: "3 years",
    },
    {
      name: "Laura Smith",
      role: "UI/UX Designer",
      image: "./testimonial-6.jpg",
      alt: "Portrait of Laura Smith",
      company: "Design Co.",
      details: "Laura creates user-friendly interfaces with a focus on UX.",
      experience: "5 years",
    },
    {
      name: "John Green",
      role: "Data Analyst",
      image: "./testimonial-7.jpg",
      alt: "Portrait of John Green",
      company: "Data Insights",
      details: "John provides insights based on data analysis and trends.",
      experience: "2 years",
    },
  ];

  return (
    <div className="container mx-auto py-12 bg-blue-100">
      <div className="text-center mb-12">
        {/* <h3 className="text-blue-600 text-lg font-semibold">
          Our Team Members
        </h3> */}
        <h1 className="text-4xl font-bold mb-4 text-black">
          Our Creative Team
        </h1>
        <p className="text-black font-semibold">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front bg-blue-100 text-black">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="rounded-full w-24 h-24 mx-auto mb-4" // Circular image
                />
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {member.name}
                </h2>
                <p className="text-black mb-1">{member.role}</p>
                <p className="text-black mb-4">
                  {member.experience} experience
                </p>
                {/* Show social media icons on front for small screens */}
                <div className="flex justify-center space-x-4 social-icons">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <h1 className="text-xl font-semibold">{member.name}</h1>
                <p>{member.role}</p>
                <p>{member.details}</p>
                <p className="font-light">{member.company}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {/* Social icons only show on the back for larger screens */}
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for flipping effect */}
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 300px;
          height: 300px;
          border: 1px solid #f1f1f1;
          margin: 0 auto;
          overflow: hidden;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: #bbb; /* Fallback color */
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .flip-card-back {
          background-color: dodgerblue;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateY(180deg);
        }

        @media (max-width: 768px) {
          .flip-card:hover .flip-card-inner {
            transform: none; /* Disable flip effect on mobile */
          }
          .social-icons {
            display: flex; /* Show social icons on the front side for small screens */
          }
        }

        @media (min-width: 769px) {
          .social-icons {
            display: none; /* Hide social icons on the front side for large screens */
          }
          .flip-card:hover .social-icons {
            display: flex; /* Show social icons on the back side when hovered */
          }
          .flip-card-back .social-icons {
            display: none; /* Hide social icons by default on the back side */
          }
          .flip-card:hover .flip-card-back .social-icons {
            display: flex; /* Show social icons when hovering over the card */
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeam;
