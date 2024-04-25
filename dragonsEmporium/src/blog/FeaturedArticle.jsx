import React from 'react';
import { motion } from 'framer-motion';

const FeaturedArticle = ({ category, date, title, description, content, images }) => {
    return (
        <>
            <h1 class="mb-4 mt-2 text-center text-4xl  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today's featured article</h1>
            <p class="mb-4 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Check out what we have in store for you today.</p>
            <section class="p-2 md:px-16">
                <div class="gap-16  items-center mx-auto max-w-screen-3xl lg:grid lg:grid-cols-2 lg:py-1 ">

                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <span className="inline-block px-2 py-1 bg-purple-600 text-white rounded-full text-xs font-medium tracking-wide">{category}</span>
                        <span className="text-gray-400 text-xs float-right">{date}</span>
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                        <p class="mb-4">{content}</p>
                        <hr class="border-gray-500 mb-2"></hr>
                        <p class="mb-2">{description}.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src={images[0]} alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={images[1]} alt="office content 2" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default FeaturedArticle;
