import { Link } from 'react-router-dom';

const LoginPage = () => {
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
                  <p className='work-sans-font fs-4 fw-light'>
                    Have an account?
                  </p>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-10 col-md-8 col-lg-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control login-input'
                        id='usr'
                        placeholder='Username'
                      />
                    </div>
                    <div className='form-group mt-3'>
                      <input
                        type='password'
                        className='form-control login-input'
                        id='pwd'
                        placeholder='Password'
                      />
                    </div>
                    <div className='row justify-content-between inline-block'>
                      <div className='col-5'>
                        <div className='form-check mt-3'>
                          <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                          />
                          <label
                            className='form-check-label work-sans-font fw-light'
                            htmlFor='exampleCheck1'
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className='col-5 col-xl-7 mt-3 text-end'>
                        <div>
                          <Link className='forgot-pw text-decoration-none work-sans-font login-link'>
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='form-group mt-3'>
                      <button
                        class='btn login-button work-sans-font'
                        type='submit'
                      >
                        SIGN IN
                      </button>
                    </div>
                    <div className='row mt-3'>
                      <div className='col'>
                        <div>
                          <p className='work-sans-font text-dark'>
                            Not Registered Yet?<span> </span>
                            <span>
                              <Link className='text-decoration-none login-link forgot-pw'>
                                Create an Account
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
