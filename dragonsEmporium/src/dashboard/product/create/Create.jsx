import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faTimes, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Drawer from '../Drawer'; // Import the reusable Drawer component

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [tableHeaders, setTableHeaders] = useState(['Feature']);
  const [productData, setProductData] = useState({
    title: '',
    productId: '',
    category: '',
    brand: '',
    price: '',
    discount: '',
    shortDescription: '',
    detailedDescription: '',
    features: [['']],
    stock: '',
    availability: '',
    warehouseLocation: '',
    sizeOptions: '',
    colorOptions: '',
    materialOptions: '',
    customizableFeatures: '',
    basePrice: '',
    salePrice: '',
    taxes: '',
    shippingCosts: '',
    shippingMethods: '',
    deliveryTime: '',
    weight: '',
    dimensions: '',
    warranty: '',
    customerReviews: '',
    ratings: '',
    qna: '',
    sellerName: '',
    sellerRating: '',
    contactInfo: '',
    compliance: '',
    safetyInfo: '',
    keywords: '',
    metaTitle: '',
    metaDescription: '',
    tags: '',
    userManual: '',
    installationGuide: '',
    faq: '',
    relatedProducts: '',
    accessories: '',
    bundledProducts: '',
    testimonials: '',
    pressMentions: '',
    returnPolicy: '',
    termsConditions: '',
    privacyPolicy: '',
    productViews: '',
    salesData: '',
    conversionRates: '',
    launchDate: '',
    historicalPricing: '',
    supplierInfo: '',
    socialMediaLinks: '',
  });

  const handleFileChange = (event) => {
    setImages([...images, ...Array.from(event.target.files)]);
  };

  const handleVideoChange = (event) => {
    setVideos([...videos, ...Array.from(event.target.files)]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = (index) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleAddFeature = () => {
    setProductData({ ...productData, features: [...productData.features, ['']] });
  };

  const handleFeatureChange = (index, colIndex, value) => {
    const updatedFeatures = productData.features.map((featureRow, i) =>
      i === index ? featureRow.map((col, j) => (j === colIndex ? value : col)) : featureRow
    );
    setProductData({ ...productData, features: updatedFeatures });
  };

  const handleAddHeader = () => {
    if (tableHeaders.length < 2) {
      setTableHeaders([...tableHeaders, `Column ${tableHeaders.length + 1}`]);
      setProductData({
        ...productData,
        features: productData.features.map((featureRow) => [...featureRow, '']),
      });
    }
  };

  const handleRemoveFeatureRow = (index) => {
    setProductData({ ...productData, features: productData.features.filter((_, i) => i !== index) });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex">
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="flex-1 p-4  text-white min-h-screen">
        <motion.header
          className="flex items-center py-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="text-white" onClick={() => { }}>
            &#x2630;
          </button>
          <div className="text-3xl font-extrabold ml-4">Add a New Product</div>
        </motion.header>
        <motion.div
          className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Basic Product Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={productData.title}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="productId"
                placeholder="Product ID/SKU"
                value={productData.productId}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={productData.category}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={productData.brand}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={productData.price}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="discount"
                placeholder="Discounts/Offers"
                value={productData.discount}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h2 className="block text-lg font-medium text-white mb-2">Color selection:</h2>

              <div className="flex items-center space-x-2">
                <input type="color" id="color-picker" name="color-picker" className="w-full h-24 rounded bg-slate-900" />

              </div>
              <hr className="my-4 border-gray-700" />
            </div>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <textarea
              name="shortDescription"
              placeholder="Short Description"
              value={productData.shortDescription}
              onChange={handleInputChange}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg mt-4 w-full h-20"
            />
            <textarea
              name="detailedDescription"
              placeholder="Detailed Description"
              value={productData.detailedDescription}
              onChange={handleInputChange}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg mt-4 w-full h-32"
            />
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Product Features</h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
              onClick={handleAddHeader}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Column
            </button>
            <table className="table-auto w-full bg-gray-800 border border-gray-700 rounded-lg">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  {tableHeaders.map((header, index) => (
                    <th key={index} className="p-2">{header}</th>
                  ))}
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productData.features.map((featureRow, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-700">
                    {featureRow.map((feature, colIndex) => (
                      <td key={colIndex} className="p-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(rowIndex, colIndex, e.target.value)}
                          className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg w-full"
                        />
                      </td>
                    ))}
                    <td className="p-2">
                      <button
                        className="bg-red-600 text-white px-2 py-1 rounded-lg"
                        onClick={() => handleRemoveFeatureRow(rowIndex)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleAddFeature}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Feature Row
            </button>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
            <div className="flex items-center justify-center w-full mb-4">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl mb-4 mt-4 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 mb-4 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
              </label>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 w-full max-w-full">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden border border-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
                  <button onClick={() => handleRemoveImage(index)} className="absolute top-1 right-1 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-600">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Upload Videos</h2>
            <div className="flex items-center justify-center w-full mb-4">
              <label htmlFor="dropzone-video" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FontAwesomeIcon icon={faCloudArrowUp} className="text-4xl mb-4 mt-4 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 mb-4 dark:text-gray-400">MP4, AVI, MOV (MAX. 10MB)</p>
                </div>
                <input id="dropzone-video" type="file" className="hidden" multiple onChange={handleVideoChange} />
              </label>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 w-full max-w-full">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden border border-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <video src={URL.createObjectURL(video)} alt={`Uploaded ${index}`} className="w-full h-full object-cover" controls style={{ aspectRatio: '16/9' }} />
                  <button onClick={() => handleRemoveVideo(index)} className="absolute top-1 right-1 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-600">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
            <input
              type="text"
              name="socialMediaLinks"
              placeholder="Social Media Links (comma separated)"
              value={productData.socialMediaLinks}
              onChange={handleInputChange}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateProduct;
