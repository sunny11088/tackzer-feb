import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/l-t-panel.png';
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
  heading: 'L.T. Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'L.T. Panel' },
  ],
};

const productData = {
    "title": "L.T. Panel",
    "tagline": "Unmatched Quality | Boost Performance",
    "aboutproduct": "Trackzer Switchgears Pvt. Ltd. offers high-quality L.T. Panels that enhance electrical distribution and optimize system performance. These panels are designed to receive power from transformers or generators and distribute it effectively to various devices and electrical systems. Whether used in industrial or residential applications, our L.T. Panels ensure steady power distribution while maintaining optimal operational efficiency.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Superior Construction",
        "Assured & Optimal Performance",
        "Customized Options Available",
        "Minimum Maintenance",
        "Precision Engineered",
        "High-Quality Materials and Components",
        "Reliable Performance for Various Applications",
        "Long-lasting and Durable Design",
        "Enhanced Protection and Safety Features"
  ],
};

const LTPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>L.T. Panel</title>
              <meta name="description" content="Unmatched Quality | Boost Performance" />
              <meta name="keywords" content="L.T. Panel, electrical distribution, power optimization, Trackzer Switchgears, high-quality panels, durable electrical systems" />
              <meta property="og:title" content="L.T. Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. offers high-quality L.T. Panels that enhance electrical distribution and optimize system performance." />
              <meta property="og:image" content="ogImageLTPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/lt-panel" />
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

export default LTPanel;
