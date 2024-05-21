import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEdit, faList, faExclamationCircle, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Drawer from './Drawer'; // Import the reusable Drawer component
import productsData from './Products'; // Import the product data

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg min-h-[400px] hover:bg-slate-900"
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-3" />
        {title}
      </h2>
      <button className="shadow-xl shadow-indigo-700/50  border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 text-white px-4 py-2 rounded-lg" onClick={action}>
        {actionText}
      </button>
    </div>
    {products ? (
      <ul>
        {products.map(product => (
          <li key={product.id} className="py-4 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <img src={product.images[0]} alt={product.title} className="w-12 h-12 " />
              <div className="flex-1">
                <h3 className="text-white font-semibold">{product.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className=" text-xs font-medium px-2.5 py-0.5 rounded shadow-xl shadow-indigo-700/50  border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">{product.category}</span>
                  <p className="text-gray-400">${product.price}</p>
                </div>
                <p className="text-gray-400">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Sold: {product.sold}</span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Remaining: {product.remaining}</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => window.location.href = `/product/${product.id}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
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

const BestSellingProducts = ({ products }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg hover:bg-slate-800 mb-4 md:mr-4"
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Best Selling Products This Month</h2>
    <ul>
      {products.map(product => (
        <li key={product.id} className="py-6 border-b border-gray-700 flex items-center space-x-4">
          <img src={product.images[0]} alt={product.title} className="w-24 h-24 rounded-lg mr-4" />
          <div className="flex-1">
            <h3 className="text-white font-semibold text-xl">{product.title}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded shadow-xl shadow-indigo-700/50  border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">{product.category}</span>
              <p className="text-gray-400 text-lg">${product.price}</p>
            </div>
            <p className="text-gray-400 mb-2">{product.description}</p>
            <div className="flex items-center space-x-2">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Sold: {product.sold}</span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Remaining: {product.remaining}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ClicksGraph = () => {
  const data = {
    labels: productsData.map(product => product.title),
    datasets: [{
      label: 'Clicks',
      data: productsData.map(() => Math.floor(Math.random() * 1000)), // Sample data
      backgroundColor: 'rgba(48, 25, 52, 1)',
borderColor: 'rgba(48, 25, 52, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg hover:bg-slate-900 mb-4 md:ml-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Product Clicks</h2>
      <Bar data={data} options={options} />
    </motion.div>
  );
};

const ProductManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const lastProducts = productsData.slice(-4);
  const addProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));
  const removeProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));
  const modifyProducts = getPreviewProducts(productsData, 4, lastProducts.map(p => p.id));

  const bestSellingProducts = productsData.sort((a, b) => b.sold - a.sold).slice(0, 3); // Sample best-selling products

  return (
    <div className="flex">
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="flex-1 px-4 pb-4 text-white min-h-screen">
        <header className="flex items-center py-4">
          <button className="text-white" onClick={toggleDrawer}>
            &#x2630;
          </button>
          <div className="text-3xl font-extrabold ml-4">Product Management</div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <BestSellingProducts products={bestSellingProducts} />
          <ClicksGraph />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          <ProductCard
            icon={faPlus}
            title="Add Product"
            actionText="Add"
            action={() => window.location.href = '/createP.html'}
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
            action={() => window.location.href = '/shop.html'}
            products={lastProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
