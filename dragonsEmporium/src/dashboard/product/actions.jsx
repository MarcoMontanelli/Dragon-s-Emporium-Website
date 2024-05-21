import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEdit, faList, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Drawer from './Drawer'; // Import the reusable Drawer component
import productsData from './Products'; // Import the product data

const getPreviewProducts = (products, count, excludeIds = []) => {
  const filteredProducts = products.filter(product => !excludeIds.includes(product.id));
  const randomProducts = filteredProducts.sort(() => 0.5 - Math.random()).slice(0, count);
  return randomProducts.length ? randomProducts : null;
};

const ProductCard = ({ icon, title, actionText, action, products }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg min-h-[400px]"
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-3" />
        {title}
      </h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={action}>
        {actionText}
      </button>
    </div>
    {products ? (
      <ul>
        {products.map(product => (
          <li key={product.id} className="py-2 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <img src={product.images[0]} alt={product.title} className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <h3 className="text-white font-semibold">{product.title}</h3>
                <p className="text-gray-400">{product.category} - ${product.price}</p>
                <p className="text-gray-400">{product.description}</p>
                <div className="flex items-center">
                  <p className="text-gray-400 mr-2">Sold: <span className="text-green-500 font-bold">{product.sold}</span></p>
                  <p className="text-gray-400">Remaining: <span className="text-red-500 font-bold">{product.remaining}</span></p>
                </div>
              </div>
              {product.remaining === 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Sold Out</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <FontAwesomeIcon icon={faExclamationCircle} className="text-4xl mb-4" />
        <p>No entries available</p>
      </div>
    )}
  </motion.div>
);

const ProductManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const lastProducts = productsData.slice(-4);
  const addProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));
  const removeProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));
  const modifyProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));

  return (
    <div className="flex">
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="flex-1 p-4 bg-gray-900 text-white min-h-screen">
        <header className="flex  items-center py-4">
          <button className="text-white" onClick={toggleDrawer}>
            &#x2630;
          </button>
          <div className="text-3xl text-left font-extrabold">Product Management</div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <ProductCard
            icon={faPlus}
            title="Add Product"
            actionText="Add"
            action={() => alert('Add Product')}
            products={addProducts}
          />
          <ProductCard
            icon={faMinus}
            title="Remove Product"
            actionText="Remove"
            action={() => alert('Remove Product')}
            products={removeProducts}
          />
          <ProductCard
            icon={faEdit}
            title="Modify Product"
            actionText="Modify"
            action={() => alert('Modify Product')}
            products={modifyProducts}
          />
          <ProductCard
            icon={faList}
            title="View All Products"
            actionText="View"
            action={() => alert('View Products')}
            products={lastProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
