import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        id='navbar'
        className='navbar navbar-expand-lg navbar-light work-sans-font position-sticky top-0'
      >
        <div className='container'>
          <Link className='centered-logo d-none d-lg-block' to='/'>
            <img className='lusso-icon' src='/img/lusso.jpg' alt='Lusso Icon' />
          </Link>
          <div>
            <Link id='logo-mobile' to='/'>
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
                <a
                  href='/#section-hero'
                  className='nav-link active'
                  aria-current='page'
                >
                  HOME
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-link'>
                  SHOP
                </Link>
              </li>
              <li className='nav-item'>
                <a href='/#section-reminders' className='nav-link'>
                  REMINDERS
                </a>
              </li>
              <li className='nav-item'>
                <a href='/#hr-reminders' className='nav-link'>
                  ABOUT US
                </a>
              </li>
              <li className='nav-item'>
                <a href='/#hr-founder' className='nav-link'>
                  REVIEWS
                </a>
              </li>
              <li className='nav-item d-lg-none'>
                <Link to='/' className='nav-link'>
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
              to='/'
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
