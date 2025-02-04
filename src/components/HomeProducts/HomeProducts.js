import React from 'react';
import './HomeProducts.scss';
import ltpanel from '../../assets/img/products/l-t-panel.png';
import mccpanel from '../../assets/img/products/mcc-panel.png';
import pdbmldbpanel from '../../assets/img/products/pdb-mldb-panel.png';
import apfcpanel from '../../assets/img/products/apfc-control-panel.png';
import synchronizingpanel from '../../assets/img/products/synchronizing-panel.png';
import plcpanel from '../../assets/img/products/plc-vfd-control-panel.png';
import solarpanel from '../../assets/img/products/800v-solar-panel.png';

const HomeProducts = () => {
    const productData = [
        {
            "id": 1,
            "image": ltpanel, // Use ltpanel here
            "title": "L.T. Panel",
            "description": "High-quality panels designed to enhance electrical power distribution and optimize operational performance in all settings...",
            "link": "/products/lt-panel"
        },
        {
            "id": 2,
            "image": mccpanel,
            "title": "MCC Panel",
            "description": "State-of-the-art panels incorporating advanced technology for efficient motor control and seamless power management in industries...",
            "link": "/products/mcc-panel"
        },
        {
            "id": 3,
            "image": pdbmldbpanel,
            "title": "PDB & MLDB Panel",
            "description": "Reliable and durable panels for managing and distributing electrical power while ensuring system safety and stability in applications...",
            "link": "/products/pdb-mldb-panel"
        },
        {
            "id": 4,
            "image": apfcpanel,
            "title": "APFC Control Panel",
            "description": "Panels designed to optimize power factor, reduce energy costs, and enhance the efficiency of electrical systems automatically...",
            "link": "/products/apfc-control-panel"
        },
        {
            "id": 5,
            "image": synchronizingpanel,
            "title": "Synchronizing Panel",
            "description": "Panels providing seamless synchronization of multiple generators for uninterrupted and balanced power supply in critical systems...",
            "link": "/products/synchronizing-panel"
        },
        {
            "id": 6,
            "image": plcpanel,
            "title": "PLC-Based VFD Control Panel",
            "description": "Advanced PLC panels for precise automation, integrating control devices with reliable performance for industrial operations...",
            "link": "/products/plc-vfd-control-panel"
        },
        {
            "id": 7,
            "image": solarpanel,
            "title": "800V Solar Panels",
            "description": "High-performance solar panels engineered for efficient energy transmission and durability in large-scale solar power systems...",
            "link": "/products/800v-solar-panel"
        }
    ];

    return (
        <React.Fragment>
            <section className="p-tb-80">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">Our Products</h2>
                                <p
                                    className="regular font-18 text-black-80 mb-5"
                                    style={{ maxWidth: '900px', margin: 'auto' }}
                                >
                                    Trackzer Switchgears Pvt. Ltd. offers a wide range of electrical panels including L.T., PCC, MCC, APFC, and custom solutions for industrial automation and power management.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {productData.slice(0, 4).map((product) => (
                            <div className="col-md-6" key={product.id}>
                                <div className="product-card">
                                    <div className="product-thumbnail">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product-card-thumbnail w-100"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <h4 className="medium font-26 text-black mb-2">
                                            {product.title}
                                        </h4>
                                        <p className="regular font-18 text-black-80 mb-3">
                                            {product.description}
                                        </p>
                                        <a
                                            href={product.link}
                                            className="btn-red"
                                            rel="noopener noreferrer"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="/products" className="load-more cursor-pointer">
                                View all products
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default HomeProducts;
