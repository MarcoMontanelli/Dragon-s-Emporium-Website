import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
    const { image, category, title, rating, description, price } = product;

    // Generate star ratings
    const starRating = Array(5).fill().map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className={i < rating ? "text-yellow-500" : "text-gray-400"} />
    ));

    return (
        <div className="bg-gray-900 text-white p-4 flex rounded-lg shadow-lg">
            <img src={image} alt={title} className="w-1/3 rounded-lg aspect-video mr-4" />
            <div className="flex flex-col justify-between w-2/3">
                <div>
                    <span className="text-sm bg-purple-600 px-2 py-1 rounded text-white">{category}</span>
                    <h2 className="text-xl font-bold mt-2 mb-1">{title}</h2>
                    <hr className="border-gray-700" />
                    <div className="flex mt-2">
                        {starRating}
                    </div>
                    <p className="text-sm md:text-base text-gray-400 mt-2">{description}</p>
                </div>
                <div className="mt-auto">
                    <p className="text-lg font-bold">{price}</p>
                    <div className="flex space-x-2 mt-4">
                        <button className="bg-purple-600 hover:bg-purple-700 flex items-center px-4 py-2 rounded transition duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Add to Cart
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-800 flex items-center px-4 py-2 rounded transition duration-300 ease-in-out">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" /> View Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
