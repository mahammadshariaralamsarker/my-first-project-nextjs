import React from 'react';
import Navbar from '../components/shared/Navbar';

const withCommonLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
};

export default withCommonLayout;