import React from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RightSidebar from "./components/pages/RightSidebar";
import Services from "./components/Services";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import WorkingDomain from "./components/WorkingDomane";
import MainLayout from "./components/Layout";
import TechnologyExpertise from "./components/Technologies";
import WebsiteC from "./components/pages/WebsiteC";
import InformationPage from "./components/InformationPage";
import SoftwareDevelopmentLanding from "./components/pages/SoftwareDeve";
import ApplicationDev from "./components/pages/ApplicationDev";
import GoogleServices from "./components/pages/GoogleServices";
import SEOComponent from "./components/pages/Seo";
import SocialMediaPromotion from "./components/pages/Social";
import WebDevelopment from "./components/pages/Webdevelopment";
import DigitalMarketing from "./components/pages/DigitalM";
import AndroidDevelopment from "./components/pages/Android";
import IntegrationSoftware from "./components/pages/SoftwareIntegration";
import ReactNativePage from "./components/pages/ReactNative";
import JavaDevelopment from "./components/pages/Java";
import ReactFeatures from "./components/pages/Reactjs";
import PythonPage from "./components/pages/Python";
import DotNetPage from "./components/pages/Dotnet";
import MernStack from "./components/pages/MernStack";
import SalesforcePage from "./components/pages/SalesPage";
import PhpPage from "./components/pages/Php";
import NodeJsPage from "./components/pages/RoughWork";
import NodejsPage from "./components/pages/Nodejs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/rightSidebar",
    element: (
      <MainLayout>
        <RightSidebar />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
  {
    path: "/enquiry",
    element: (
      <MainLayout>
        <ContactUs />
      </MainLayout>
    ),
  },

  {
    path: "/technologies",
    element: (
      <MainLayout>
        <TechnologyExpertise />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/react-native",
    element: (
      <MainLayout>
        <ReactNativePage />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/java-development",
    element: (
      <MainLayout>
        <JavaDevelopment />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/react-development",
    element: (
      <MainLayout>
        <ReactFeatures />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/android-development",
    element: (
      <MainLayout>
        <AndroidDevelopment />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/python-development",
    element: (
      <MainLayout>
        <PythonPage />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/mernstack-development",
    element: (
      <MainLayout>
        <MernStack />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/dotnet",
    element: (
      <MainLayout>
        <DotNetPage />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/sales-development",
    element: (
      <MainLayout>
        <SalesforcePage />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/php-development",
    element: (
      <MainLayout>
        <PhpPage />
      </MainLayout>
    ),
  },

  {
    path: "/technologies/nodejs-development",
    element: (
      <MainLayout>
        <NodejsPage />
      </MainLayout>
    ),
  },

  {
    path: "/solutions",
    element: (
      <MainLayout>
        <WorkingDomain />
      </MainLayout>
    ),
  },

  {
    path: "/solutions/webdevelopment",
    element: (
      <MainLayout>
        <WebDevelopment />
      </MainLayout>
    ),
  },

  {
    path: "/solutions/digital-marketing",
    element: (
      <MainLayout>
        <DigitalMarketing />
      </MainLayout>
    ),
  },

  {
    path: "/solutions/android-development",
    element: (
      <MainLayout>
        <AndroidDevelopment />
      </MainLayout>
    ),
  },

  {
    path: "/solutions/Software-Integration",
    element: (
      <MainLayout>
        <IntegrationSoftware />
      </MainLayout>
    ),
  },

  {
    path: "/services/website-creation",
    element: (
      <MainLayout>
        <WebsiteC />
      </MainLayout>
    ),
  },

  {
    path: "/information",
    element: (
      <MainLayout>
        <InformationPage />
      </MainLayout>
    ),
  },

  {
    path: "/service/softwareDeve",
    element: (
      <MainLayout>
        <SoftwareDevelopmentLanding />
      </MainLayout>
    ),
  },

  {
    path: "/service/Applications",
    element: (
      <MainLayout>
        <ApplicationDev />
      </MainLayout>
    ),
  },

  {
    path: "/service/google-services",
    element: (
      <MainLayout>
        <GoogleServices />
      </MainLayout>
    ),
  },
  {
    path: "/service/seo-services",
    element: (
      <MainLayout>
        <SEOComponent />
      </MainLayout>
    ),
  },

  {
    path: "/service/social-media",
    element: (
      <MainLayout>
        <SocialMediaPromotion />
      </MainLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
