// InformationPage.js
import React from "react";
import InforCard from "./InforCard";
import Count from "./Count";

const InformationPage = () => {
  const cardData = [
    {
      imageUrl: "/strategy.gif",
      title: "Dedicated Team",
      description:
        "Our dedicated team of tech-savvy experts specializes in utilizing state-of-the-art technologies to enhance your business growth with continuously.",
      link: "#",
    },
    {
      imageUrl: "/teamwork.gif",
      title: "User-Centric Approach",
      description:
        "Focused on delivering custom software solutions to foster a seamless end-user experience and always focus best solution your Business.",
      link: "#",
    },
    {
      imageUrl: "/box.gif",
      title: "Consistent Delivery",
      description:
        "We tap into the power of the digital world to deliver timely tech solutions to your business, creating impactful solutions and deliver tech solution before your end timeline.",
      link: "#",
    },
  ];

  const stats = [
    {
      image: "./bussiness.svg",
      value: 2,
      label: "Year In Business",
      suffix: "+",
    },
    { image: "./Team.svg", value: 20, label: "Team Members", suffix: "+" },
    {
      image: "./Customer.svg",
      value: 200,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      image: "./Support1.svg",
      value: 24,
      label: "Support Available",
      suffix: "/7",
    },
  ];

  return (
    <>
      {/* First part */}
      <div className="text-center py-16 px-4 bg-blue-100 text-black">
        <h1 className="text-4xl font-bold mb-4">Why choose us?</h1>
        <p className="text-lg mb-12 font-semibold">
          How can Pairtech Technologies grow your Business? We provide
          full-cycle software development services <br /> that smoothly adapt to
          the needs of your project, from IT strategy advice and thorough
          technology <br />
          roadmaps to the end-to-end construction of scalable solutions. We
          create strong bonding our client to client.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {" "}
          {/* Reduced gap */}
          {cardData.map((card, index) => (
            <InforCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>

      {/* Second part */}
      <div className="bg-gradient-to-b from-blue-100 to-purple-100 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {" "}
          {/* Reduced gap */}
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-4 flex items-center justify-center transform transition duration-300 hover:scale-110 hover:shadow-2xl">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-36 h-36 sm:w-32 sm:h-32 lg:w-48 lg:h-48 transition duration-300 ease-in-out"
                />
              </div>
              <Count target={stat.value} suffix={stat.suffix} />
              <div className="text-2xl text-black font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InformationPage;
