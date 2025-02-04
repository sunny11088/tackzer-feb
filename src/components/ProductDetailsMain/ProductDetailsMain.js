import React from 'react';
import './ProductDetailsMain.scss';

const ProductDetailsMain = ({ image, title, tagline, aboutproduct, inquiryLink, specialFeatures }) => {
    return (
        <React.Fragment>
            <section className="product-details-main p-tb-80">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-md-12 product-details-card">
                            <div className="row">
                                <div className="col-md-12 col-lg-7">
                                    <div className="product-card mb-3">
                                        <div className="product-thumbnail">
                                            <img src={image} alt={title} className="product-card-image w-100" loading="lazy" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-5">
                                    <div className="product-details">
                                        <h4 className="medium font-28 text-black mb-2">{title}</h4>
                                        <p className="regular font-18 text-black-80">{tagline}</p>
                                    </div>

                                    <div className="d-lg-none">
                                        <div className="product-details mt-3">
                                            <div className="btn-red-features">Special Features</div>
                                            <ul className="special-features">
                                                {specialFeatures.map((feature, index) => (
                                                    <li key={index}
                                                        className="regular font-16 text-black-80">{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="product-details mt-3">
                                        <p className="regular font-18 text-black-80 mb-3">{aboutproduct}</p>
                                        <a href={inquiryLink} className="btn-red inquiry" rel="noopener noreferrer">GET
                                            A QUOTE</a>
                                    </div>
                                </div>

                                <div className="col-md-12 d-none d-lg-block">
                                    <div className="product-details">
                                    <div className="btn-red-features">Special Features</div>
                                        <ul className="special-features">
                                            {specialFeatures.map((feature, index) => (
                                                <li key={index} className="regular font-16 text-black-80">{feature}</li>
                                            ))}
                                        </ul>
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

export default ProductDetailsMain;
