import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import { useEffect } from 'react';
import AOS from 'aos';

const AllProductsPage = () => {
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
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='lusso-card my-5 text-center'>
                <img
                  src='/img/lussonobg.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Paris
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    VERA LUSSO
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ★
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-12 col-md-6 col-lg-4 col-xl-3'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='d-flex justify-content-center'>
              <div className='my-5 text-center'>
                <img
                  src='/img/lussonobg3.png'
                  className='card-img-top lusso-card-maior'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title mt-3 abril-font text-center fs-3'>
                    Aqua Di Gio
                  </h5>
                  <p className='work-sans-font text-center mt-1 mb-0'>
                    LUSSO MAIOR
                  </p>
                  <p className='card-text work-sans-font text-center fw-bold mt-2 fs-4 mb-0'>
                    ₱399.00
                  </p>
                  <p className='card-text work-sans-font text-center mt-2 fs-6'>
                    ★ ★ ★ ★ ☆
                  </p>
                  <Link
                    to='/product'
                    className='btn button-link work-sans-font fw-light text-white text-decoration-none'
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProductsPage;
