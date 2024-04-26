import { motion } from 'framer-motion';

const VideoCard = ({ iframeSrc }) => {
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 50, damping: 10, mass: 0.75 },
            animation: { y: [0, -10, 0, -5, 0], transition: { delay: 0.2, duration: 0.8 } }
        }
    };

    return (
        <motion.div
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-indigo-700/50"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
        >
            <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50">
                <span className="flex-grow text-center text-xs text-gray-400">Dragon's Emporium@macOS {iframeSrc}</span>
            </div>
            <iframe
                src={iframeSrc}
                frameBorder="0"
                style={{ width: '100%', height: '300px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded content"
            ></iframe>
        </motion.div>
    );
};

export default VideoCard;
