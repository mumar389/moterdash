import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/LandingPage';
import { Textfit } from 'react-textfit';
import Logo from "../components/Logo.js"
import dash from '../assets/images/dashboard.jpg';

const Landing = () => {
  const { user } = useAppContext();

  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav style={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)' }}>
          <Logo />
        </nav>
        <div className='container page' style={{ backgroundImage: `url(${dash})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className='info' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', margin: '56px' }}>
            <Textfit mode="single" max={72}>
              <h1 style={{ fontSize: '2em', marginBottom: '0.5em' }}>
              Pmsm motor dashboard for<br></br> <span style={{ color: '#4CAF50' }}>electrical vehicle</span> Monitoring
              </h1>
              <h4>
                Project under:
                IIT Kharagpur
              </h4>
            </Textfit>
            <Link to='/register' className='btn btn-hero' style={{ background: '#FF8500', color: '#fff', padding: '1em 2em', borderRadius: '5px', textDecoration: 'none', fontSize: '1.2em' }}>
              Login/Register
            </Link>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
