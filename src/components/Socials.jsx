import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <>
      <section id='section-socials' className='container'>
        <div id='social-links'>
          <ul>
            <li>
              <Link href='https://www.facebook.com/lussoph2022' target='_blank'>
                <i className='ri-facebook-fill' />
              </Link>
            </li>
            <li>
              <Link href='https://www.facebook.com/lussoph2022' target='_blank'>
                <i className='ri-instagram-fill' />
              </Link>
            </li>
            <li>
              <Link href='https://www.facebook.com/lussoph2022' target='_blank'>
                <i className='ri-twitter-fill' />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Socials;
