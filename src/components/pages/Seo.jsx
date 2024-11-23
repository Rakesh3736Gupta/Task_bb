import {
  SearchIcon,
  BarChartIcon,
  TrendingUpIcon,
  LineChartIcon,
  UsersIcon,
} from "lucide-react";

import React, { useEffect, useState } from "react";

import MagicCard from "../MagicCard";
import bg from "../../../public/bg1.png";
import ClientPage from "../ClientPage";

import Footer from "../shared/Footer";

export default function SEOComponent() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Boost Your Online Presence with SEO
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Drive more organic traffic and improve your search engine rankings
            with our comprehensive SEO solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <img
              src="/bg.png"
              alt="SEO Analytics Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-black">
              Data-Driven SEO Strategies
            </h2>
            <p className="text-black">
              Our advanced analytics and tracking tools provide real-time
              insights into your website's performance and search rankings.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <SearchIcon className="h-5 w-5 text-blue-600" />
                <span className="text-black">Keyword Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChartIcon className="h-5 w-5 text-blue-600" />
                <span className="text-black">Traffic Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUpIcon className="h-5 w-5 text-blue-600" />
                <span className="text-black">Ranking Tracker</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChartIcon className="h-5 w-5 text-blue-600" />
                <span className="text-black">Performance Metrics</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <BarChartIcon className="h-8 w-8 text-blue-600" />,
              title: "Technical SEO",
              description:
                "Optimize your website's technical aspects for better search engine crawling and indexing",
            },
            {
              icon: <UsersIcon className="h-8 w-8 text-blue-600" />,
              title: "Content Optimization",
              description:
                "Create and optimize content that ranks well and engages your target audience",
            },
            {
              icon: <SearchIcon className="h-8 w-8 text-blue-600" />,
              title: "Link Building",
              description:
                "Build high-quality backlinks to improve your domain authority and rankings",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-xl transform transition-all duration-700 hover:shadow-lg text-black ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Trusted by Leading Brands
            </h2>
            <ClientPage />
            <p className="text-black">
              Companies worldwide trust our SEO expertise
            </p>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
