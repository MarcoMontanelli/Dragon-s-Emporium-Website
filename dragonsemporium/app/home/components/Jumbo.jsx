import Carousel from "./Carousel";
import React from 'react';
import Link from "next/link";
function importAll(r) {
  let images = [];
  r.keys().map((item) => {
    images.push(item.replace("./", ""));
  });
  return images;
}

// Import all image paths from the 'images' folder
const imagePaths = importAll(
  require.context("@/public/carousel/", false, /\.(png|jpe?g|svg|JPG)$/)
);
const slides = imagePaths.map(imagePath => "/carousel/"+`${imagePath}`);
export default function Jumbo() {
  /*const slides = [
    "images/img1.JPG",
    "images/assets/img2.JPG",
    "images/assets/img3.jpg",
    "images/assets/img4.jpg",
  ];*/
  return (
    <section class="bg-center relative">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-80">
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Your favourite place to bring your characters and creations to life.
        </h1>
        <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          Whether you have a project of your own, or something you’ve always
          wanted to have, we’re here to make that wish come true.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:grid lg:grid-cols-4 lg:gap-4 lg:space-x-0 w-full px-4 sm:px-0">
          <Link
            href="#"
            class="flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full"
          >
            Go shopping
            <svg class="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            href="#"
            class="flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full"
          >
            Our core businesses
            <svg class="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            href="#"
            class="flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full"
          >
            About us
            <svg class="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            href="#"
            class="flex shadow-xl shadow-indigo-700/50 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full"
          >
            Socials
            <svg class="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
