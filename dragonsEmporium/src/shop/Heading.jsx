import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faSortAmountDown, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import GridArticle from './GridArticle';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default function ProductListHeader() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        setShowSuggestions(debouncedSearchTerm.length > 0);
    }, [debouncedSearchTerm]);

    // Sample categories, prices, and suggestions
    const categories = ["Electronics", "Books", "Clothing", "Accessories"];
    const priceRanges = ["Under $25", "$25 to $50", "$50 to $100", "Over $100"];
    const suggestions = ["iPhone 12", "Yoga Mat", "Kindle Reader"];

    function toggleDrawer() {
        console.log("Toggling Drawer: ", !isDrawerOpen);
        setIsDrawerOpen(!isDrawerOpen);
      }
    return (
        <>
            <header className="bg-gradient-to-r from-slate-950 via-gray-950 to-stone-950 text-white p-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-extrabold">Our Products</h1>
                <p className="text-gray-400 text-center mt-2">Explore our wide array of products across multiple categories.</p>

                <div className="mt-4 relative">
                    <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="pl-10 pr-4 py-2 w-full rounded-md bg-gray-700 text-white focus:bg-gray-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {showSuggestions && (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="absolute bg-gray-700 mt-12 p-4 rounded-md w-full shadow-lg z-20"
                        >
                            {suggestions.map((suggestion, index) => (
                                <div key={index} className="py-2 hover:bg-gray-600 cursor-pointer">{suggestion}</div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )}

                <div className="flex gap-4 mt-4 items-center">
                    <div className="relative">
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center" onClick={() => setCategoryOpen(!isCategoryOpen)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                            <span className="ml-2">Categories</span>
                        </button>
                        <AnimatePresence>
                            {isCategoryOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0.5 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    exit={{ opacity: 0, scaleY: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-10 w-full bg-gray-700 mt-1 rounded-md shadow-lg"
                                >
                                    {categories.map(category => (
                                        <div className="px-4 py-2 hover:bg-gray-600" key={category}>{category}</div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="relative">
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center" onClick={() => setPriceRangeOpen(!isPriceRangeOpen)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                            <span className="ml-2">Price Range</span>
                        </button>
                        <AnimatePresence>
                            {isPriceRangeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0.5 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    exit={{ opacity: 0, scaleY: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-10 w-full bg-gray-700 mt-1 rounded-md shadow-lg"
                                >
                                    {priceRanges.map(price => (
                                        <div className="px-4 py-2 hover:bg-gray-600" key={price}>{price}</div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center">
                        <FontAwesomeIcon icon={faFilter} />
                        <span className="ml-2">Filters</span>
                    </button>

                    <button onClick={toggleDrawer} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center">
                        <FontAwesomeIcon icon={faSortAmountDown} />
                        <span className="ml-2">Sort</span>
                    </button>
                </div>
            </div>
        </header>
        <GridArticle />
        </>
        
    );
}
