import React from "react";
import SerCard from "./ServiceCard";

const services = [
  {
    title: "IT Consulting & Outsourcing",
    description:
      "We offer services like IT consulting, IT outsourcing, IT services, digital transformation, and system integration.",
    icon: "/web-developer.gif", // Image path in public folder
  },
  {
    title: "Blockchain Development",
    description:
      "Our blockchain development expertise includes data masking, data transmission, identity security, and more.",
    icon: "/link.gif", // Emoji icon
  },
  {
    title: "Website Development",
    description:
      "We deliver websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, QA testing, and custom CMS.",
    icon: "/domain.gif", // Emoji icon
  },
  {
    title: "Application Development",
    description:
      "Transform your mobile app concepts into solutions with our skilled mobile and desktop application development team.",
    icon: "/applications.gif", // Emoji icon
  },
  {
    title: "Enterprise Software (ERP)",
    description:
      "We offer comprehensive ERP development as part of our custom software solutions for enterprise needs.",
    icon: "/corporate-culture.gif", // Emoji icon
  },
  {
    title: "Cloud & DevOps",
    description:
      "Our DevOps practices enhance collaboration between developers and IT operations, ideal for cloud computing environments.",
    icon: "/hard-drive.gif", // Emoji icon
  },
  {
    title: "Salesforce Solutions",
    description:
      "We offer cloud software solutions using SaaS, CRM, and PaaS platforms to build custom applications and enhance customer interaction.",
    icon: "/repair-tools.gif", // Emoji icon
  },
  {
    title: "Logo & Branding Service",
    description:
      "We create brand identities that resonate with your audience and establish a strong visual foundation for your business.",
    icon: "/branding.gif", // Emoji icon
  },
  {
    title: "Search Engine Optimization",
    description:
      "We employ a strategic SEO approach to boost your search rankings and drive organic traffic.",
    icon: "/seo.gif", // Emoji icon
  },
  {
    title: "Social Media Promotion",
    description:
      "We manage your online presence and run targeted campaigns to deliver tangible results.",
    icon: "/social-media.gif", // Emoji icon
  },
];

const Services = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <p className="text-red-500 uppercase tracking-wide font-semibold">
            <span className="text-blue-500 text-5xl"> SERVICES </span>
          </p>
          <h2 className="text-xl font-bold text-black pt-6">
            We offer services like IT consulting, IT outsourcing, IT services,
            digital transformation,
            <br /> software system integration, and data migration with all
            databases.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 ">
          {services.map((service, index) => (
            <SerCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

// import React from "react";
// import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

// const services = [
//   {
//     title: "IT Consulting & Outsourcing",
//     description:
//       "We offer services like IT consulting, IT outsourcing, IT services, digital transformation, and system integration.",
//     icon: "/web-developer.gif", // Image path in public folder
//   },
//   {
//     title: "Blockchain Development",
//     description:
//       "Our blockchain development expertise includes data masking, data transmission, identity security, and more.",
//     icon: "/link.gif", // Emoji icon
//   },
//   {
//     title: "Website Development",
//     description:
//       "We deliver websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, QA testing, and custom CMS.",
//     icon: "/domain.gif", // Emoji icon
//   },
//   {
//     title: "Application Development",
//     description:
//       "Transform your mobile app concepts into solutions with our skilled mobile and desktop application development team.",
//     icon: "/applications.gif", // Emoji icon
//   },
//   {
//     title: "Enterprise Software (ERP)",
//     description:
//       "We offer comprehensive ERP development as part of our custom software solutions for enterprise needs.",
//     icon: "/corporate-culture.gif", // Emoji icon
//   },
//   {
//     title: "Cloud & DevOps",
//     description:
//       "Our DevOps practices enhance collaboration between developers and IT operations, ideal for cloud computing environments.",
//     icon: "/hard-drive.gif", // Emoji icon
//   },
//   {
//     title: "Salesforce Solutions",
//     description:
//       "We offer cloud software solutions using SaaS, CRM, and PaaS platforms to build custom applications and enhance customer interaction.",
//     icon: "/repair-tools.gif", // Emoji icon
//   },
//   {
//     title: "Logo & Branding Service",
//     description:
//       "We create brand identities that resonate with your audience and establish a strong visual foundation for your business.",
//     icon: "/branding.gif", // Emoji icon
//   },
//   {
//     title: "Search Engine Optimization",
//     description:
//       "We employ a strategic SEO approach to boost your search rankings and drive organic traffic.",
//     icon: "/seo.gif", // Emoji icon
//   },
//   {
//     title: "Social Media Promotion",
//     description:
//       "We manage your online presence and run targeted campaigns to deliver tangible results.",
//     icon: "/social-media.gif", // Emoji icon
//   },
// ];

// const Services = () => {
//   return (
//     <div className="bg-blue-100 py-12">
//       <div className="container mx-auto px-4">
//         {/* Heading Section */}
//         <div className="text-center mb-8">
//           <p className="text-red-500 uppercase tracking-wide font-semibold">
//             <span className="text-blue-500 text-5xl"> SERVICES </span>
//           </p>
//           <h2 className="text-xl font-bold text-gray-600 pt-6">
//             We offer services like IT consulting, IT outsourcing, IT services,
//             digital transformation,
//             <br /> software system integration, and data migration with all
//             databases.
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
