import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import produtbanner from '../../assets/img/common/product.png'
import about from '../../assets/img/common/about-img.png'
import bgImage from '../../../src/assets/img/common/about-bg.png';
import Industryserve from '../../components/Industryserve/Industryserve';
import Clients from '../../components/Clients/Clients';
import Faq from '../../components/Faq/Faq';
import Testimonials from '../../components/Testimonials/Testimonials';
import Cta from '../../components/Cta/Cta';
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
  };
  return (
      <React.Fragment>
          <section className="section-home-banner">
              <div className="container custom-container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="banner-content">
                              <h1 className="text-white semibold inner-heading font-70 text-uppercase">Precision Panels
                                  for Every Industry!</h1>
                              <p className="regular font-18 text-white my-4" style={{maxWidth: '600px'}}>Trackzer
                                  Switchgears Pvt. Ltd., ISO 9001:2015 certified, excels in control system integration.
                                  We craft high-quality MV, LT, PCC, MCC, and APFC panels, delivering innovative
                                  solutions for diverse industry needs.</p>
                              <Link to="/products" className="btn-red d-inline-block">view all products</Link>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="banner-imgs">
                              <img src={produtbanner} alt="Description of the image" className="img-fluid"/>
                          </div>
                      </div>


                  </div>
              </div>
          </section>

          <section className="p-tb-80">
          <div className="container custom-container">
              <div className="row align-items-center">
                      <div className="col-md-7 pe-md-3 pe-lg-5">
                          <h2 className="medium font-50 text-black mb-3">About us</h2>
                          <div className="medium font-24 text-red mb-2">Trackzer Switchgears Pvt. Ltd.</div>
                          <div className="medium font-20 text-black-80 mb-2">We manufacture Power and Control Panel with
                              Industrial Automation Solutions for Quality performance.
                          </div>
                          <p className="regular font-16 text-black-80 mb-4">Trackzer Switchgears Pvt. Ltd., an ISO 9001:2015 certified company, specializes in Instrumentation and Control System Integration, providing cutting-edge technical solutions and services across diverse industries and applications. Our expertise lies in manufacturing high-quality panels, including <strong>MV Panels 11KV to 33KV</strong>, RMU, Package Substation, Main LT Panel, Synchronizing Panel, PCC Panels, MCC Panels, APFC Panels, FSP Panels, MSP Panels, A.M.F. Panels, Change Over Panels, and Meter Panels. Committed to innovation and excellence, we deliver top-tier products and services tailored to meet our clients' specific needs.</p>
                          <Link to="/aboutus" className="btn-red">Know About Us</Link>
                      </div>
                      <div className="col-md-5">
                          <div className="">
                              <img src={about} alt="Description of the image" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Industryserve/>
         <HomeProducts/>

          <section className="p-tb-80 bg-gray-10">
              <div className="container custom-container">
                  <div className="row align-items-center">
                      <div className="col-md-7 pe-md-3 pe-lg-5">
                          <h2 className="medium font-50 text-black mb-3">Global Partner</h2>
                          <div className="medium font-24 text-red mb-2">TMEIC</div>
                          <div className="medium font-20 text-black-80 mb-2">Toshiba Mitsubishi-Electric Industrial Systems Corporation
                          </div>
                          <p className="regular font-16 text-black-80 mb-4">TMEIC is a global leader in providing innovative and reliable solutions for industrial substation systems. Established through the combined expertise of its parent companies, Toshiba and Mitsubishi Electric, TMEIC draws on decades of technological innovation and industry experience to deliver cutting-edge solutions that enhance the efficiency and performance of electrical infrastructure worldwide.</p>
                          <Link to="/aboutus" className="btn-red">Know About Us</Link>
                      </div>
                      <div className="col-md-5">
                          <div className="">
                              <img src={about} alt="Description of the image" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <Faq/>
          <Clients/>
          <Cta/>
          <Testimonials/>
      </React.Fragment>
  );
};

export default Home;
