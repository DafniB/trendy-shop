import React from 'react';
import { motion } from 'framer-motion';

const categories = {
  Clothing: [
    { id: 1, name: 'T-shirt', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jeans', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jacket', price: '$60', image: 'https://via.placeholder.com/150' },
  ],
  Footwear: [
    { id: 4, name: 'Sneakers', price: '$50', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Boots', price: '$80', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Sandals', price: '$25', image: 'https://via.placeholder.com/150' },
  ],
  Accessories: [
    { id: 7, name: 'Watch', price: '$100', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Sunglasses', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Backpack', price: '$45', image: 'https://via.placeholder.com/150' },
  ],
};

export default function ShoppingPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200 p-8 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-10 text-gray-800"
      >
        Trendy Shop
      </motion.h1>

      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map(product => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
