import React from 'react';
import { Helmet } from 'react-helmet';
import productImage from '../../assets/img/products/pdb-mldb-panel.png';
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
  heading: 'PDB & MLDB Panel',
  breadcrumb: [
    { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
    { label: 'Product', link: '/products' },
    { label: 'PDB & MLDB Panel' },
  ],
};

const productData = {
    "title": "PDB & MLDB Panel",
    "tagline": "Reliability and Design Performance",
    "aboutproduct": "Trackzer Switchgears Pvt. Ltd. specializes in designing and manufacturing PDB & MLDB Panels, which are crucial for managing and distributing electrical power in industrial and commercial applications. These panels ensure efficient and reliable power distribution while maintaining the safety and stability of electrical systems. Our PDB & MLDB Panels are engineered to meet stringent industry standards, ensuring operational excellence and protection against electrical faults.",
    "image": productImage,
    "ogImage": "ogImage",
    "inquiryLink": "/contactus",
    "specialFeatures": [
        "Highly Efficient and Maintenance-Free",
        "Reliable Power Control and Distribution",
        "Customizable Designs Tailored to Specific Client Needs",
        "Built with Strong and Durable Materials",
        "Protection Against Overcurrent and Faults",
        "High-Quality Switchgears and Busbars",
        "Optimal Performance for Industrial Applications",
        "Easy-to-Operate Interface for Operators"
  ],
};

const PDBMLDBPanel = () => {
  return (
      <React.Fragment>
          <Helmet>
              <title>PDB & MLDB Panel</title>
              <meta name="description" content="Reliability and Design Performance" />
              <meta name="keywords" content="PDB Panel, MLDB Panel, power distribution, Trackzer Switchgears, industrial solutions, reliable performance" />
              <meta property="og:title" content="PDB & MLDB Panel" />
              <meta property="og:description" content="Trackzer Switchgears Pvt. Ltd. specializes in designing and manufacturing PDB & MLDB Panels for efficient and reliable power distribution." />
              <meta property="og:image" content="ogImagePDBMLDBPanel" />
              <meta property="og:type" content="website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="inquiry-link" content="https://example.com/pdb-mldb-panel" />
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

export default PDBMLDBPanel;
