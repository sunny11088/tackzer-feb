import React, { useState } from 'react';
import './Products.scss';
import productImage from '../../assets/img/common/ssss.png';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  const productData = [
    {
      id: 1,
      image: productImage,
      title: 'Product 1',
      description: 'This is a short description of Product 1.',
      link: '/product-1-details',
    },
    {
      id: 2,
      image: productImage,
      title: 'Product 2',
      description: 'This is a short description of Product 2.',
      link: '/product-2-details',
    },
    {
      id: 3,
      image: productImage,
      title: 'Product 3',
      description: 'This is a short description of Product 3.',
      link: '/product-3-details',
    },
    {
      id: 4,
      image: productImage,
      title: 'Product 4',
      description: 'This is a short description of Product 4.',
      link: '/product-4-details',
    },
    {
      id: 3,
      image: productImage,
      title: 'Product 3',
      description: 'This is a short description of Product 3.',
      link: '/product-3-details',
    },
    {
      id: 4,
      image: productImage,
      title: 'Product 4',
      description: 'This is a short description of Product 4.',
      link: '/product-4-details',
    },
  ];

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 2);
  };

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
            {productData.slice(0, visibleProducts).map((product) => (
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
                      target="_blank"
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
          {visibleProducts < productData.length && (
           <div className="load-more cursor-pointer" onClick={loadMore}>View more products</div>
          )}
          </div>  
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
