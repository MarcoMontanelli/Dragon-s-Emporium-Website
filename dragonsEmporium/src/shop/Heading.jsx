import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faSortAmountDown, faChevronDown, faTimes, faClose, faStar, faCamera } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import PriceRangeSlider from './PriceSlider';
import StarRating from './StarRating';
import ToggleSwitch from './ToggleSwitch';
import DropdownSelector from './DropDown';
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
    const [isSortOpen, setSortOpen] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    useEffect(() => {
        setShowSuggestions(debouncedSearchTerm.length > 0);
    }, [debouncedSearchTerm]);

    // Sample categories, prices, and suggestions
    const categories = ["Electronics", "Books", "Clothing", "Accessories"];
    const priceRanges = ["Under $25", "$25 to $50", "$50 to $100", "Over $100"];
    const suggestions = ["iPhone 12", "Yoga Mat", "Kindle Reader"];
    const sort = ["Price: highest", "Price: lowest", "Newest", "Oldest"];
    function toggleDrawer() {
        console.log("Toggling Drawer: ", !isDrawerOpen);
        setIsDrawerOpen(!isDrawerOpen);
    }
    const drawerVariants = {
        open: { x: 0 },
        closed: { x: '-100%' },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
        tap: { scale: 0.9 }
    };


    return (
        <>


            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        variants={drawerVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed left-0 top-0 w-64 md:w-80 h-full bg-gray-950 opacity-95 shadow-xl z-50 overflow-y-auto"
                    >
                        <div className="px-4 py-2 text-white">
                            <div className="flex items-center justify-between">
                                <img src="../src/assets/LDE.png" alt="Logo" className="h-8 w-auto" />
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button onClick={toggleDrawer} className="text-lg">
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <hr className="my-2 border-gray-700" />



                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-2">Price selection:</h2>
                                <PriceRangeSlider />
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-2">Color selection:</h2>

                                <div className="flex items-center space-x-2">
                                    <input type="color" id="color-picker" name="color-picker" className="w-full h-24 rounded bg-slate-900" />

                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-1">Size:</h2>
                                <label htmlFor="dimension-width" className="block text-sm font-medium text-gray-400 mb-1">Dimensions (in cm):</label>
                                <div className="flex space-x-2">
                                    <input type="number" placeholder="Width" id="dimension-width" className="w-1/2 p-1 bg-gray-700 rounded" />
                                    <input type="number" placeholder="Height" className="w-1/2 p-1 bg-gray-700 rounded" />
                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div>
                                <h2 className="block text-lg font-medium text-white mb-1">Categories:</h2>
                                <div className="space-y-2">
                                    {['Electronics', 'Books', 'Clothing', 'Accessories'].map(category => (
                                        <div key={category}>
                                            <label className="inline-flex items-center">
                                                <input type="checkbox" className="text-blue-600 form-checkbox" />
                                                <span className="ml-2 text-gray-300">{category}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="mt-4">
                                <h2 className="block text-lg font-medium text-white mb-1">Type:</h2>
                                <div className="space-y-2">
                                    {['Apple', 'Samsung', 'Google', 'Sony'].map(brand => (
                                        <div key={brand}>
                                            <label className="inline-flex items-center">
                                                <input type="checkbox" className="text-blue-600 form-checkbox" />

                                                <span className="ml-2 text-gray-300">{brand}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="mt-4">
                                <h2 className="block text-lg font-medium text-white mb-2">More filters:</h2>
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="text-blue-600 form-checkbox" />
                                            <span className="ml-2 text-gray-300">In Stock Only</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="text-blue-600 form-checkbox" />
                                            <span className="ml-2 text-gray-300">New Arrivals</span>
                                        </label>
                                    </div>
                                    

                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>
                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-2">Size:</h2>
                                <div className="flex space-x-2">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <button key={size} className="bg-gray-700 hover:bg-gray-600 text-white rounded py-1 px-2">{size}</button>
                                    ))}
                                </div>
                                <hr className="my-4 border-gray-700" />
                            </div>
                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-2">Rating:</h2>
                                <StarRating />

                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="mb-4">
                                <h2 className="block text-lg font-medium text-white mb-2">Settings:</h2>
                                <ToggleSwitch />
                                <DropdownSelector />
                                <hr className="my-4 border-gray-700" />
                            </div>

                            <div className="flex items-center justify-center">
                                <motion.button className="mr-4 shadow-xl shadow-indigo-700/50 relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">

                                        Apply Filters
                                    </span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute bg-gray-700 bg-opacity-75 mt-1 p-3 rounded-md shadow-lg z-20 w-full max-w-md" // Set max-width to match input and make background translucent
                                style={{ left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto' }} // Center align under the search bar
                            >
                                {suggestions.map((suggestion, index) => (
                                    <div key={index} className="py-2 hover:bg-gray-600 cursor-pointer">{suggestion}</div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    )}

                    <div className="flex gap-4 mt-4 items-center">
                        <div className="relative">
                            <motion.button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center" onClick={() => setCategoryOpen(!isCategoryOpen)} variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap">
                                <FontAwesomeIcon icon={faChevronDown} />
                                <span className="ml-2">Categories</span>
                            </motion.button>
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
                            <motion.button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center" onClick={() => setPriceRangeOpen(!isPriceRangeOpen)}variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap">
                                <FontAwesomeIcon icon={faChevronDown} />
                                <span className="ml-2">Price Range</span>
                            </motion.button>
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

                        <motion.button onClick={toggleDrawer} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center"variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap">
                            <FontAwesomeIcon icon={faFilter} />
                            <span className="ml-2">Filters</span>
                        </motion.button>

                        <div className="relative">
                            <motion.button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center" onClick={() => setSortOpen(!isSortOpen)} variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap">
                                <FontAwesomeIcon icon={faSortAmountDown} />
                                <span className="ml-2">Sort Items</span>
                            </motion.button>
                            <AnimatePresence>
                                {isSortOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleY: 0.5 }}
                                        animate={{ opacity: 1, scaleY: 1 }}
                                        exit={{ opacity: 0, scaleY: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-10 w-full bg-gray-700 mt-1 rounded-md shadow-lg"
                                    >
                                        {sort.map(price => (
                                            <div className="px-4 py-2 hover:bg-gray-600" key={price}>{price}</div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                    </div>
                </div>
            </header>

        </>

    );
}
