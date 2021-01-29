import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
