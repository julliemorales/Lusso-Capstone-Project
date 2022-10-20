// import { Link } from 'react-router-dom';

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
                    <form>
                      <div className='form-group mt-3'>
                        <input
                          type='text'
                          className='form-control signup-input'
                          id='name'
                          placeholder='Full Name'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <input
                          type='text'
                          className='form-control signup-input'
                          id='address'
                          placeholder='Address'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <input
                          type='email'
                          className='form-control signup-input'
                          id='email'
                          placeholder='Email'
                        />
                      </div>
                      <div className='form-group mt-3'>
                        <input
                          type='password'
                          className='form-control signup-input'
                          id='password'
                          placeholder='Password'
                        />
                      </div>
                      <div className='form-group mt-4'>
                        <button
                          class='btn login-button work-sans-font'
                          type='submit'
                        >
                          SIGN UP
                        </button>
                      </div>
                    </form>
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
