import Footer from './Footer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import AOS from 'aos';
import { getAllProducts } from '../service/api';
import ReactStars from 'react-stars';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageMap = {
    '/public/image1.jpg': 'lussonobg3.png',
    '/public/image2.jpg': 'lussonobg.png',
    '/public/image3.jpg': 'lussonobg2.png',
  };

  useEffect(() => {
    document.title = 'Lusso | Products';
    AOS.init();
    const nav = document.getElementById('navbar');
    window.onscroll = function () {
      nav.style.boxShadow = 'none';
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        nav.style.boxShadow =
          '0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%)';
    };
    const getProductsList = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        const result = await getAllProducts();
        setProducts(result.data);
        setIsLoading(false);
      }, 500);
    };
    getProductsList();
  }, []);
  return (
    <>
      <Navbar />
      <Socials />
      <div className='container-fluid mt-4'>
        <div className='row lusso-products'>
          <div className='col'>
            <div
              className='text-center'
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration={1000}
            >
              <p className='text-white work-sans-font fw-light fs-1 pt-3 mb-0'>
                VERA LUSSO
              </p>
              <p className='text-white work-sans-font fw-light fs-3'>
                (For Her)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {products &&
            !isLoading &&
            products.map((product, index) => {
              const { _id, name, price, brand, rating, category, image } =
                product;
              if (category === 'men') return null;
              return (
                <div
                  className='col-12 col-md-6 col-lg-4 col-xl-3'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration={1000}
                  key={index}
                >
                  <div className='d-flex justify-content-center'>
                    <div className='lusso-card my-5 text-center'>
                      <img
                        // src='/img/lussonobg.png'
                        src={`/img/${imageMap[image]}`}
                        className='card-img-top'
                        alt='...'
                      />
                      <div className='card-body'>
                        <h5 className='card-title mt-3 abril-font text-center fs-3'>
                          {name}
                        </h5>
                        <p className='work-sans-font text-center mt-1 mb-0 text-uppercase'>
                          {brand}
                        </p>
                        <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                          ₱{price}.00
                        </p>
                        <div className='card-text work-sans-font text-center mt-2 fs-6'>
                          <ReactStars
                            className='d-flex justify-content-center'
                            count={5}
                            value={rating}
                            half={true}
                            edit={false}
                            size={24}
                            color2={'#000'}
                            color1={'#808080'}
                          />
                        </div>
                        <Link
                          to={`/product/${_id}`}
                          className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                        >
                          SEE MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className='container-fluid mt-4'>
        <div className='row lusso-products'>
          <div className='col'>
            <div className='text-center'>
              <p className='text-white work-sans-font fw-light fs-1 pt-3 mb-0'>
                LUSSO MAIOR
              </p>
              <p className='text-white work-sans-font fw-light fs-3'>
                (For Him)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {products &&
            !isLoading &&
            products.map((product, index) => {
              const { _id, name, price, brand, rating, category, image } =
                product;
              if (category === 'women') return null;
              return (
                <div
                  className='col-12 col-md-6 col-lg-4 col-xl-3'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration={1000}
                  key={index}
                >
                  <div className='d-flex justify-content-center'>
                    <div className='lusso-card my-5 text-center'>
                      <img
                        src={`/img/${imageMap[image]}`}
                        className='card-img-top lusso-card-maior'
                        alt='...'
                      />
                      <div className='card-body'>
                        <h5 className='card-title mt-3 abril-font text-center fs-3'>
                          {name}
                        </h5>
                        <p className='work-sans-font text-center mt-1 mb-0 text-uppercase'>
                          {brand}
                        </p>
                        <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                          ₱{price}.00
                        </p>
                        <div className='card-text work-sans-font text-center mt-2 fs-6'>
                          <ReactStars
                            className='d-flex justify-content-center'
                            count={5}
                            value={rating}
                            half={true}
                            edit={false}
                            size={24}
                            color2={'#000'}
                            color1={'#808080'}
                          />
                        </div>
                        <Link
                          to={`/product/${_id}`}
                          className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                        >
                          SEE MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProductsPage;
