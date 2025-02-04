// src/AboutUs.js
import React from 'react';
import './AboutUs.scss';
import bgImage from '../../../src/assets/img/common/banner/about-bg.png';
import Team from '../../components/Team/Team';
import InnerSectionBanner from '../../components/Innersectionbanner/Innersectionbanner';
import Faq from "../../components/Faq/Faq";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials";
import logoIcons from '../../assets/img/common/trackzer-white.svg';
import about from "../../assets/img/common/about-img.png";
import teamImage from '../../assets/img/common/about-img.png';
import qualityIcon from '../../assets/img/common/quality.svg';
import knowledgeIcon from '../../assets/img/common/knowledge.svg';
import customerIcon from '../../assets/img/common/customer.svg';
import visionIcon from '../../assets/img/common/vision.svg';
import missionIcon from '../../assets/img/common/mission.svg';

const AboutUs = () => {


  const bannerData = {
    bgImage: bgImage, 
    heading: 'About Us',
    breadcrumb: [
      { label: <img src={logoIcons} alt="trackzer" className="breadcrumb-logo" />, link: '/' },
      { label: 'Home', link: '/' },
      { label: 'About us' },
    ],  
  };

    const ourdata = [
        {
            number: '100+',
            label: 'Satisfied Clients',
        },
        {
            number: '10+',
            label: 'Years of Expertise',
        },
        {
            number: '100+',
            label: 'Projects Delivered',
        },
        {
            number: '40+',
            label: 'Team Members',
        },
        {
            number: '20+',
            label: 'Product Variants',
        },
        {
            number: '250+',
            label: 'Units Manufactured Annually',
        },
        {
            number: '20+',
            label: 'Industries Served',
        },
        {
            number: '95%',
            label: 'Client Retention Rate',
        },
/*        {
            number: '10+',
            label: 'Certifications and Accreditations',
        },
        {
            number: '24+',
            label: 'Hours of Customer Support Daily',
        },*/
    ];



    const techData = [
        {
            title: "Engineering",
            description: "We provide best-in-class engineering services for all types of electrical panels, ensuring optimal performance and reliability for your plant's electrical infrastructure"
        },
        {
            title: "Technology",
            description: "Our cutting-edge technology keeps us at the forefront of the electrical switchgear industry, delivering advanced solutions that meet the most demanding industrial needs."
        },
        {
            title: "Services",
            description: "From the design and development phase to installation, commissioning, and after-sales support, TRACKZER is with you every step of the way to ensure seamless plant operation."
        },
        {
            title: "Innovation",
            description: "We constantly innovate to adapt to evolving industrial requirements, staying ahead of market dynamics and delivering solutions that cater to modern power management challenges."
        }
    ];


    return (
        <React.Fragment>
            <InnerSectionBanner {...bannerData} />

            <section className="p-tb-80">
                <div className="container custom-container">
                    <div className="row about-us-inner">
                        <div className="col-md-12">
                            <div className="">
                                <div className="medium font-24 text-red mb-2">Trackzer Switchgears Pvt.</div>
                                <div className="medium font-20 text-black-80 mb-2">We manufacture Power and Control
                                    Panel with Industrial Automation Solutions for Quality performance.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-details">
                                <p className="font-18 text-black-80">Trackzer Switchgears Pvt. Ltd. is a Group Company
                                    Nexa Control System. We are an ISO 9001: 2015 certified leading Instrumentation and
                                    Control System integrator Company offering technical solutions and services,
                                    covering a wide range of industries and applications. We manufacture <strong>L.T.
                                        Panel</strong>, <strong>PCC Panel</strong>, <strong>MCC Panel</strong>, <strong>APFC
                                        Panel</strong>, <strong>FSP Panel</strong>, <strong>MSP Panel</strong>, <strong>A.M.F.
                                        Panel</strong>, <strong>Change Over Panel</strong>, and <strong>Meter
                                        Panel</strong>.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-details">
                                <p className="font-18 text-black-80">We offer turnkey integrated industrial automation
                                    solutions based on state-of-the-art <strong>PLC</strong> and <strong>SCADA
                                        technologies</strong> for a wide range of industrial automation applications,
                                    including manufacturing, utilities, <strong>Oil & Gas</strong>, and Service
                                    Industries. We at Trackzer Switchgears Pvt. Ltd. offer unmatched quality in <strong>LT
                                        Panels</strong>. Basically, <strong>LT Panel</strong> is an electrical
                                    distribution board that receives power from
                                    a <strong>generator</strong> or <strong>transformer</strong> and distributes the
                                    same to various <strong>electronic devices</strong> and <strong>distribution
                                        boards</strong>.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="we-have">
                                {ourdata.map((item, index) => (
                                    <div key={index} className="number-of bg-gray-10">
                                        <span
                                            className="number medium font-50 text-red mb-1 d-block">{item.number}</span>
                                        <span className="details medium font-20 text-black-80 mb-2">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-tb-80 bg-gray-10">
                <div className="container custom-container">

                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">Quality Commitment at TRACKZER</h2>
                                <p className="regular font-18 text-black-80 mb-5"
                                   style={{maxWidth: '900px', margin: 'auto'}}>
                                    TRACKZER remains dedicated to maintaining the highest quality standards, ensuring
                                    that every solution we deliver adds value to our customers’ operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="">

                                <div className="commitment-icons">
                                    <img
                                        src={knowledgeIcon}
                                        alt="Knowledge Icon"
                                        className="commitment-icon img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="medium font-20 text-black-80 mb-3">Unmatched Industry Knowledge</h3>
                                <p className="regular font-18 text-black-80">
                                    Trackzer Switchgears Pvt. Ltd. is a leader in Power and Control Panel manufacturing,
                                    with extensive experience in Industrial Automation. As an ISO 9001:2015 certified
                                    company, we deliver tailored solutions to meet diverse industry needs with precision
                                    and reliability.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="commitment-icons">
                                    <img
                                        src={qualityIcon}
                                        alt="Quality Icon"
                                        className="commitment-icon img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="medium font-20 text-black-80 mb-3">Quality and Innovation</h3>
                                <p className="regular font-18 text-black-80">
                                    We provide high-quality Power and Control Panels, including L.T., PCC, MCC, and
                                    other panels. Our products are designed with advanced technology to ensure
                                    durability, optimal performance, and industry compliance.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <div className="commitment-icons">
                                    <img
                                        src={customerIcon}
                                        alt="Customer Icon"
                                        className="commitment-icon img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="medium font-20 text-black-80 mb-3">Customer-Centric Approach</h3>
                                <p className="regular font-18 text-black-80">
                                    We focus on understanding your unique needs and delivering customized solutions. Our
                                    dedicated team ensures exceptional service, building long-term relationships through
                                    quality and customer satisfaction.
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className="row company-vision-mission mt-md-4 mt-lg-5">

                        <div className="col-md-6">
                            <div className="">
                                <div className="commitment-icons">
                                    <img
                                        src={visionIcon}
                                        alt="Vision Icon"
                                        className="commitment-icon img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="medium font-20 text-black-80 mb-3">Vision</h3>
                                <p className="regular font-18 text-black-80">
                                    To be recognized as a leader in the manufacturing of state-of-the-art industrial
                                    panels, delivering the highest levels of quality and performance. Our vision extends
                                    beyond products; we aim to ensure client satisfaction through exceptional technical
                                    support and proactive follow-up services.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <div className="commitment-icons">
                                    <img
                                        src={missionIcon}
                                        alt="Mission Icon"
                                        className="commitment-icon img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="medium font-20 text-black-80 mb-3">Mission</h3>
                                <p className="regular font-18 text-black-80">
                                    Our mission is to develop innovative, superior-quality products that set industry
                                    benchmarks while collaborating with customers to reduce costs and foster mutually
                                    beneficial relationships. We are committed to driving financial stability and
                                    profitability through strategic efforts and continuous improvement.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="row align-items-center d-none">
                        <div className="col-md-12 pe-md-3 pe-lg-5 order-3">
                        <div className="">
                                <h2 className="medium font-50 text-black mb-3">Quality Commitment at TRACKZER</h2>
                                <p className="regular font-18 text-black-80 mb-5">
                                    TRACKZER remains dedicated to maintaining the highest quality standards, ensuring
                                    that every solution we deliver adds value to our customers’ operations.
                                </p>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">ISO 9001:2015 Certified</h3>
                                    <p className="regular font-18 text-black-80">
                                        As an ISO 9001:2015-certified company, we adhere to globally recognized quality
                                        management standards, ensuring every product and service meets or exceeds
                                        customer expectations.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">Stringent Quality Control</h3>
                                    <p className="regular font-18 text-black-80">
                                        Our comprehensive quality control procedures ensure that every panel we
                                        manufacture is tested and inspected thoroughly to deliver exceptional
                                        performance and reliability.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">Customer Satisfaction & Repeat
                                        Business</h3>
                                    <p className="regular font-18 text-black-80">
                                        We prioritize building long-lasting relationships by delivering solutions that
                                        exceed expectations, resulting in high customer satisfaction and consistent
                                        repeat business.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">CE Marking for Customized
                                        Projects</h3>
                                    <p className="regular font-18 text-black-80">
                                        We take pride in offering CE-marked solutions for customized projects,
                                        guaranteeing compliance with European safety, health, and environmental
                                        standards.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 order-1">
                            <div className="">
                                <img src={about} alt="Description of the" className="img-fluid"/>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="p-tb-80">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">Transforming Industries for Tomorrow</h2>
                                <p className="regular font-18 text-black-80 mb-5"
                                   style={{maxWidth: '900px', margin: 'auto'}}>
                                    We provide cutting-edge automation and technology solutions across various
                                    industries, including Food & Beverages, Petroleum, Pharmaceuticals, and more. Our
                                    expertise helps optimize production, improve efficiency, and ensure sustainability
                                    in diverse sectors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="tech-details-main">
                                {techData.map((item, index) => (
                                    <div key={index} className="tech-details">
                                        <h3 className="medium font-22 text-black mb-2">{item.title}</h3>
                                        <p className="regular font-16 text-black-80">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="tech-details">
                                <img
                                    src={teamImage}
                                    alt="About Team"
                                    className="team-card-image w-100"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="p-tb-80 bg-gray-10">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">TMEIC (Toshiba Mitsubishi-Electric Industrial Systems Corporation)</h2>
                                <p className="regular font-18 text-black-80 mb-5"
                                   style={{maxWidth: '900px', margin: 'auto'}}>
                                    TMEIC specializes in the design, development, and manufacturing of high-performance substation systems that cater to the complex needs of industries globally. Their solutions focus on optimizing system performance while ensuring key benefits such as:
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    TMEIC is a global leader in delivering innovative and reliable solutions for
                                    industrial substation systems. Established through the expertise of its parent
                                    companies, Toshiba and Mitsubishi Electric, TMEIC leverages decades of technological
                                    advancement and industry experience. The company is committed to enhancing the
                                    efficiency and performance of electrical infrastructure across the globe, with a
                                    focus on sustainability and energy conservation.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    TMEIC integrates state-of-the-art technology into its substation solutions,
                                    including advanced automation, monitoring, and control systems. These systems are
                                    engineered to meet the highest industrial standards while ensuring flexibility for
                                    future needs. With a strong presence in industries like utilities, manufacturing,
                                    transportation, and oil & gas, TMEIC’s solutions are trusted for their unmatched
                                    performance and value in the most demanding environments.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="row company-vision-mission mt-5">

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    <strong>Reduced Maintenance Requirements:</strong> TMEIC’s advanced
                                    technologies reduce the frequency and cost of maintenance, ensuring a more
                                    reliable and long-lasting system.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    <strong>Space Savings:</strong> Their compact substation designs minimize
                                    space usage without compromising on performance or safety.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    <strong>Enhanced Safety:</strong> Built with the highest standards of
                                    safety, TMEIC systems are designed to protect both equipment and personnel.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    <strong>Energy Efficiency:</strong> TMEIC’s solutions contribute to
                                    significant energy savings by optimizing the performance of electrical
                                    networks.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="">
                                <p className="regular font-18 text-black-80">
                                    <strong>High Reliability:</strong> TMEIC's products and systems are known
                                    for their robustness and operational reliability, ensuring continuous,
                                    uninterrupted service.
                                </p>
                            </div>
                        </div>


                    </div>


                    <div className="row align-items-center d-none">
                        <div className="col-md-12 pe-md-3 pe-lg-5 order-3">
                            <div className="">
                                <h2 className="medium font-50 text-black mb-3">Quality Commitment at TRACKZER</h2>
                                <p className="regular font-18 text-black-80 mb-5">
                                    TRACKZER remains dedicated to maintaining the highest quality standards, ensuring
                                    that every solution we deliver adds value to our customers’ operations.
                                </p>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">ISO 9001:2015 Certified</h3>
                                    <p className="regular font-18 text-black-80">
                                        As an ISO 9001:2015-certified company, we adhere to globally recognized quality
                                        management standards, ensuring every product and service meets or exceeds
                                        customer expectations.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">Stringent Quality Control</h3>
                                    <p className="regular font-18 text-black-80">
                                        Our comprehensive quality control procedures ensure that every panel we
                                        manufacture is tested and inspected thoroughly to deliver exceptional
                                        performance and reliability.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">Customer Satisfaction & Repeat
                                        Business</h3>
                                    <p className="regular font-18 text-black-80">
                                        We prioritize building long-lasting relationships by delivering solutions that
                                        exceed expectations, resulting in high customer satisfaction and consistent
                                        repeat business.
                                    </p>
                                </div>

                                <div className="quality-section mb-4">
                                    <h3 className="medium font-30 text-black mb-2">CE Marking for Customized
                                        Projects</h3>
                                    <p className="regular font-18 text-black-80">
                                    We take pride in offering CE-marked solutions for customized projects,
                                        guaranteeing compliance with European safety, health, and environmental
                                        standards.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 order-1">
                            <div className="">
                                <img src={about} alt="Description of the" className="img-fluid"/>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <Team/>
            <Faq/>
            <Clients/>
            <Cta/>
            <Testimonials/>
        </React.Fragment>
    );
};

export default AboutUs;
