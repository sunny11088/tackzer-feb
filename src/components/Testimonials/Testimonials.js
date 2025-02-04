import React, {useRef} from 'react';
import './Testimonials.scss';
import { Swiper,  SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation
import 'swiper/css/pagination'; // For pagination
import { Navigation } from 'swiper'; // Import Navigation module from 'swiper'

import bhasker from "../../assets/img/common/testimonial/bhasker.png";
import slnko from "../../assets/img/common/testimonial/slnko.png";
import zebron from "../../assets/img/common/testimonial/zebron.png";

const clientData = [
  {
    image: zebron,
    imageAlt: "ZEBRON",
    name: "ZEBRON SOLAR POWER SOLUTIONS",
    designation: "Project Manager",
    testimonial:
      "We are pleased to inform you that M/S Trackzer Switchgears Pvt. Ltd. has supplied multiple 33KV HT VCB Panels for our project. The panels were delivered within the agreed timeline, meeting our expectations in terms of quality and service. These panels have been operational for 18 months without any issues. We sincerely appreciate the entire Trackzer team for their unwavering support and dedication",
  },
  {
    image: bhasker,
    imageAlt: "Bhasker jyoti",
    name: "Bhaskar Jyoti India Pvt Ltd",
    designation: "CEO, Tech Solutions",
    testimonial:
      "We are pleased to share that M/S Trackzer Switchgears Pvt. Ltd. has supplied multiple 11KV HT VCB Panels for our project. The panels were delivered on time and have exceeded our expectations in quality and service. After 18 months of operation, we have encountered no problems. We extend our gratitude to the Trackzer team for their exceptional support and commitment.",
  },
  {
    image: slnko,
    imageAlt: "Slnko",
    name: "SLNKO ENERGY PRIVATE LIMITED",
    designation: "Operations Head",
    testimonial:
      "We are delighted to acknowledge that M/S Trackzer Switchgears Pvt. Ltd. provided us with various 11KV HT VCB Panels for our project. The panels were delivered punctually, maintaining superior quality and service standards. Having operated for 18 months seamlessly, we highly appreciate the dedication and support of the Trackzer team in ensuring our satisfaction.",
  }
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  return (
    <React.Fragment>
      <section className="p-tb-80">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">What Our Clients Say</h2>
                <p
                    className="regular font-18 text-black-80 mb-5"
                    style={{maxWidth: "900px", margin: "auto"}}
                >
                  Our clients trust us for delivering high-quality panels and automation solutions. Read their
                  testimonials to understand how we help optimize their operations efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 overflow-hidden">
              <div className="testimonial-slider position-relative">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={2}
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
                        slidesPerView: 2,
                        spaceBetween: 25,
                      },
                    }}
                >
                  {clientData.map((client, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-card">
                          <div className="testimonial-imgs">
                            <img
                                src={client.image}
                                alt={client.imageAlt}
                                className="testimonial-image img-fluid"
                            />
                            <div className="medium font-20 text-red mt-3">
                              {client.name}
                            </div>
                            <div className="regular font-18 text-black d-none">
                              {client.designation}
                            </div>
                          </div>

                          <div className="testimonial-details">
                            <p className="regular font-18 text-black-80">
                              {client.testimonial}
                            </p>
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

export default Testimonials;
