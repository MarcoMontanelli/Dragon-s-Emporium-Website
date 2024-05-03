import React from 'react';

const SocialShare = ({ url, title }) => {
    const socialMedia = [
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            icon: (
                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.7 9.18 8.6 9.88v-7h-2.6v-2.88h2.6v-2.12c0-2.58 1.54-4 3.88-4 1.1 0 2.2.2 2.2.2v2.4h-1.24c-1.24 0-1.64.74-1.64 1.5v1.8h2.8l-.4 2.88h-2.4v7c4.9-.7 8.6-4.88 8.6-9.88 0-5.53-4.5-10.02-10-10.02z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            icon: (
                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.001 10.001 0 01-3.127 1.184 4.924 4.924 0 00-8.384 4.482A13.94 13.94 0 011.64 3.162 4.822 4.822 0 003.2 9.713a4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.924 4.924 0 004.6 3.42 9.867 9.867 0 01-6.29 2.168c-.408 0-.81-.024-1.205-.072A14.028 14.028 0 006.29 21c9.141 0 14.134-7.583 14.134-14.164 0-.215-.005-.43-.015-.643A9.936 9.936 0 0024 4.59z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=${url}`,
            icon: (
                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-1 0-1.5-.6-1.5-1.5s.5-1.5 1.5-1.5 1.5 .6 1.5 1.5-.5 1.5-1.5 1.5zm12 11.5h-3v-5.5c0-1.3-.5-2.5-2.5-2.5s-3 1.2-3 2.5v5.5h-3v-10h3v1.5c1.4-2.1 5.5-2.3 6.5 0v-1.5h3v10z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <p className=" text-left text-md  text-gray-500">
                    Share the post
                </p>
            <div className="flex space-x-4 ">
                {socialMedia.map((media, index) => (
                    <a key={index} href={media.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        {media.icon}
                    </a>
                ))}
            </div>
        </>

    );
};

export default SocialShare;
