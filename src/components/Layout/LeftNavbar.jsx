import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import demoImg from '../../assets/images/demo-card-thumbnail.png';
import { MdOutlineDateRange } from 'react-icons/md';
import codingImg from '../../assets/images/coding-img.jpg';
import footballGround from '../../assets/images/footballImg.jpg';

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories)
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category
      ))
  }, [])

  return (
    <div>
      <h4 className='text-lg font-bold'>All Category ({categories.length}) </h4>
      <div className='flex flex-col gap-2 text-center mt-5'>
        {
          categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink>)
        }
      </div>
      <div className='flex flex-col gap-3 mt-12'>
        <div>
          <img src={demoImg} alt=" Demo Images" />
          <h3 className='text-xl font-bold py-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='justify-between flex items-center pt-3'>
            <p>Sports</p>
            <div className='flex justify-center items-center gap-3'>
              <MdOutlineDateRange />
              <p className=''>July 1, 2025</p>
            </div>
          </div>
        </div>
        <div>
          <img src={codingImg} alt=" Demo Images" />
          <h3 className='text-xl font-bold py-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='justify-between flex items-center pt-3'>
            <p>Sports</p>
            <div className='flex justify-center items-center gap-3'>
              <MdOutlineDateRange />
              <p className=''>July 1, 2025</p>
            </div>
          </div>
        </div>
        <div>
          <img src={footballGround} alt=" Demo Images" />
          <h3 className='text-xl font-bold py-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className='justify-between flex items-center pt-3'>
            <p>Sports</p>
            <div className='flex justify-center items-center gap-3'>
              <MdOutlineDateRange />
              <p className=''>July 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;