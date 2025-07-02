import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <div>
        {
          news.map(singleData => <NewsCard key={singleData._id} news={singleData}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;