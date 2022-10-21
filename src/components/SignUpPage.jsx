import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <>
      <div className='login-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div>
                <div className='text-center'>
                  <img
                    className='pt-5 mt-3'
                    src='./img/lusso-nobg1.png'
                    alt='Lusso Logo'
                  />
                </div>
                <div className='pt-4 text-center'>
                  <p className='work-sans-font fs-1 fw-light'>
                    Register a New Account
                  </p>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-5'>
                    <form className='work-sans-font'>
                      <div className='form-group mt-3'>
                        <label>Full Name</label>
                        <input
                          type='text'
                          className='form-control signup-input'
                          id='name'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <label>Address</label>
                        <input
                          type='text'
                          className='form-control signup-input'
                          id='address'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <label>Email</label>
                        <input
                          type='email'
                          className='form-control signup-input'
                          id='email'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <label>Password</label>
                        <input
                          type='password'
                          className='form-control signup-input'
                          id='password'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <label>Confirm Password</label>
                        <input
                          type='password'
                          className='form-control signup-input'
                          id='password2'
                        />
                      </div>
                      <div className='form-group mt-5'>
                        <button
                          class='btn login-button work-sans-font'
                          type='submit'
                        >
                          SIGN UP
                        </button>
                      </div>
                    </form>
                    <div className='mt-5 text-center pt-5'>
                      <p className='work-sans-font text-dark'>
                        <span className='fw-light'>
                          Already have an account?
                        </span>
                        <span> </span>
                        <span>
                          <Link className='text-decoration-none login-link forgot-pw'>
                            Login Here
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
