import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/800v-solar-panel.png';
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
  heading: '800V Solar Panels',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: '800V Solar Panels' },
  ],
};

const productData = {
    "title": "800V Solar Panels",
    "tagline": "Efficiency & Innovation | High-Voltage Performance",
    "aboutproduct": "At Trackzer Switchgears Pvt. Ltd., we design and manufacture advanced 800V Solar Panels, specifically engineered for high-performance solar power systems. Operating at 800 volts AC, these panels enable efficient power transmission, reducing system costs and enhancing productivity. Ideal for large-scale solar power plants, they are built to withstand demanding environments while delivering unmatched efficiency and longevity.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Reliable Fault Management to Limit Impact and Downtime",
        "High-Voltage Operation to Reduce Transmission Losses",
        "Cost-Effective Cabling with Reduced Wiring Expenses",
        "Robust and Durable Construction for Demanding Environments",
        "Lower Overall System Costs",
        "Enhanced Efficiency",
        "Reduced Installation Costs",
        "Minimized Maintenance Costs",
        "AC Distribution Board (ACDB) for Seamless Power Integration"
  ],
};

const SolarPanel800V = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>800V Solar Panels</title>
              <meta name="description" content="Efficiency & Innovation | High-Voltage Performance" />
              <meta name="keywords" content="800V Solar Panels, solar power systems, Trackzer Switchgears, renewable energy, high-voltage efficiency" />
              <meta property="og:title" content="800V Solar Panels" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. designs and manufactures advanced 800V Solar Panels, delivering unmatched efficiency and reliability for large-scale solar power plants." />
              <meta property="og:image" content="ogImageSolarPanel800V" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/800v-solar-panel" />
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

export default SolarPanel800V;
