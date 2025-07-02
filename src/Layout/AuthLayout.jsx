import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <nav className='w-11/12 mx-auto'>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;