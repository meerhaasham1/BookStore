import React from 'react';

const Cards = ({ item }) => {
  if (!item) {
    console.error('Item is undefined or null');
    return null;
  }

  const { image, title, price, description } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl transition-transform duration-300 transform hover:scale-105 dark:bg-slate-900 dark:text-white dark:border ">
      <figure>
        <img src={image} alt={title || 'Image'} className="w-full h-64 object-cover" /> {/* Ensures consistent image size */}
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">
          {title || 'No Title'}
          <div className="badge badge-secondary ml-2">NEW</div>
        </h2>
        <p className="mt-2 text-gray-600">{description || 'No Description'}</p>
        <div className="card-actions mt-4 flex justify-between items-center">
          <div className="badge badge-outline">${price || '0'}</div>
          <div className="cursor-pointer px-4 py-2 rounded-full border-[2px] border-pink-500 hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
