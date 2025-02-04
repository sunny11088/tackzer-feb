import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/mcc-panel.png';
import allImage from "../../assets/img/common/banner/all-product.png";
import logoIcons from "../../assets/img/common/trackzer-white.svg";
import InnerSectionBanner from "../../components/Innersectionbanner/Innersectionbanner";
import ProductDetailsMain from "../../components/ProductDetailsMain/ProductDetailsMain";
import Relatedproducts from "../../components/Relatedproducts/Relatedproducts";
import Faq from "../../components/Faq/Faq";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials";


const bannerData = {
  bgImage: allImage,
  heading: 'MCC Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'MCC Panel' },
  ],
};

const productData = {
    "title": "MCC Panel",
    "tagline": "Design & Innovation | Advanced Mechanism",
    "aboutproduct": "Trackzer Switchgears Pvt. Ltd. manufactures state-of-the-art MCC Panels, incorporating the latest technologies for efficient motor control and power management. These panels are used to control electric motors and integrate key components like push buttons, indicator lights, variable-frequency drives, and programmable logic controllers (PLCs). They ensure precise and reliable control over motor-driven processes, making them essential for a range of industrial applications.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Versatile and Flexible for Various Motor Control Needs",
        "Integration with VFDs and PLCs for Automation",
        "Reliable and Long-lasting Performance",
        "Compact and Easy-to-Install Design",
        "High-Capacity Design for Industrial Motors",
        "Safety Features Including Overload Protection",
        "Advanced Mechanism for Precise Motor Control",
        "Customizable Options for Different Applications",
        "Robust Construction for Industrial Environments"
  ],
};

const MCCPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>MCC Panel</title>
              <meta name="description" content="Design & Innovation | Advanced Mechanism" />
              <meta name="keywords" content="MCC Panel, motor control, power management, Trackzer Switchgears, automation panels, industrial solutions" />
              <meta property="og:title" content="MCC Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. manufactures MCC Panels, incorporating the latest technologies for efficient motor control and power management." />
              <meta property="og:image" content="ogImageMCCPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/mcc-panel" />
          </Helmet>


          <InnerSectionBanner {...bannerData} />

        <ProductDetailsMain
            image={productData.image}
            title={productData.title}
            tagline={productData.tagline}
            aboutproduct={productData.aboutproduct}
            inquiryLink={productData.inquiryLink}
            specialFeatures={productData.specialFeatures}
        />

        <Relatedproducts/>
        <Faq/>
        <Clients/>
        <Cta/>
        <Testimonials/>
      </React.Fragment>
  );
};

export default MCCPanel;
