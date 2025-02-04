import React, {useRef} from 'react';
import './Clients.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'
import abb from "../../assets/img/common/clients/abb.png";
import adani from "../../assets/img/common/clients/adani.png";
import gift from "../../assets/img/common/clients/gift.png";
import gtu from "../../assets/img/common/clients/gtu.png";
import siemens from "../../assets/img/common/clients/siemens.png";
import tmeic from "../../assets/img/common/clients/tmeic.png";
import toyota from "../../assets/img/common/clients/toyota.png";
import bhasker from "../../assets/img/common/clients/bhasker.png";
import slnko from "../../assets/img/common/clients/slnko.png";
import zebron from "../../assets/img/common/clients/zebron.png";

// Define the JSON data directly within the component
const clientData = [
  { "image": abb, "imageAlt": "ABB Logo" },
  { "image": adani, "imageAlt": "Adani Logo" },
  { "image": gift, "imageAlt": "GIFT Logo" },
  { "image": gtu, "imageAlt": "GTU Logo" },
  { "image": siemens, "imageAlt": "Siemens Logo" },
  { "image": tmeic, "imageAlt": "TMEIC Logo" },
  { "image": toyota, "imageAlt": "Toyota Logo" },
  { "image": bhasker , "imageAlt": "Bhasker jyoti Logo" },
  { "image": slnko, "imageAlt": "Slnko Logo" },
  { "image": zebron, "imageAlt": "Zebron Logo" },
];

const Clients = () => {
    const swiperRef = useRef(null);
    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };
  return (
    <React.Fragment>
      <section className="section-clients p-tb-80 bg-gray-10">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">Our Clients</h2>
                <p
                  className="regular font-18 text-black-80 mb-5"
                  style={{ maxWidth: '900px', margin: 'auto' }}
                >
                    We serve a diverse client base across industries like manufacturing, utilities, oil & gas, and services, providing tailored power solutions to meet their unique needs.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 overflow-hidden">
                <div className="cli-slider position-relative">
                    {/*<Swiper
                        spaceBetween={30}
                        navigation={true} // Enables the default next/prev buttons
                        loop={true}
                        modules={[Navigation]}
                        autoplay={true}
                        speed={700}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.15,
                                spaceBetween: 15,
                            },
                            767: {
                                slidesPerView: 1.5, // 1.5 slides per view for mobile
                            },
                            991: {
                                slidesPerView: 4.5, // 4.5 slides per view for tablet
                            },
                            1024: {
                                slidesPerView: 7, // 6 slides per view for larger screens
                            },
                        }}
                    >*/}
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={10}
                        navigation={false} // Disable default navigation
                        loop={true}
                        modules={[Navigation]}
                        autoplay={true}
                        speed={700}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.15,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 10,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {clientData.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="client-card">
                                    <div className="client-imgs">
                                        <img
                                            src={client.image}
                                            alt={client.imageAlt}
                                            className="client-image img-fluid"
                                        />
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

export default Clients;
