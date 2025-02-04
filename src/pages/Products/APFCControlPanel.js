import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/apfc-control-panel.png';
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
  heading: 'APFC Control Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'APFC Control Panel' },
  ],
};

const productData = {
    "title": "APFC Control Panel",
    "tagline": "High Efficiency | Consistent Performance",
    "aboutproduct": "Our APFC Control Panels are designed to optimize the power factor of industrial systems, ensuring that capacitor banks are switched in and out automatically to maintain energy efficiency. These panels contribute to reducing energy costs and improving the overall stability of electrical systems by minimizing reactive power and enhancing the efficiency of electrical equipment.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Continuous and Steady Power Factor Maintenance",
        "Automatic Power Factor Correction for Optimal Efficiency",
        "Advanced Capacitor Switching Mechanism",
        "Customizable Designs to Meet Client Requirements",
        "High-Efficiency Components to Save Energy",
        "Tough Electrical Insulation to Ensure Durability",
        "In-Built Fuse Protection for Safety",
        "Easy-to-Maintain with Long-Term Performance"
  ],
};

const APFCControlPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>APFC Control Panel</title>
              <meta name="description" content="High Efficiency | Consistent Performance" />
              <meta name="keywords" content="APFC Control Panel, power factor correction, energy efficiency, Trackzer Switchgears, capacitor banks, industrial systems" />
              <meta property="og:title" content="APFC Control Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. provides APFC Control Panels to optimize the power factor of industrial systems, reducing energy costs and improving efficiency." />
              <meta property="og:image" content="ogImageAPFCControlPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/apfc-control-panel" />
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

export default APFCControlPanel;
