import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        id='navbar'
        className='navbar navbar-expand-lg navbar-light work-sans-font position-sticky top-0'
      >
        <div className='container'>
          <Link className='centered-logo d-none d-lg-block' href='#'>
            <img className='lusso-icon' src='/img/lusso.jpg' alt='Lusso Icon' />
          </Link>
          <div>
            <Link id='logo-mobile' href='#'>
              <img
                className='lusso-icon'
                src='/img/lusso.jpg'
                alt='Lusso Icon'
              />
            </Link>
          </div>
          <div
            id='logo-desktop'
            className='container position-absolute d-none d-lg-flex justify-content-center'
          />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' href='#'>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/products'>
                  SHOP
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#section-reminders'>
                  REMINDERS
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#hr-reminders'>
                  ABOUT US
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#hr-founder'>
                  REVIEWS
                </a>
              </li>
              <li className='nav-item d-lg-none'>
                <Link className='nav-link' href='#'>
                  <i className='ri-shopping-cart-line' />
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn search-icon' type='submit'>
                <i className='ri-search-line' />
              </button>
            </form>
            <Link
              className='text-decoration-none text-dark px-3 fw-light d-none d-lg-block'
              href='#'
            >
              <i className='ri-shopping-cart-line' />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
