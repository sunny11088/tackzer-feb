import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/plc-vfd-control-panel.png';
import allImage from "../../assets/img/common/banner/all-product.png";
import logoIcons from "../../assets/img/common/trackzer-white.svg";
import ProductDetailsMain from "../../components/ProductDetailsMain/ProductDetailsMain";
import InnerSectionBanner from "../../components/Innersectionbanner/Innersectionbanner";
import Relatedproducts from "../../components/Relatedproducts/Relatedproducts";
import Faq from "../../components/Faq/Faq";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials";

const bannerData = {
  bgImage: allImage,
  heading: 'PLC-Based VFD Control Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'PLC-Based VFD Control Panel' },
  ],
};

const productData = {
    "title": "PLC-Based VFD Control Panel",
    "tagline": "Advanced & Complex Engineering",
    "aboutproduct": "Trackzer Switchgears Pvt. Ltd. provides advanced PLC Panels that cater to the automation needs of residential, commercial, and industrial electrical systems. These panels support a wide range of electrical systems and integrate seamlessly with other control devices, providing precise automation and control. The PLC panels are designed for complex engineering tasks, ensuring high operational reliability and efficiency.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Highly Reliable and Durable for Continuous Operation",
        "Supports a Range of Electrical Control Systems",
        "Advanced Fault Detection and Protection Features",
        "Precision Design for Automation Systems",
        "Enhances Operational Efficiency and Safety",
        "Customizable to Meet Specific Automation Needs",
        "User-Friendly Interface for Easy Operation",
        "Ideal for Complex Industrial Applications",
        "Proven Technology for Long-Term Performance"
  ],
};

const PLCVFDControlPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>PLC-Based VFD Control Panel</title>
              <meta name="description" content="Advanced & Complex Engineering" />
              <meta name="keywords" content="PLC Panel, VFD Control Panel, automation systems, Trackzer Switchgears, industrial solutions, precise engineering" />
              <meta property="og:title" content="PLC-Based VFD Control Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. provides advanced PLC-Based VFD Control Panels, ensuring high operational reliability and efficiency." />
              <meta property="og:image" content="ogImagePLCVFDControlPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/plc-vfd-control-panel" />
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

export default PLCVFDControlPanel;
