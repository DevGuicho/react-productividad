import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from './Footer';
import '../assets/styles/components/Layout.css';

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
