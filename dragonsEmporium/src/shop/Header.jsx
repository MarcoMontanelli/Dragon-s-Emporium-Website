import React, { useState } from 'react';

const ProductHeader = ({ onSearch, onFilter, onSort }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="bg-gray-800 text-white p-4 rounded-t-lg">
            <h1 className="text-xl font-bold mb-2">Shop Our Products</h1>
            <div className="flex flex-wrap justify-between items-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 rounded-lg bg-gray-700 text-white"
                />
                <div>
                    <button onClick={() => onFilter('all')} className="mx-1 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded">All</button>
                    <button onClick={() => onFilter('electronics')} className="mx-1 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded">Electronics</button>
                    <button onClick={() => onFilter('fitness')} className="mx-1 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded">Fitness</button>
                    <select onChange={(e) => onSort(e.target.value)} className="bg-gray-700 p-2 rounded-lg">
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="newest">Newest</option>
                        <option value="popular">Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;