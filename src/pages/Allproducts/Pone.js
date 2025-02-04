import React from 'react';
// import { Helmet } from 'react-helmet';
import './Pdetails.scss';
import productImage from '../../assets/img/common/about-img.png'; // Correctly import the image
import Relatedproducts from '../../components/Relatedproducts/Relatedproducts';
import ogImage from "../../assets/img/og-image.png";

// Embedded JSON data
const productData = {
  title: "L.T. Panel - Unmatched Quality | Boost Performance",
  tagline: "Trackzer Switchgears Pvt. Ltd. offers high-quality L.T. Panels that enhance electrical distribution and optimize system performance.",
  specialFeatures: [
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
  aboutproduct: "These L.T. Panels are designed to receive power from transformers or generators and distribute it effectively to various devices. Ideal for industrial and residential applications, ensuring steady power distribution and optimal operational efficiency.",
  image: productImage,
  ogImage: ogImage,
  inquiryLink: "https://example.com/static-link"
};

const Pone = () => {
  const {
    title,
    tagline,
    specialFeatures,
    aboutproduct,
    image,
    ogImage,
    inquiryLink
  } = productData;

  return (
    <React.Fragment>
      {/* SEO Meta Tags */}

      <Relatedproducts/>
      {/* Product Details Section */}
      <section className="product-details-main d-none">
        <div className="container custom-container">
          <div className="row">
            <div className="col-md-12 product-details-card">
              <div className="row">
                {/* Product Image */}
                <div className="col-md-12 col-lg-6">
                  <div className="product-card">
                    <div className="product-thumbnail">
                      <img src={image} alt={title} className="product-card-image w-100" loading="lazy" />
                    </div>
                  </div>
                </div>
                {/* Product Details */}
                <div className="col-md-12 col-lg-6">
                  <div className="product-details">
                    <h4 className="medium font-28 text-black mb-2">{title}</h4>
                    <p className="regular font-18 text-black-80">{tagline}</p>
                  </div>
                  <div className="product-details mt-15">
                    <div className="btn-red-features">Special Features</div>
                    <ul className="special-features">
                      {specialFeatures.map((feature, index) => (
                        <li key={index} className="regular font-16 text-black-80">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Additional Description and Inquiry */}
                <div className="col-md-12 mt-15">
                  <div className="product-details">
                    <p className="regular font-18 text-black-80 mb-3">{aboutproduct}</p>
                    <a href={inquiryLink} className="btn-red inquiry" target="_blank" rel="noopener noreferrer">Inquiry now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Pone;
