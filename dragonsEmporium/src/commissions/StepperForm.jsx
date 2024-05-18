import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImage, faEnvelope, faArrowRight, faArrowLeft, faCloudArrowUp, faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Define the step components first
const PersonalInfoStep = () => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-4">Let's start by gathering your info</h2>
    <p className="mb-6 text-white">This step is mandatory, we need your information so we can get in touch with you</p>
    <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 text-white" />
    <input type="text" placeholder="Surname" className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 text-white" />
    <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 text-white" />
    <input type="tel" placeholder="Phone Number" className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 text-white" />
  </div>
);

const ReferenceImageStep = ({ images, setImages }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(prevImages => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Upload images</h2>
      <p className="mb-6 text-white">This step is mandatory, you should upload a reference sheet for your character or an image that represents it</p>
      <div className="flex items-center justify-center w-full mb-4">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
  );
};

const MessageStep = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-white">Write a message</h2>
    <p className="mb-6 text-white">This step is mandatory. Write a message with your request</p>
    <textarea placeholder="Your Message" className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 h-32 text-white"></textarea>
  </div>
);

// Then define the steps array
const steps = [
  { title: 'Personal Info', icon: faUser, component: PersonalInfoStep },
  { title: 'Details and files', icon: faImage, component: ReferenceImageStep },
  { title: 'Message', icon: faEnvelope, component: MessageStep },
];

const StepperForm = ({ commission }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,blur')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl w-full mx-auto">
        <div className="w-full mb-8 lg:mb-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-center text-white mb-1">Provide the details needed to commission your item</h1>
          </div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full bg-slate-900 border border-gray-600 rounded-lg p-8">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-col gap-4">
                <img src="../src/assets/LD.png" alt="Logo" className="h-12 mb-4" />
                <h1 className="text-3xl font-bold text-center text-white mb-6">Commission request form</h1>
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${index <= currentStep ? 'text-blue-500' : 'text-gray-500'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="text-2xl mr-2" />
                    <span>{step.title}</span>
                  </motion.div>
                ))}
                <div className="flex items-center justify-center"><motion.button
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 mt-4 bg-blue-600 rounded-lg text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> Help
                </motion.button></div>
                
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 w-full">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 rounded-lg shadow-lg p-8 border border-gray-600 h-full"
              >
                <h1 className="text-3xl font-bold mb-6 text-white">{commission.title}</h1>
                <CurrentStepComponent images={images} setImages={setImages} />
                <div className="flex justify-between mt-6">
                  {currentStep > 0 && (
                    <motion.button
                      onClick={handlePrevious}
                      className="px-4 py-2 bg-gray-700 rounded-lg text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Previous
                    </motion.button>
                  )}
                  {currentStep < steps.length - 1 ? (
                    <motion.button
                      onClick={handleNext}
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white ml-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </motion.button>
                  ) : (
                    <motion.button
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white ml-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
  {showModal && (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-slate-950 rounded-lg shadow-lg p-8 max-w-2xl w-full border border-gray-700 text-white mx-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">How to commission an item</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <hr className="my-4" />
        <div className="mb-6">
          <p className="text-lg">To commission an item, please follow these steps:</p>
          <ul className="list-none mt-4 space-y-4">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faUser} className="text-blue-500 text-xl mr-4" />
              <div>
                <p className="font-semibold text-lg">Step 1: Provide your personal information</p>
                <p>Fill out your name, email, and contact details so we can get in touch with you.</p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faImage} className="text-blue-500 text-xl mr-4" />
              <div>
                <p className="font-semibold text-lg">Step 2: Upload reference images</p>
                <p>Upload any reference images or files that are necessary for your commission.</p>
              </div>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-xl mr-4" />
              <div>
                <p className="font-semibold text-lg">Step 3: Write a detailed message</p>
                <p>Describe your request in detail so we understand exactly what you need.</p>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  );
};

export default StepperForm;
