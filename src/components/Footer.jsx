import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid'>
        <div className='text-center text-lg-start'>
          <div className='container p-4'>
            <div className='row my-4'>
              <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
                <div className='d-flex align-items-center justify-content-center mb-1 mx-auto icon-footer'>
                  <img src='/img/lusso-nobg3.png' alt='Lusso Logo' />
                </div>
                <p className='text-center work-sans-font fw-light'>
                  Lusso is a perfume and lifestyle brand that is very modern.
                </p>
                <ul className='list-unstyled d-flex flex-row justify-content-center'>
                  <li>
                    <Link className='px-2' href='#!'>
                      <i className='ri-facebook-fill' />
                    </Link>
                  </li>
                  <li>
                    <Link className='px-2' href='#!'>
                      <i className='ri-instagram-fill' />
                    </Link>
                  </li>
                  <li>
                    <Link className='ps-2' href='#!'>
                      <i className='ri-twitter-fill' />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col-lg-2 col-md-6 mb-4 mb-md-0 work-sans-font text-white'>
                <h5 className='text-uppercase mb-4'>Our Products</h5>
                <ul className='list-unstyled'>
                  <li className='mb-2'>
                    <Link href='#!'>Products</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Collections</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>For Him</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>For Her</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Best Sellers</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Pricing List</Link>
                  </li>
                </ul>
              </div>
              <div className='col-lg-2 col-md-6 mb-4 mb-md-0 work-sans-font'>
                <h5 className='text-uppercase mb-4'>Maintenance</h5>
                <ul className='list-unstyled'>
                  <li className='mb-2'>
                    <Link href='#!'>Support</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Reviews</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Contact Us</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Pricing List</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className='col-lg-4 col-md-6 mb-4 mb-md-0 work-sans-font'>
                <h5 className='text-uppercase mb-4'>Services</h5>
                <ul className='list-unstyled mb-5'>
                  <li className='mb-2'>
                    <Link href='#!'>Product Update</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Shipping</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Terms & Conditions</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>FAQ's</Link>
                  </li>
                  <li className='mb-2'>
                    <Link href='#!'>Delivery & Return</Link>
                  </li>
                </ul>
                <div className='mb-4 mb-lg-0'>
                  <h5 className='text-uppercase mb-4'>Subscribe</h5>
                  <div className='mb-4 work-sans-font fw-light'>
                    <input
                      type='email'
                      className='form-control text-white fw-lighter'
                    />
                    <label className='form-label mt-2'>Email address</label>
                  </div>
                  <button
                    type='submit'
                    className='btn btn-outline-white btn-block subscribe-button'
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center p-3 copyright text-white work-sans-font fw-lighter'>
            KodeGo All Rights Reserved 2022 / Jullie Morales
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
