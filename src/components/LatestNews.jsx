import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex gap-2 px-2 bg-slate-200 justify-center items-center my-4'>
      <p className='bg-red-700 text-xl text-white py-2 px-5'>
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={90} className=' text-black py-4 '>
        <Link to="#" className='text-xl'>
          The United Nations has called for an immediate ceasefire in multiple conflict-affected regions across the globe, citing rising civilian casualties. The Secretary-General emphasized the need for diplomacy and humanitarian aid access.Apple has confirmed plans to launch its first foldable iPhone in early 2026. The tech giant says the device will feature a flexible OLED display and enhanced durability. Industry analysts believe this could reshape the smartphone market.Climate scientists warn that July 2025 may become the hottest month ever recorded. Global temperatures have spiked due to intensified greenhouse gas emissions and weakened oceanic cooling patterns like La Niña.Bangladesh secured a dramatic victory over India in the final T20 match, chasing a record 210-run target. Captain Shakib Al Hasan praised the team's fighting spirit, calling it a "moment of national pride.Stock markets around the world saw a sharp rise after reports indicated a drop in global inflation. Investors responded positively to the news, with the S&P 500 hitting an all-time high.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;