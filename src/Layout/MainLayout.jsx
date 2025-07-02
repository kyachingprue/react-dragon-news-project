import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/Layout/LeftNavbar';
import RightNavbar from '../components/Layout/RightNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='font-poppins'>
      <header>
        <Header />
      </header>
      <section className='w-11/12 mx-auto'>
        <LatestNews />
      </section>
      <nav className='w-11/12 mx-auto'>
        <Navbar />
      </nav>
      <main className='w-11/12 mx-auto grid grid-cols-12 my-10 gap-3'>
        <aside className='col-span-3'>
          <LeftNavbar />
        </aside>
        <section className='col-span-6'>
          <h1 className='text-xl font-bold pb-5'>Dragon News Home</h1>
          <div className='overflow-y-scroll'>
            <Outlet />
          </div>
        </section>
        <aside className='col-span-3'>
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;