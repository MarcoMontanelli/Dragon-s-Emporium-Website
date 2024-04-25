import { motion } from 'framer-motion';

import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
export default function Phone() {

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
        <>


            <div className="flex flex-col md:flex-row justify-center mt-6">
            <motion.div className="lg:w-1/2   max-w-4xl mx-auto my-12 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow"
                    variants={terminalVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}>
                    <div className="hidden lg:flex"><DeviceFrameset device="iPhone X" landscape><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" class="absolute inset-0 w-full h-full z-0" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></DeviceFrameset></div>    
                    

                </motion.div>
                <motion.section className="md:w-1/2"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}>
                    <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
                        <motion.div variants={itemVariants}>
                            <span className="mb-2 rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
                                How we work
                            </span>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white drop-shadow-lg">
                                Featured video
                            </h1>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                                Do you want to know how we make our products? watch this video to find out! You should also visit our youtube channel for more
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <a href="#" className="inline-flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Youtube channel
                                    <svg className="w-5 h-5 ms-2 " aria-hidden="true" fill="white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">


                                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>

                                    </svg>

                                </a>

                            </div>
                        </motion.div>
                    </div>
                </motion.section>
                

            </div>


           
        </>

    );
}