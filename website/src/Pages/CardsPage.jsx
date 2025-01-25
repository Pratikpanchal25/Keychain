import React from "react";
import Card from "../Components/Card";

function CardsPage() {
  const products = [
    {
      id: 1,
      image: "https://source.unsplash.com/300x300/?keychain",
      title: "Custom Keychain",
      description: "High-quality personalized keychains for every occasion.",
      price: 10.99,
    },
    {
      id: 2,
      image: "https://source.unsplash.com/300x300/?design",
      title: "Designer Keychain",
      description: "Stylish and unique keychains crafted with care.",
      price: 15.99,
    },
    {
      id: 3,
      image: "https://source.unsplash.com/300x300/?craft",
      title: "Handmade Keychain",
      description: "Artisanal handmade keychains for a personal touch.",
      price: 12.99,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
