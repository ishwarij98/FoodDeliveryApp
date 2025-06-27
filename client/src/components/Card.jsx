import React from 'react';

const Card = ({ name, cost, rating, imageId }) => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">Cost: {cost}</p>
        <p className="text-yellow-600 text-sm font-medium mt-1">Rating: ⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Card;
