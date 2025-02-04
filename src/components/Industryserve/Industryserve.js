import React, { useRef } from "react";
import './Industryserve.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import ind from "../../assets/img/common/industry/oil.png";

import energy from "../../assets/img/common/industry/energy.png";
import cement from "../../assets/img/common/industry/cement.png";
import food from "../../assets/img/common/industry/food.png";
import oil from "../../assets/img/common/industry/oil.png";
import steel from "../../assets/img/common/industry/steel.png";
import petroleum from "../../assets/img/common/industry/petrol.png";
import pharmaceuticals from "../../assets/img/common/industry/pharma.png";
import automobiles from "../../assets/img/common/industry/automobile.png";
import polyester from "../../assets/img/common/industry/polyster.png";


const industryData = [
    {
        "title": "Food and Beverages",
        "image": food,
        "imageAlt": "Food and Beverages"
    },
    {
        "title": "Petroleum",
        "image": petroleum,
        "imageAlt": "Petroleum"
    },
    {
        "title": "Pharmaceuticals",
        "image": pharmaceuticals,
        "imageAlt": "Pharmaceuticals"
    },
    {
        "title": "Automobiles",
        "image": automobiles,
        "imageAlt": "Automobiles"
    },
    {
        "title": "Oil Refinery",
        "image": oil,
        "imageAlt": "Oil Refinery"
    },
    {
        "title": "Polyester Plant",
        "image": polyester,
        "imageAlt": "Polyester Plant"
    },
    {
        "title": "Energy",
        "image": energy,
        "imageAlt": "Energy"
    },
    {
        "title": "Steel Industry",
        "image": steel,
        "imageAlt": "Steel Industry"
    },
    {
        "title": "Cement Plant",
        "image": cement,
        "imageAlt": "Cement Plant"
    }
];

const Industryserve = () => {
    const swiperRef = useRef(null);
    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <React.Fragment>
            <section className="p-tb-80 bg-gray-10">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="common-center-headings text-center">
                                <h2 className="medium font-50 text-black mb-3">Industries We Serve</h2>
                                <p className="regular font-18 text-black-80 mb-5"
                                   style={{maxWidth: '900px', margin: 'auto'}}>
                                    Trackzer Switchgears Pvt. Ltd. serves industries like manufacturing, utilities, oil & gas, and services, providing reliable power panels and industrial automation solutions for optimal efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid custom-ind-slider">
                    <div className="row">
                        <div className="col-md-12 overflow-hidden">
                            <div className="industry-slider position-relative">
                                <Swiper
                                    id={`industry-swiper-${Math.random().toString(36).substr(2, 9)}`} // Generate unique ID
                                    spaceBetween={30}
                                    // slidesPerView={0}
                                    navigation={false} // Disable default navigation
                                    loop={true}
                                    modules={[Navigation]}
                                    autoplay={true}
                                    speed={700}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1.5,
                                        },
                                        768: {
                                            slidesPerView: 1.5,
                                        },
                                        991: {
                                            slidesPerView: 4.5,
                                        },
                                    }}
                                    ref={swiperRef}
                                >
                                    {industryData.map((industry, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="industry-card">
                                                <div className="industry-thumbnail-main">
                                                    <img
                                                        src={industry.image}
                                                        alt={industry.imageAlt}
                                                        className="industry-thumbnail img-fluid"
                                                    />
                                                </div>
                                                <div className="ind-details">
                                                    <h3 className="industry-name font-22">{industry.title}</h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="custom-swipers-buttons">
                                    <div className="custom-prev" onClick={handlePrev}>
                                        <button className="prev-button"><i className="fas fa-arrow-left"></i></button>
                                    </div>
                                    <div className="custom-next" onClick={handleNext}>
                                        <button className="next-button"><i className="fas fa-arrow-right"></i></button>
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

export default Industryserve;
