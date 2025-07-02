import React, { useState } from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news;
  const [showText, setShowText] = useState("")
  return (
    <div>
      <Link to={`/news/${_id}`}>
        <div className='border mb-5 border-gray-400 rounded-xl'>
          <div className='flex justify-between items-center px-4 rounded-t-xl bg-gray-200 py-3'>
            <div className='flex justify-center items-center gap-3'>
              <img className='w-8 h-8 rounded-full' src={author.img} alt="author images" />
              <div>
                <h2 className='font-bold'>{author.name}</h2>
                <p className='text-sm text-gray-500'>{author.published_date}</p>
              </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <CiBookmark className='text-xl' />
              <CiShare2 className='text-xl' />
            </div>
          </div>
          <div className='px-4'>
            <h2 className='text-xl font-bold py-3'>{title}</h2>
            <img className='py-4' src={image_url} alt="" />
            <div>
              <p
                className={`text-sm text-gray-600 leading-relaxed ${showText ? "" : "line-clamp-4"
                  }`}
              >
                {details}
              </p>
              {!showText && (
                <span
                  className="text-blue-500 font-semibold cursor-pointer"
                  onClick={() => setShowText(true)}
                >
                  Read more
                </span>
              )}
            </div>
            <div className='py-5 flex justify-between items-center mt-5 border-t border-gray-400'>
              <div className='flex justify-center items-center gap-2'>
                <Rating
                  initialRating={rating.number}
                  readonly
                />
                <p>{rating.number}</p>
              </div>
              <p className='flex justify-center items-center gap-3'>
                <FaEye />
                {total_view}</p>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default NewsCard;