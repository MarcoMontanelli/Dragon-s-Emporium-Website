// src/components/FAQ.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { question: "What is Flowbite?", answer: "Flowbite is a library of interactive components built on top of Tailwind CSS." },
    { question: "How do I use Flowbite?", answer: "You can use Flowbite by including it in your project and using its components." },
    { question: "Is Flowbite free to use?", answer: "Yes, Flowbite is open source and free to use in your projects." }
];

function FAQ() {
    const [expanded, setExpanded] = useState(null);

    const toggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <>
            <div>
                <h1 className=" text-center text-2xl font-extrabold  md:text-2xl lg:text-2xl text-white">
                    FAQ
                </h1>
                <p className=" text-center text-md  text-gray-500">
                    The most asked questions about this post
                </p>
            </div>

            <div className="p-1">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between items-center w-full p-3 text-white text-md font-bold bg-slate-900 rounded-lg hover:bg-slate-800 border-gray-600"
                        >
                            <span>{faq.question}</span>
                            <svg className="w-6 h-6 fill-current text-gray-300" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                            </svg>
                        </button>
                        <AnimatePresence>
                            {expanded === index && (
                                <motion.div
                                    initial={{ opacity: 0, maxHeight: 0 }}
                                    animate={{ opacity: 1, maxHeight: 500 }} // Assuming the content won't exceed 500px in height
                                    exit={{ opacity: 0, maxHeight: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden p-3 mt-2 bg-slate-800 rounded-lg"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FAQ;
