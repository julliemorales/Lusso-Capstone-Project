import Footer from './Footer';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import { getSingleProduct } from '../service/api';
import Socials from './Socials';
import ReactStars from 'react-stars';

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const imageMap = {
    '/public/image1.jpg': 'lussonobg3.png',
    '/public/image2.jpg': 'lussonobg.png',
    '/public/image3.jpg': 'lussonobg2.png',
  };

  const { id } = useParams();
  const { name, description, price, brand, rating, category, image } = product;

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
    const getProduct = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        const result = await getSingleProduct(id);
        setProduct(result.data);
        setIsLoading(false);
      }, 500);
    };
    getProduct();
  }, [id]);
  return (
    <>
      <Navbar />
      <Socials />
      <div className='container my-5 py-5'>
        <div className='row'>
          {product && !isLoading && (
            <>
              <div
                className='col-12 col-md-7'
                data-aos='fade-right'
                data-aos-easing='linear'
                data-aos-duration={1000}
              >
                <div className='product-img-bg text-center py-5 mx-auto'>
                  <img
                    className='product-img'
                    src={`/img/${imageMap[image]}`}
                    alt='lusso'
                  />
                </div>
              </div>
              <div
                className='col-12 col-md-5'
                data-aos='fade-left'
                data-aos-easing='linear'
                data-aos-duration={1000}
              >
                <div className='abril-font display-2 text-center mt-3'>
                  <p className='mb-0 text-uppercase'>{name}</p>
                </div>
                <div className='work-sans-font fs-2 text-center fw-light'>
                  <p className='mb-0'>
                    {brand} (For {category})
                  </p>
                </div>
                <div className='work-sans-font fs-3 text-center fw-light'>
                  <p className='mb-0'>50ml</p>
                </div>
                <div className='work-sans-font fs-4 text-center fw-light mt-2'>
                  <div className='card-text work-sans-font text-center'>
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
                </div>
                <div className='hr-line my-3'></div>
                <div className='work-sans-font fs-5 fw-light text-center text-md-start mt-4'>
                  <p>{description}</p>
                </div>
                <div className='work-sans-font fs-5 fw-light text-start mt-4'>
                  <p>
                    Price:
                    <span className='fw-bold fs-3'> ₱{price}.00</span>
                  </p>
                </div>
                <div className='text-center text-md-start'>
                  <Link
                    className='btn button-cart work-sans-font fw-light text-white text-decoration-none mt-3 mb-5'
                    href='#'
                  >
                    ADD TO CART
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
