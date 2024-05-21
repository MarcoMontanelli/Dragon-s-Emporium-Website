import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faTimes, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Drawer from '../Drawer'; // Import the reusable Drawer component

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [tableHeaders, setTableHeaders] = useState(['Feature']);
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    stock: '',
    sku: '',
    tags: '',
    features: [['']]
  });

  const handleFileChange = (event) => {
    setImages([...images, ...Array.from(event.target.files)]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
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
      i === index ? featureRow.map((col, j) => j === colIndex ? value : col) : featureRow
    );
    setProductData({ ...productData, features: updatedFeatures });
  };

  const handleAddHeader = () => {
    if (tableHeaders.length < 2) {
      setTableHeaders([...tableHeaders, `Column ${tableHeaders.length + 1}`]);
      setProductData({ 
        ...productData, 
        features: productData.features.map(featureRow => [...featureRow, ''])
      });
    }
  };

  const handleRemoveFeatureRow = (index) => {
    setProductData({ ...productData, features: productData.features.filter((_, i) => i !== index) });
  };

  return (
    <div className="flex">
      <Drawer isOpen={false} toggleDrawer={() => {}} />
      <div className="flex-1 p-4 bg-gray-900 text-white min-h-screen">
        <header className="flex items-center py-4">
          <button className="text-white" onClick={() => {}}>
            &#x2630;
          </button>
          <div className="text-3xl font-extrabold ml-4">Add a New Product</div>
        </header>
        <div className="bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
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
                name="category"
                placeholder="Category"
                value={productData.category}
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
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                value={productData.stock}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={productData.sku}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma separated)"
                value={productData.tags}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg"
              />
            </div>
            <textarea
              name="description"
              placeholder="Product Description"
              value={productData.description}
              onChange={handleInputChange}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded-lg mt-4 w-full h-32"
            />
          </div>
          <div className="mb-6">
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
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
            <div className="flex items-center justify-center w-full mb-4">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
