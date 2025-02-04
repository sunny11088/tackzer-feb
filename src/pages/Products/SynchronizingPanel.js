import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/synchronizing-panel.png';
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
  heading: 'Synchronizing Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'Synchronizing Panel' },
  ],
};

const productData = {
    "title": "Synchronizing Panel",
    "tagline": "Automatic Function | Balanced Supply",
    "aboutproduct": "Trackzer Switchgears Pvt. Ltd. offers Synchronizing Panels that provide seamless synchronization of multiple generators or breakers, ensuring that power supply remains balanced and uninterrupted. These panels are designed to automatically adjust the operation of connected generators to ensure continuous and stable power supply, making them ideal for critical applications that demand reliability.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Reduces Risk of Power Outages and System Failures",
        "Automatic Synchronization for Multiple Generators",
        "Designed for Continuous Power Supply",
        "Can Be Custom Configured for Different Generator Types",
        "Advanced Control Mechanism for Precise Operation",
        "Easy Integration with Existing Systems",
        "Reliable and High-Performance Design",
        "Manual Override for Flexibility and Control",
        "Ideal for Hospitals, Data Centers, and Industrial Plants"
  ],
};

const SynchronizingPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>Synchronizing Panel</title>
              <meta name="description" content="Automatic Function | Balanced Supply" />
              <meta name="keywords" content="Synchronizing Panel, generator synchronization, Trackzer Switchgears, power balance, industrial reliability" />
              <meta property="og:title" content="Synchronizing Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. offers Synchronizing Panels for seamless synchronization of multiple generators, ensuring continuous and stable power supply." />
              <meta property="og:image" content="ogImageSynchronizingPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/synchronizing-panel" />
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

export default SynchronizingPanel;
