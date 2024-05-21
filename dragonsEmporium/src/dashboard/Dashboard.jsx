import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faBoxOpen, faChartLine, faCogs, faSignOutAlt, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { salesOverviewData, salesGraphData, transactionsData, notificationsData, customersData } from './Data';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-50 w-64 bg-slate-950 border border-gray-700 rounded-xl p-4 h-full transition-transform"
      >
        <div className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button className="text-white" onClick={toggleSidebar}>
            &#x2715;
          </button>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                Users
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faBoxOpen} className="mr-3" />
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faChartLine} className="mr-3" />
                Analytics
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faCogs} className="mr-3" />
                Settings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </motion.aside>
    );
  };
  
  const Header = ({ toggleSidebar }) => {
    return (
      <header className="flex justify-between items-center py-4">
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          &#x2630;
        </button>
        <div className="text-3xl font-extrabold">Hey, Admin Name, here's a report</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Connect New Account
        </button>
      </header>
    );
  };

const SalesOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-sm text-gray-400">TODAY'S SALE</h2>
        <p className="text-2xl font-bold">{salesOverviewData.todaySales}</p>
        <p className="text-green-500">{salesOverviewData.change}</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-sm text-gray-400">TOTAL SALES</h2>
        <p className="text-2xl font-bold">{salesOverviewData.totalSales}</p>
        <p className="text-red-500">{salesOverviewData.totalSalesChange}</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-sm text-gray-400">TOTAL ORDERS</h2>
        <p className="text-2xl font-bold">{salesOverviewData.totalOrders}</p>
      </motion.div>
    </div>
  );
};

const SalesGraph = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Sales Report</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Export to CSV
        </button>
      </div>
      <Line data={salesGraphData} />
    </motion.div>
  );
};

const Transactions = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Transactions</h2>
        <button className="text-gray-400 hover:text-white">
          See all transactions
        </button>
      </div>
      <ul>
        {transactionsData.map((transaction, index) => (
          <li key={index} className="flex justify-between items-center py-4 border-b border-gray-700">
            <div className="flex items-center">
              <span className={`text-sm font-bold py-1 px-2 rounded-full mr-3 ${transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {transaction.status}
              </span>
              <div>
                <p className="text-white font-semibold">{transaction.card}</p>
                <p className="text-gray-400">{transaction.vendor}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">{transaction.amount}</p>
              <p className="text-gray-400">{transaction.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Notifications = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Recent Notifications</h2>
        <button className="text-gray-400 hover:text-white">
          See all notifications
        </button>
      </div>
      <ul>
        {notificationsData.map((notification, index) => (
          <li key={index} className="mb-4 bg-gray-700 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBell} className="text-gray-400 mr-3" />
              <div>
                <p className="text-white">{notification.message}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const NewCustomers = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">New Customers</h2>
        <button className="text-gray-400 hover:text-white">
          See all customers
        </button>
      </div>
      <ul className="space-y-4">
        {customersData.map((customer, index) => (
          <li key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
            <img src={`https://i.pravatar.cc/150?img=${index + 1}`} alt={customer.name} className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-white font-semibold">{customer.name}</p>
              <p className="text-gray-400">{customer.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 px-4  text-white min-h-screen">
          <Header toggleSidebar={toggleSidebar} />
          <SalesOverview />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <SalesGraph />
            <Notifications />
            <NewCustomers />
          </div>
          <Transactions />
        </div>
      </div>
    );
  };
  
  export default Dashboard;
