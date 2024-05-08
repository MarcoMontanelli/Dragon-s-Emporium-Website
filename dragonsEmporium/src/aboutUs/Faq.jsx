import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    question: "How old do I need to be to make purchases?",
    answer: "You must show proof that you are over 18 years old for commissions. For everything else, you just need a credit card."
  },
  {
    question: "Where do you ship?",
    answer: "We ship anywhere in Europe, you can contact us if you live somewhere else to arrange shipping."
  },
  {
    question: "How long does it take to receive my products?",
    answer: "It depends on where you live and the complexity of your design. Additionally, near the holiday season, you can expect delays."
  },
  {
    question: "Can I pay in installments?",
    answer: "Unfortunately no, you can only pay full price."
  }
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ.map((item, idx) => (idx === index ? !item : item)));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 }
  };

  return (
    <motion.section
      className="relative overflow-hidden mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 max-w-[520px] text-center">
              <span className="block mb-2 text-lg font-semibold text-blue-400">FAQ</span>
              <h2 className="text-3xl font-bold text-white sm:text-[40px]">Any Questions? Look Here</h2>
              <p className="text-gray-400 mt-2">In this section, you are going to find the most asked questions we get. If you still need help, don't hesitate to contact us.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {faqs.map((faq, index) => (
            <div className="w-full px-4 lg:w-1/2" key={index}>
              <motion.div className="mb-8"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="cursor-pointer px-5 py-4 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:bg-gray-800 transition duration-300" onClick={() => toggleFAQ(index)}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                    <FontAwesomeIcon icon={openFAQ[index] ? faChevronUp : faChevronDown} className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
                <AnimatePresence>
                  {openFAQ[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-2 px-5 py-4 bg-gray-700 rounded-lg"
                    >
                      <p className="text-white opacity-80">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
