import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsCardDetails = () => {
  const news = useLoaderData();
  console.log(news);
  const { _id } = useParams();
  console.log(news.data._id, _id);


  return (
    <div>
      <h2>This is News Card Details</h2>
    </div>
  );
};

export default NewsCardDetails;