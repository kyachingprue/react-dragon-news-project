import React from 'react';
import textLogo from '../assets/images/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 py-5'>
      <img width={471} height={60} src={textLogo} alt="" />
      <p className='text-gray-500 text-xl'>Journalism Without Fear or Favour</p>
      <p className='text-xl text-gray-500'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;