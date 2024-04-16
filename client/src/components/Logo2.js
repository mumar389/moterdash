import React from 'react';
import gail from '../assets/images/gail.png';

const Logo2 = () => {
  return (
    <div >
      <img
        src={gail}
        alt="jobify"
        className="logo"
        style={{ width: '450px', height: '350px', marginLeft: 'auto', marginTop: '240px' }} // Added marginLeft: 'auto'
      />
    </div>
  );
};

export default Logo2;
