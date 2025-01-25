import React from "react";

function Card({ image, title, description, price }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-amber-500 text-lg font-bold">${price}</span>
        <button className="px-4 py-2 bg-amber-500 text-gray-900 rounded-lg hover:bg-amber-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
