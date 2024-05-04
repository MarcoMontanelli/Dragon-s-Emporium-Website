import React from 'react';

const AuthorBox = ({ author }) => {
    return (
        <>
            <h1 className="mt-1 text-center text-2xl font-extrabold  md:text-2xl lg:text-2xl text-white">
                    This article was brought to you by
                </h1>
            <div className=" bg-gray-800 text-white p-2 rounded-lg shadow-lg border-l-4 border-purple-400">
                <div className="flex items-center space-x-4">
                    <img src={author.avatar} alt={author.name} className="w-14 h-14 rounded-full border border-gray-700" />
                    <div>
                        <h3 className="text-lg font-bold">{author.name}</h3>
                        <p className="text-sm">{author.bio}</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AuthorBox;