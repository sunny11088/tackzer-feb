import React from 'react';
import trackzerlogo from './../../assets/img/common/trackzer-footer-logo.svg'
import {Link} from "react-router-dom";
import facebookIcon from "../../assets/img/common/facebook.svg";
import linkedinIcon from "../../assets/img/common/linkedin.svg";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="sec-footer overflow-hidden p-tb-80 pb-0">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-main">
                                <div className="footer-left">
                                    <div className="logo-wrap mb-2">
                                        <img src={trackzerlogo} alt={"trackzer logo"} className="footer-logo img-fluid" loading="lazy" />
                                    </div>
                                    <p className="m-0 font-16 light">Trackzer Switchgears Pvt. Ltd., an ISO 9001:2015 certified company, excels in instrumentation and control system integration. As a trusted leader, we provide advanced technical solutions and services across diverse industries and applications. Our expertise includes manufacturing a wide range of high-quality panels, such as L.T. Panels, PCC Panels, MCC Panels, APFC Panels, FSP Panels, MSP Panels, A.M.F. Panels, Change Over Panels, and Meter Panels.</p>
                                </div>
                                <div className="footer-right">
                                    <div className="footer-right-top first">
                                        <div className="item">
                                            <div className="footer-nav">
                                                <span className="d-block font-24 font-500 mb-2 mb-lg-3">Company</span>
                                                <ul>
                                                    <li><a href="/" className="font-16 light">Home</a></li>
                                                    <li><a href="/aboutus" className="font-16 light">About us</a></li>
                                                    <li><a href="/products" className="font-16 light">Products</a></li>
                                                    {/*<li><a href="/" className="font-16 light">Certificates</a></li>*/}
                                                    <li><a href="/contactus" className="font-16 light">Contact us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="footer-nav">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <span className="d-block font-24 font-500 mb-2 mb-lg-3">Products</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul className="ml-links">
                                                            <li><Link to="/products/lt-panel" className="font-16 light">L.T. Panel</Link></li>
                                                            <li><Link to="/products/mcc-panel" className="font-16 light">MCC Panel</Link></li>
                                                            <li><Link to="/products/pdb-mldb-panel" className="font-16 light">PDB & MLDB Panel</Link></li>
                                                            <li><Link to="/products/apfc-control-panel" className="font-16 light">APFC Control Panel</Link></li>
                                                            <li><Link to="/products/synchronizing-panel" className="font-16 light">Synchronizing Panel</Link></li>
                                                            <li><Link to="/products/plc-vfd-control-panel" className="font-16 light">PLC-Based VFD Control Panel</Link></li>
                                                            <li><Link to="/products/800v-solar-panel" className="font-16 light">800V Solar Panels</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="footer-seprate"></span>
                                    <div className="footer-right-top last">
                                        <div className="item">
                                            <div className="footer-nav">
                                                <span className="d-block font-24 font-500 mb-2 mb-lg-3">Contact us</span>
                                                <ul>
                                                    <li><a href="mailto:psp@trackzer.in" className="regular font-16 text-black-80" aria-label="Send email to Prajesh Patel">psp@trackzer.in</a></li>
                                                    <li><a href="mailto:info@trackzer.in" className="regular font-16 text-black-80" aria-label="Send email to Prajesh Patel"> info@trackzer.in</a></li>
                                                    <li><a href="tel:+919662690086" className="regular font-16 text-black-80" aria-label="Call Prajesh Patel">+91 96626 90086</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="footer-nav">
                                                <span className="d-block font-24 font-500 mb-2 mb-lg-3">Address</span>
                                                <p className="m-0 font-16 light add">Plot No.157, NK - 3 Industrial Park, Near Bujrang Bakrol Village, Ahmedabad, Gujarat - 382430</p>
                                            </div>
                                            <div className="footer-nav  d-xl-block">
                                                <span className="d-block font-24 font-500 mb-2 mb-lg-3">Follow us</span>
                                                <ul className="socials">
                                                    <li><Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                              <span className="connect-icon">
                                <img src={facebookIcon} alt="Facebook" className="social-icon"/>
                              </span>
                                                    </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="https://www.linkedin.com/in/prajesh-patel-aa5787206/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                              <span className="connect-icon">
                                <img src={linkedinIcon} alt="LinkedIn" className="social-icon"/>
                              </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-right-top d-block d-xl-none social-links">
                                    <div className="item">
                                        <div className="footer-nav">
                                            <span className="d-block font-24 font-500 mb-2 mb-lg-3">Follow us</span>
                                            <ul className="socials">
                                                <li><a href="#" className="font-16 light">Facebook</a></li>
                                                <li><a href="#" className="font-16 light">In</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copy-right">
                                <div className="copy-right-inner font-14 light">Copyright © 2024. Itech Infotech All Rights Reserved.</div>
                                <div className="about-company d-none">
                                    <ul className="">
                                        <li><a href="#" className="font-14 light">Terms & Condition</a></li>
                                        <li><a href="#" className="font-14 light">Career</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
