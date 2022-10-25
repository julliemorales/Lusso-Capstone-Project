import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const SingleProductPage = () => {
  useEffect(() => {
    document.title = 'Lusso | Eau De Parfum';
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
  }, []);
  return (
    <>
      <Navbar />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div
            className='col-12 col-md-7'
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='product-img-bg text-center py-5 mx-auto'>
              <img
                className='product-img'
                src='/img/lussonobg.png'
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
              <p className='mb-0 text-uppercase'>Paris</p>
            </div>
            <div className='work-sans-font fs-2 text-center fw-light'>
              <p className='mb-0'>Vera Lusso (For Her)</p>
            </div>
            <div className='work-sans-font fs-3 text-center fw-light'>
              <p className='mb-0'>50ml</p>
            </div>
            <div className='work-sans-font fs-4 text-center fw-light mt-2'>
              <p className='card-text work-sans-font text-center'>★ ★ ★ ★ ★</p>
            </div>
            <div className='hr-line my-3'></div>
            <div className='work-sans-font fs-5 fw-light text-center text-md-start mt-4'>
              <p>
                Vanilla and sweet Irish flower notes. Joyous femininity is
                expressed through this energizing women’s perfume.
              </p>
            </div>
            <div className='work-sans-font fs-5 fw-light text-start mt-4'>
              <p>
                Price: <span className='fw-bold fs-3'> ₱399.00</span>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
