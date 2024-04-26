import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageText = () => {

    return (
        <section class="container mx-auto px-8 py-4 ">

            <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div
                    class="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
                >
                    <img
                        src="https://www.material-tailwind.com/image/blog-11.jpeg"
                        alt="bg"
                        class="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div class="absolute inset-0 bg-black/70"></div>
                    <div class="p-6 relative flex flex-col justify-end">
                        <h4
                            class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
                        >
                            Search and Discovery
                        </h4>
                        <p
                            class="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
                        >
                            Website visitors today demand a frictionless user expericence —
                            especially when using search. Because of the hight standards we tend
                            to offer.
                        </p>
                    </div>
                </div>
                <div
                    class="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
                >
                    <img
                        src="https://www.material-tailwind.com/image/blog-10.jpeg"
                        alt="bg"
                        class="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div class="absolute inset-0 bg-black/70"></div>
                    <div class="p-6 relative flex flex-col justify-end">
                        <h4
                            class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
                        >
                            Last visits in US
                        </h4>
                        <p
                            class="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
                        >
                            Wealth creation is an evolutionarily recent positive-sum game. Status
                            is an old zero-sum game. Those attacking wealth creation are often
                            just seeking status.
                        </p>
                    </div>
                </div>
                <div
                    class="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
                >
                    <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg"
                        alt="bg"
                        class="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div class="absolute inset-0 bg-black/70"></div>
                    <div class="p-6 relative flex flex-col justify-end">
                        <h4
                            class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
                        >
                            Grow in a beautiful area
                        </h4>
                        <p
                            class="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
                        >
                            Free people make free choices. Free choices mean you get unequal
                            outcomes. You can have freedom, or you can have equal outcomes. You
                            can't have both.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageText;
