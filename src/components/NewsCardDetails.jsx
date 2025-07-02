import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import RightNavbar from './Layout/RightNavbar';
import { FaArrowLeft } from 'react-icons/fa';

const NewsCardDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <section className='col-span-9 px-4'>
          <h2 className='text-xl font-bold pb-4'>Dragon News</h2>
          <div>
            <img className='w-full' src={news.image_url} alt="" />
            <h3 className='text-xl font-bold py-5'>{news.title}</h3>
            <p className='text-gray-500 pb-5'>{news.details}</p>
            <Link to="/" className='btn btn-accent text-white'>
              <FaArrowLeft />
              All news in this category</Link>
          </div>
        </section>
        <aside className='col-span-3'>
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsCardDetails;