import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Contactus.scss';
import bgImage from '../../../src/assets/img/common/banner/contact-us.png';
import Team from '../../components/Team/Team';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import phoneicons from "../../assets/img/common/phone-red.svg";
import mailicons from "../../assets/img/common/email-red.svg";
import webIcon from "../../assets/img/common/www.svg";
import officeicons from "../../assets/img/common/office.svg";

const Contactus = () => {

    const contacts = [
        {
            name: "Prajesh Patel",
            email: "psp@trackzer.in",
            phone: "+91 9662690086",
        },
        {
            name: "Rahul Patel",
            email: "rahul@trackzer.in",
            phone: "+91 6351798021",
        },
        {
            name: "Nikul Patel",
            email: "nikul@trackzer.in",
            phone: "+91 9173741411",
        },
        {
            name: "Janak Patel",
            email: "janak@trackzer.in",
            phone: "+91 9725917445",
        },
    ];

    const bannerStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactId: '',
        productCategory: '',
        message: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the email using emailjs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                // On success, show a toast and clear the form
                toast.success('Mail Sent Successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({ firstName: '', lastName: '', email: '', contactId: '', productCategory: '', message: '' });
            }, (err) => {
                // On failure, show an error toast
                toast.error('Failed to send mail. Please try again.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <React.Fragment>
            {/* Banner Section */}
            <section className="sub-page-banner" style={bannerStyle}>
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-12 h-100">
                            <div className="banner-content h-100">
                                <h1 className="text-white inner-heading">Contact Us</h1>
                                {/*<div className="breadcrumb">
                                    <ul className="list-unstyled">
                                        <li> <Link to="/">
                                            <img src="https://via.placeholder.com/30" alt="Logo" className="breadcrumb-logo" /></Link>
                                        </li>
                                        <li>About Us</li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-main p-tb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-form-left">
                                <h2 className="medium font-50 text-black mb-3">Get in touch</h2>
                                <p className="regular font-18 text-black-80 mb-3 d-none"
                                   style={{maxWidth: '400px'}}>
                                    We are here to answer any question you may have. Feel free to reach via contact
                                    form.
                                </p>
                                <div className="address mb-4">
                                    <p className="regular font-18 text-black-80 mb-2">
                                        <span className="icon"><img src={officeicons}
                                                                    alt="office"
                                                                    width="20" height="20"
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    aria-hidden="true"/></span> Plot No.157, NK - 3
                                        Industrial Park, Near
                                        Bujrang Bakrol Village, Ahmedabad,
                                        Gujarat - 382430</p>
                                    <div className="all-partners">
                                        <div className="email"><span className="icon"><img
                                            src={mailicons}
                                            alt="Mail icon"
                                            width="18" loading="lazy"
                                            decoding="async"
                                            aria-hidden="true"/></span><a
                                                href="mailto:info@trackzer.in" className="regular font-16 text-black-80"
                                                aria-label="Send email to Prajesh Patel">info@trackzer.in</a>
                                        </div>

                                            <div className="email">
                                        <span className="icon"><img src={webIcon} alt="Website icon" width="20"
                                                                    height="20" loading="lazy" decoding="async"
                                                                    aria-hidden="true"/></span>
                                                <a href="https://www.trackzer.in"
                                                   className="regular font-16 text-black-80"
                                                   aria-label="Visit Google">www.trackzer.in</a>
                                            </div>
                                        </div>


                                </div>

                                <div className="all-partners">
                                    {contacts.map((contact, index) => (
                                            <div key={index} className="contact-info bg-gray-10">
                                                <div className="name">{contact.name}</div>
                                                <div className="email">
                                                <span className="icon"><img src={phoneicons} alt="Phone icon" width="20"
                                                                            height="20" loading="lazy" decoding="async"
                                                                            aria-hidden="true"/></span>
                                                    <a href={`mailto:${contact.email}`}
                                                       className="regular font-16 text-black-80"
                                                       aria-label={`Send email to ${contact.name}`}>
                                                        {contact.email}
                                                    </a>
                                                </div>
                                                <div className="phone">
                                                  <span className="icon"><img src={mailicons} alt="Mail icon"
                                                                              width="18" loading="lazy"
                                                                              decoding="async"
                                                                              aria-hidden="true"/></span>
                                                    <a href={`tel:${contact.phone}`}
                                                       className="regular font-16 text-black-80"
                                                       aria-label={`Call ${contact.name}`}>
                                                        {contact.phone}
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>
                        <div className="col-md-6">
                            <div className="contact-form-right">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-main mb-3">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                            required
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                        </div>

                                        <div className="col-md-6">
                                        <div className="form-main mb-3">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            required
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="form-main mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            required
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="form-main mb-3">
                                        <input
                                            type="text"
                                            name="contactId"
                                            placeholder="Mobile No"
                                            value={formData.contactId}
                                            required
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="form-main mb-3">
                                        <input
                                            type="text"
                                            name="productCategory"
                                            placeholder="Product Name"
                                            value={formData.productCategory}
                                            required
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="form-main mb-3">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            required
                                            onChange={handleChange}
                                            className="form-control message"
                                        ></textarea>
                                    </div>
                                        </div>


                                    </div>


                                   

                                    {/* Submit Button */}
                                    <button type="submit" className="btn-red d-block mx-auto">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toast Notifications Container */}
            <ToastContainer />
            <section className="section-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4395.293197030922!2d72.72725787591123!3d22.983098817798947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e63d4148bd855%3A0x9dd5fc39d6a9bc3e!2sN.K%203%20Industrial%20Park!5e1!3m2!1sen!2sin!4v1734757147999!5m2!1sen!2sin"
                                    width="100%"
                                    height="350"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="NK 3 Industrial Park Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team/>
        </React.Fragment>
    );
};

export default Contactus;
