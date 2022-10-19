import { Link } from 'react-router-dom';
import CarouselProducts from './CarouselProducts';
import CarouselTestimonials from './CarouselTestimonials';
import Footer from './Footer';
import Navbar from './Navbar';
import Socials from './Socials';
import { useEffect } from 'react';
import AOS from 'aos';

const Homepage = () => {
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
      <main>
        <Socials />
        <section id='section-hero' className='section-hero'>
          <div
            className='container-fluid'
            style={{
              backgroundImage: 'url(/img/both-blur.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='container overflow-hidden'>
              <div className='row'>
                <div className='col-6 col-lg-4 offset-lg-1 d-none d-lg-flex align-items-center'>
                  <div>
                    <img className='w-100' src='./img/both.jpg' alt='Lusso' />
                  </div>
                </div>
                <div className='col-12 col-lg-7 p-0 right'>
                  <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                    <div
                      className='wrapper px-4 px-md-5 row flex-column align-items-center justify-content-around'
                      data-aos='fade-up'
                      data-aos-easing='linear'
                      data-aos-duration={1000}
                    >
                      <div className='text-lg-start'>
                        <h2 className='abril-font mb-0 fs-1'>
                          Boost your confidence.
                        </h2>
                        <h2 className='abril-font fs-1'>Enhance your mood.</h2>
                        <p className='work-sans-font mt-3 description px-md-4 ps-lg-0'>
                          The best perfume shop in the world and high quality
                          that provides various types of perfumes and clothing
                          fragrances that are perfect for you in various
                          activities and activities you are very busy.
                        </p>
                        <Link
                          className='btn button-link work-sans-font fw-light text-white text-decoration-none me-2'
                          href='#'
                        >
                          SHOP NOW
                        </Link>
                        <Link
                          className='btn button-link-2 btn-outline-dark work-sans-font text-decoration-none'
                          href='#'
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='position-relative'>
                <img
                  className='img-gold'
                  src='./img/gold.png'
                  alt='gold brushstroke'
                />
                <h1 className='lusso lusso-font'>Lusso</h1>
              </div>
            </div>
          </div>
        </section>
        <section id='section-him-her' className='container'>
          <div
            className='row flex-column flex-md-row mt-5 align-items-lg-center'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='col-md-6'>
              <div>
                <img
                  className='w-100'
                  src='./img/veralusso.jpg'
                  alt='Vera Lusso'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='work-sans-font text-center pt-3 text-md-start'>
                <h2>Special Perfume</h2>
                <h2>Just For Her</h2>
                <p className='fw-light'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis beatae a laboriosam consequuntur adipisci rem
                  eaque inventore, aperiam et dolorum.
                </p>
              </div>
            </div>
          </div>
          <div
            className='row flex-column flex-md-row-reverse mt-5 align-items-lg-center'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='col-md-6'>
              <div>
                <img
                  className='w-100'
                  src='./img/lussomaior.jpg'
                  alt='Lusso Maior'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='work-sans-font text-center pt-3 mb-5 text-md-end'>
                <h2>Special Perfume</h2>
                <h2>Just For Him</h2>
                <p className='fw-light'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, enim amet ullam ad dicta assumenda corrupti? Labore
                  amet sequi excepturi?
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <hr
            id='hr-him-her'
            className='hr-text'
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration={600}
          />
          <div className='container'>
            <div className='row'>
              <div
                className='col'
                data-aos='zoom-in'
                data-aos-easing='linear'
                data-aos-duration={600}
              >
                <div>
                  <h2 className='fs-1 work-sans-font text-center pt-5 text-uppercase fw-light'>
                    Products
                  </h2>
                </div>
                <div className='p-2'>
                  <div className='carousel'>
                    <CarouselProducts>
                      <div className='px-3'>
                        <img src='./img/amsterdam.jpg' alt='Lusso Amsterdam' />
                      </div>
                      <div className='px-3'>
                        <img src='./img/barcelona.jpg' alt='Lusso Barcelona' />
                      </div>
                      <div className='px-3'>
                        <img src='./img/paris.jpg' alt='Lusso Paris' />
                      </div>
                      <div className='px-3'>
                        <img src='./img/rome.jpg' alt='Lusso Rome' />
                      </div>
                      <div className='px-3'>
                        <img src='./img/tokyo.jpg' alt='Lusso Tokyo' />
                      </div>
                      <div className='px-3'>
                        <img src='./img/london.jpg' alt='Lusso London' />
                      </div>
                    </CarouselProducts>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id='section-reminders' className='container my-5'>
          <div className='row'>
            <div>
              <div className='position-relative'>
                <img
                  className='img-gold-reminder'
                  src='./img/gold.png'
                  alt='gold brushstroke'
                />
                <h1 className='lusso lusso-font'>Reminders</h1>
              </div>
            </div>
          </div>
          <div
            className='row'
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='col'>
              <div className='position-relative'>
                <div className='bar'>
                  <p className='mb-0 abril-font text-center py-4 px-3'>
                    Longevity
                  </p>
                </div>
                <div className='bar-2 work-sans-font fw-light text-center py-2 d-flex align-items-center'>
                  <div className='col-3'>
                    <img
                      className='tokyo-nobg'
                      src='./img/tokyo-nobg.png'
                      alt='Tokyo'
                    />
                  </div>
                  <div className='col-9'>
                    <div>
                      <p className='mb-0 p-lg-5'>
                        The longevity and sillage of a product might fluctuate
                        from one person to the next depending on genetics. A
                        perfume’s fragrance notes can be boosted or weakened by
                        many conditions. Perfume can have a completely distinct
                        scent on two different people due to the fact that we
                        are all individually unique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='col pt-lg-5'>
              <div>
                <img className='cover' src='./img/forher.png' alt='Cover' />
              </div>
              <div className='position-relative'>
                <p className='mb-0 abril-font text-center py-4 px-3 position-absolute bar-storage'>
                  Storage
                </p>
                <p className='mb-0 work-sans-font text-center py-4 px-3 p-lg-5 position-absolute bar-storage-2'>
                  Store your perfumes in a cool, dark place with a consistent
                  temperature. A drawer or cabinet in your bedroom is the ideal
                  location. If a perfume bottle is not tightly closed after each
                  use, the aroma of the perfume might alter due to oxidation. Be
                  cautious when doing so.
                </p>
              </div>
            </div>
          </div>
          <div
            className='row'
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration={1000}
          >
            <div className='col'>
              <div className='recommendation py-5 pe-3'>
                <img
                  className='paris-nobg'
                  src='./img/paris-nobg.png'
                  alt='Lusso Paris'
                />
                <p className='mb-0 text-center work-sans-font fw-light'>
                  We recommend that you spray our fragrances on materials rather
                  than skin in order to preserve the natural aroma as much as
                  possible. When applying scents to garments, keep in mind that
                  silk, suede, and leather do not mix well with perfume oils and
                  should be avoided.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <hr
            id='hr-reminders'
            className='dots'
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration={600}
          />
          <section
            id='section-founder'
            className='container'
            data-aos='zoom-in-up'
            data-aos-easing='linear'
            data-aos-duration={1500}
          >
            <div className='row'>
              <div className='col'>
                <div className='founder'>
                  <div className='bar-founder'>
                    <p className='abril-font text-center m-0'>
                      Meet our Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row flex-column-reverse flex-md-row align-items-center'>
              <div className='col col-md-5'>
                <div className='work-sans-font fw-light text-center mt-3 pt-3 pt-md-5'>
                  <h2 className='text-uppercase pb-lg-3'>Lemuel Jon Catipon</h2>
                  <p className='founder-p pt-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit accusantium cum similique culpa nam. Aliquam unde
                    dolorem maxime laborum quis. Soluta odio natus sed quam
                    reprehenderit at a maiores quas adipisci quisquam eveniet
                    facilis totam id officiis doloremque, aliquam explicabo!
                  </p>
                </div>
              </div>
              <div className='col col-md-7'>
                <div className='d-flex justify-content-end'>
                  <img
                    className='founder-img'
                    src='./img/lemuel.jpg'
                    alt='Lemuel Catipon'
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <hr
            id='hr-founder'
            className='hr-text pt-5'
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration={600}
          />
          <section
            id='section-carousel-testimonials'
            className='container pt-3 pb-3 mb-5'
          >
            <div className='row'>
              <div
                className='col'
                data-aos='zoom-in'
                data-aos-easing='linear'
                data-aos-duration={600}
              >
                <div className='text-center'>
                  <i className='ri-chat-heart-line fs-1' />
                  <h4 className='work-sans-font fw-light'>
                    Our Customers Love
                  </h4>
                  <h2 className='fs-1 work-sans-font'>What we do</h2>
                </div>
                <div className='p-2'>
                  <CarouselTestimonials className='carousel work-sans-font fw-light'>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-3'>
                      <div className='bg-light p-5 border-2 rounded-2 shadow d-flex flex-column'>
                        <div>
                          <i className='ri-account-circle-fill fs-1' />
                          <div className='d-inline-block ms-3 ms-lg-0 ms-xl-2'>
                            <h3>Anonymous</h3>
                            <p>Customer</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, illo!
                          </p>
                        </div>
                        <div>
                          <p>
                            ⭐ <span className='fw-bold'>5</span> / 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselTestimonials>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
