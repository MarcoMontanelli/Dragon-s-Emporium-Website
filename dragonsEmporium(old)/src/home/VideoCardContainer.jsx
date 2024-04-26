import VideoCard from './VideoCard.jsx';

const VideoCardContainer = ({ cards }) => {
    return (
        <div className="px-4 text-center">
            <div className="mb-4">
            <span className="rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
                               Other videos
                            </span>
            </div>
            
            <div className="mx-auto max-w-8xl md:mx-20">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, index) => (
                        <VideoCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoCardContainer;
