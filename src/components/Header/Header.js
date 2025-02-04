import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import caretsign from './../../assets/img/common/caret.svg';
import emailIcon from './../../assets/img/common/email.svg';
import phoneIcon from './../../assets/img/common/phone.svg';
import trackzer from './../../assets/img/common/trackzer.svg';
import facebookIcon from './../../assets/img/common/facebook.svg';
import linkedinIcon from './../../assets/img/common/linkedin.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

    // React Router's useLocation hook to detect page change
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobileView(window.innerWidth <= 991);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Reset submenu when route changes
        setOpenSubmenuIndex(null);
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [location.pathname, isMenuOpen]); // Reset when the page path or menu state changes

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle submenu on mobile and reset for other devices
    const toggleSubmenu = (index, e) => {
        if (isMobileView) e.preventDefault();
        setOpenSubmenuIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const closeAllMenus = () => {
        setOpenSubmenuIndex(null);
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className="header">
            <div className="container-fluid quick-contact-main p-0">
                <div className="container custom-container">
                    <div className="row">
                        {/* Left Column for Email and Phone */}
                        <div className="col-md-6">
                            <div className="quick-contact">
                                <div className="quick-contact-left">
                                    <ul>
                                        <li>
                                            <Link to="mailto:info@trackzer.in" className="linking font-14 medium text-white">
                                                <span className="connect-icon">
                                                    <img src={emailIcon} alt="Email" className="email-icon"/>
                                                </span>
                                                info@trackzer.in
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="tel:+919662690086" className="linking font-14 medium text-white">
                                                <span className="connect-icon">
                                                    <img src={phoneIcon} alt="Phone" className="phone-icon"/>
                                                </span>
                                                +91 96626 90086
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column for Social Media Links */}
                        <div className="col-md-6">
                            <div className="quick-contact">
                                <div className="quick-contact-right">
                                    <ul>
                                        <li>
                                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <span className="connect-icon">
                                                    <img src={facebookIcon} alt="Facebook" className="social-icon"/>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                </div>
            </div>

            <div className="container custom-container">
                <nav className="navbar-my">
                    <div className="navbar-container">
                        <div className="nav-logo">
                            <Link to="/" aria-label="Homepage" className="d-flex align-items-center">
                                <img src={trackzer} alt="Logo" className="borer" />
                            </Link>
                        </div>
                        <ul className={`navul ${isMenuOpen ? 'open' : ''}`}>
                            <li className="nav-item">
                                <NavLink to="/" end onClick={closeAllMenus} aria-label="Home"
                                         className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" onClick={closeAllMenus} aria-label="About Us"
                                         className="nav-link">About Us</NavLink>
                            </li>
                            <li className={`nav-item relative ${openSubmenuIndex === 0 ? 'hover' : ''}`}
                                onMouseEnter={() => setOpenSubmenuIndex(0)}
                                onMouseLeave={() => setOpenSubmenuIndex(null)}>
                                <NavLink to="/products" onClick={closeAllMenus} aria-label="Products"
                                         className="nav-link">Products</NavLink>
                                <span className="caret" onClick={(e) => toggleSubmenu(0, e)}>
                                    <img src={caretsign} alt="Toggle submenu" width="18" height="18"/>
                                </span>
                                <ul className={`submenu ${openSubmenuIndex === 0 ? 'open' : ''}`}>
                                    <li><Link to="/products/lt-panel" onClick={closeAllMenus}>L.T. Panel</Link></li>
                                    <li><Link to="/products/mcc-panel" onClick={closeAllMenus}>MCC Panel</Link></li>
                                    <li><Link to="/products/pdb-mldb-panel" onClick={closeAllMenus}>PDB & MLDB
                                        Panel</Link></li>
                                    <li><Link to="/products/apfc-control-panel" onClick={closeAllMenus}>APFC Control
                                        Panel</Link></li>
                                    <li><Link to="/products/synchronizing-panel" onClick={closeAllMenus}>Synchronizing
                                        Panel</Link></li>
                                    <li><Link to="/products/plc-vfd-control-panel" onClick={closeAllMenus}>PLC-Based VFD
                                        Control Panel</Link></li>
                                    <li><Link to="/products/800v-solar-panel" onClick={closeAllMenus}>800V Solar
                                        Panels</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/gallery" onClick={closeAllMenus} aria-label="Gallery" className="nav-link">Download Brochure</NavLink>
                            </li>*/}
                            <a
                                href="../../assets/trackzer-company-profile.pdf"
                                className="nav-link"
                                onClick={closeAllMenus}
                                aria-label="Download Brochure"
                                download
                            >
                                Download Brochure
                            </a>
                            <li className="nav-item">
                                <NavLink to="/contactus" onClick={closeAllMenus} aria-label="Contact Us"
                                         className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">☰</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
