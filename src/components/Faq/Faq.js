import React from 'react';
import './Faq.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
  // JSON data for FAQs
  const faqData = [
    {
      heading: "What products does Trackzer Switchgears Pvt. Ltd. manufacture?",
      content:
          "We manufacture a wide range of electrical panels, including L.T. Panel, PCC Panel, MCC Panel, APFC Panel, FSP Panel, MSP Panel, A.M.F. Panel, Change Over Panel, and Meter Panel. These panels are designed for various industrial and commercial applications. Our panels ensure safe and efficient distribution of power, meeting global standards of quality and performance.",
    },
    {
      heading: "What industries does Trackzer Switchgears Pvt. Ltd. serve?",
      content:
          "We cater to diverse industries such as manufacturing, utilities, Oil & Gas, and service industries. Our solutions are tailored to meet the unique requirements of each industry, ensuring reliable automation and control systems. We help businesses optimize their processes through automation technologies like PLC and SCADA, ensuring high productivity and safety standards.",
    },
    {
      heading: "What are the key features of your LT Panels?",
      content:
          "Our LT Panels are robust electrical distribution boards that efficiently receive power from a generator or transformer and distribute it to various electronic devices and distribution boards. These panels are built for high performance, ensuring consistent and safe power distribution. They also include features such as overload protection, easy maintenance, and scalability for future upgrades.",
    },
    {
      heading: "Do you provide industrial automation solutions?",
      content:
          "Yes, we offer turnkey industrial automation solutions based on advanced PLC and SCADA technologies. These systems enable seamless control, monitoring, and optimization of industrial processes. We specialize in integrating automation solutions that improve efficiency, reduce downtime, and enhance safety in manufacturing, utilities, and service industries.",
    },
    {
      heading: "Is Trackzer Switchgears Pvt. Ltd. ISO certified?",
      content:
          "Yes, we are an ISO 9001:2015 certified company. This certification ensures that we meet the highest standards of quality in our manufacturing processes and services. Our commitment to quality is reflected in our products, as we continuously strive to improve our systems and maintain industry-leading standards in electrical panel manufacturing and automation solutions.",
    },
    {
      heading: "Do you provide customized panels for specific requirements?",
      content:
          "Absolutely. We specialize in manufacturing customized panels designed to meet the specific needs of our clients. Whether it's a unique configuration for power distribution or automation requirements, our engineering team works closely with clients to create tailored solutions. This flexibility allows us to serve diverse industries with highly specialized electrical solutions.",
    },
    {
      heading: "What is the warranty and support offered for your products?",
      content:
          "We offer a comprehensive warranty on all our products, ensuring peace of mind for our customers. In addition to the warranty, we provide after-sales support to assist with any technical issues or inquiries. Our team is dedicated to resolving any challenges and offering guidance to ensure your systems run smoothly and efficiently throughout their lifespan.",
    },
    {
      heading: "How can I get in touch for a quote or consultation?",
      content:
          "You can contact us via our website at <a href='https://trackzer.in' target='_blank'>trackzer.in</a>, email at <a href='mailto:psp@trackzer.in'>psp@trackzer.in</a>, or phone at <a href='tel:+919662690086'>+91 96626 90086</a>. Share your project requirements, and our team will provide you with a tailored solution and quote promptly. We offer consultations to understand your needs and ensure you receive the most efficient and cost-effective solutions.",
    }
  ];

  return (
    <React.Fragment>
      <section className="p-tb-80  ">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">FAQ</h2>
                <p
                    className="regular font-18 text-black-80 mb-5"
                    style={{maxWidth: '900px', margin: 'auto'}}
                >
                  Find answers to common questions about our products, services, and solutions. Get the information you need to make informed decisions for your business.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="faq-main text-center">
                <Accordion allowZeroExpanded preExpanded={["0"]}>
                  {faqData.map((item, index) => (
                      <AccordionItem
                          key={index}
                          uuid={index.toString()} // Unique ID for each item
                          className="custom-accordion-item"
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton className="custom-accordion-button light font-18 text-black">
                            {item.heading}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p
                              className="regular font-18 text-black-80"
                              dangerouslySetInnerHTML={{__html: item.content}} // Render HTML content
                          />
                        </AccordionItemPanel>
                      </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>


        </div>
      </section>
    </React.Fragment>
  );
};

export default Faq;
