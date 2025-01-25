import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-center py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://source.unsplash.com/1920x1080/?keychain')",
          }}
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-amber-500 mb-6">
            Welcome to Keychain World
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Discover premium-quality keychains crafted for every style and occasion. 
            Personalize your favorites and carry your memories everywhere.
          </p>
          <Link
            to="/products"
            className="px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-amber-500 mb-3">
              Custom Designs
            </h3>
            <p className="text-gray-400">
              Personalize your keychains to match your unique style and preferences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-amber-500 mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-400">
              Crafted with durable materials to ensure lasting beauty and functionality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-amber-500 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-400">
              Enjoy quick and reliable shipping to get your products on time.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center py-12 bg-gray-800">
        <h3 className="text-3xl font-semibold text-white mb-6">
          Ready to Get Started?
        </h3>
        <Link
          to="/products"
          className="px-6 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition"
        >
          Browse Our Collection
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
