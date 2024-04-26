/*
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/CTATerminal.css'; // Assume styles are moved to this CSS file

function CTATerminal() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(0);
    const words = ["Custom Keychains", "3D Printed Props", "3D Models", "Custom Stickers", "Patterns", "laser cut plexiglass", "guides and tutorials", "fursuits", "custom commissions"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, isDeleting]);

    const tick = () => {
        let i = loopNum % words.length;
        let fullText = words[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting) {
            setDelta(200 - Math.random() * 100);
            if (updatedText === fullText) {
                setIsDeleting(true);
                setTimeout(() => { setDelta(300); }, 500);
            }
        } else {
            setDelta(100 - Math.random() * 50);
            if (updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(0);
            }
        }
    };

    

    return (
        <div className="flex flex-col md:flex-row justify-center ">
            <section className="md:w-1/2">
                
                <div className="py-8  mx-auto max-w-screen-xl text-center lg:py-16">
                    <span className="mb-2 rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
                        Our core businesses
                    </span>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white drop-shadow-lg animate-fade-down">
                        What we offer
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        Here at Dragon's emporium we offer lots of custom made and tailored products, from laser cut keychains to 3d printed props to custom stickers and patterns.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Go shopping
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-tr from-fuchsia-600 via-purple-900 to-violet-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
            <div className="lg:w-1/2 max-w-4xl mx-auto  my-12 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow">
                <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50 md:mt-12">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="flex-grow text-center text-xs text-gray-400">Dragon's Emporium@macOS - Visual Studio Code</span>
                </div>
                <div className="p-4 text-xs text-gray-300 font-mono bg-black rounded-b-lg shadow-xl shadow-purple-700/50">
                    
                    <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~</span>$ ls</p>
                        <p><span className="text-white">file1.txt file2.txt folder1</span></p>
                        <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~</span>$ cd folder1</p>
                        <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~/folder1</span>$ cat file3.txt</p>
                        <p><span className="text-white">// HTML content here</span></p>
                        <p><span className="text-purple-400">&lt;html&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;head&gt;</span></p>
                        <p className="ml-8"><span className="text-purple-400">&lt;title&gt;</span>Our Services<span className="text-purple-400">&lt;/title&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;/head&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;body&gt;</span></p>
                        <p className="ml-8"><span className="text-purple-400">&lt;h1&gt;</span>{text}<span className="cursor">|</span><span className="text-purple-400">&lt;/h1&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;/body&gt;</span></p>
                        <p><span className="text-purple-400">&lt;/html&gt;</span></p>
                </div>
            </div>
        </div>
    );
}

export default CTATerminal;
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/CTATerminal.css';

function CTATerminal() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(0);
    const words = ["Custom Keychains", "3D Printed Props", "3D Models", "Custom Stickers", "Patterns", "laser cut plexiglass", "guides and tutorials", "fursuits", "custom commissions"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, isDeleting]);

    const tick = () => {
        let i = loopNum % words.length;
        let fullText = words[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting) {
            setDelta(200 - Math.random() * 100);
            if (updatedText === fullText) {
                setIsDeleting(true);
                setTimeout(() => { setDelta(300); }, 500);
            }
        } else {
            setDelta(100 - Math.random() * 50);
            if (updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(0);
            }
        }
    };

    const itemVariants = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.9 }
        }
    };

    const terminalVariants = {
        offscreen: { x: 300, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 30, duration: 0.5 }
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center">
            <motion.section className="md:w-1/2"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
                    <motion.div variants={itemVariants}>
                        <span className="mb-2 rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
                            Our core businesses
                        </span>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white drop-shadow-lg">
                            What we offer
                        </h1>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                            Here at Dragon's Emporium, we offer lots of custom-made and tailored products, from laser-cut keychains to 3D printed props to custom stickers and patterns.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Go shopping
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-tr from-fuchsia-600 via-purple-900 to-violet-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                            Learn more
                        </a>
                    </div>
                    </motion.div>
                </div>
            </motion.section>
            <motion.div className="lg:w-1/2 max-w-4xl mx-auto my-12 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow"
                        variants={terminalVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>
                <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50 md:mt-12">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="flex-grow text-center text-xs text-gray-400">Dragon's Emporium@macOS - Visual Studio Code</span>
                </div>
                <div className="p-4 text-xs text-gray-300 font-mono bg-black rounded-b-lg shadow-xl shadow-purple-700/50">
                    
                    <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~</span>$ ls</p>
                        <p><span className="text-white">file1.txt file2.txt folder1</span></p>
                        <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~</span>$ cd folder1</p>
                        <p><span className="text-blue-400">Dragon's Emporium@macOS</span>:<span className="text-green-400">~/folder1</span>$ cat file3.txt</p>
                        <p><span className="text-white">// HTML content here</span></p>
                        <p><span className="text-purple-400">&lt;html&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;head&gt;</span></p>
                        <p className="ml-8"><span className="text-purple-400">&lt;title&gt;</span>Our Services<span className="text-purple-400">&lt;/title&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;/head&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;body&gt;</span></p>
                        <p className="ml-8"><span className="text-purple-400">&lt;h1&gt;</span>{text}<span className="cursor">|</span><span className="text-purple-400">&lt;/h1&gt;</span></p>
                        <p className="ml-4"><span className="text-purple-400">&lt;/body&gt;</span></p>
                        <p><span className="text-purple-400">&lt;/html&gt;</span></p>
                </div>
            </motion.div>
            
        </div>
    );
}

export default CTATerminal;

