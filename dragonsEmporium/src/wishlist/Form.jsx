import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash, faCartPlus, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjk4OTQw&ixlib=rb-1.2.1&q=80&w=400',
      title: 'Smart Dumbbells',
      description: 'Set of smart dumbbells with integrated rep counter and Bluetooth connectivity.',
      price: 199.99,
      category: 'Fitness',
      reviews: 4.5,
    },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product = wishlist.find((item) => item.id === id);
    setCart([...cart, product]);
    removeFromWishlist(id);
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const emptyWishlist = () => {
    setWishlist([]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  const getTotalSavings = () => {
    // Assuming savings for each item is 10% off the original price
    return (cart.reduce((acc, item) => acc + item.price * 0.1, 0)).toFixed(2);
  };

  return (
    <div className=" text-white">
      <header className=" text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My cart and wishlist</h1>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            {wishlist.length > 0 ? wishlist.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950 border border-gray-700 p-6 mb-4 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between"
              >
                <img src={item.image} alt={item.title} className="rounded-lg w-32 h-32 object-cover mb-4 lg:mb-0 lg:mr-4" />
                <div className="flex-grow px-4">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-400 mb-2">{item.category}</p>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
                    <span>{item.reviews}</span>
                  </div>
                </div>
                <div className="text-lg font-bold text-white">${item.price.toFixed(2)}</div>
                <div className="flex flex-col items-center ml-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-red-600 hover:text-red-800 mb-2"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-green-600 hover:text-green-800"
                    onClick={() => addToCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            )) : (
              <div className="text-center p-6 bg-slate-950 border border-gray-700 rounded-lg shadow-lg">
                <FontAwesomeIcon icon={faHeart} size="3x" className="text-gray-600 mb-4" />
                <p className="text-gray-400">Your wishlist is empty.</p>
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 mt-8">Cart</h2>
            {cart.length > 0 ? cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950 border border-gray-700 p-6 mb-4 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between"
              >
                <img src={item.image} alt={item.title} className="rounded-lg w-32 h-32 object-cover mb-4 lg:mb-0 lg:mr-4" />
                <div className="flex-grow px-4">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-400 mb-2">{item.category}</p>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
                    <span>{item.reviews}</span>
                  </div>
                </div>
                <div className="text-lg font-bold text-white">${item.price.toFixed(2)}</div>
                <div className="flex flex-col items-center ml-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-red-600 hover:text-red-800 mb-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </motion.button>
                </div>
              </motion.div>
            )) : (
              <div className="text-center p-6 bg-slate-950 border border-gray-700 rounded-lg shadow-lg">
                <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-gray-600 mb-4" />
                <p className="text-gray-400">Your cart is empty.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Actions</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full mb-2 flex items-center justify-center"
                onClick={() => console.log('Add all items to cart')}
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" /> Add All Items to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
                onClick={emptyWishlist}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" /> Empty Wishlist
              </motion.button>
            </div>
            <div className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Original Price:</span>
                <span className="text-gray-200">${getTotal()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Savings:</span>
                <span className="text-green-500">-${getTotalSavings()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Total After Savings:</span>
                <span className="text-gray-200">${(getTotal() - getTotalSavings()).toFixed(2)}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full mb-2 flex items-center justify-center"
                onClick={() => console.log('Proceed to Checkout')}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Proceed to Checkout
              </motion.button>
            </div>
            <div className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Sponsored</h2>
              <img src="https://source.unsplash.com/400x300/?ad" alt="Ad" className="rounded-lg mb-4" />
              <img src="https://source.unsplash.com/400x300/?advertisement" alt="Ad" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
