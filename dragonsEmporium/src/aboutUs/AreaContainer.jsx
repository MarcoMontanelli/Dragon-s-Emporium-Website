import React from 'react';
import ServiceCard from './ServiceArea';
import { faCircleInfo, faMask, faBookOpen, faPrint } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Cosplay',
    description: 'Specialized in designing and building Cosplay props and costumes.',
    image: '../src/assets/DSC00986.JPG',
    icon: faMask
  },
  {
    title: 'Fursuits',
    description: 'Custom-made fursuits including heads, tails, paws, and more.',
    image: '../src/assets/img1.JPG',
    icon: faCircleInfo
  },
  {
    title: 'Tutorials and Guides',
    description: 'Patterns, guides, and tutorials to bring your characters to life.',
    image: '../src/assets/DSC00971.JPG',
    icon: faBookOpen
  },
  {
    title: '3D Printing and Laser Cutting',
    description: 'Offering 3D printing and laser cutting services.',
    image: '../src/assets/printer.webp',  // Update image source as needed
    icon: faPrint
  }
];

const ServicesSection = () => {
  return (
    <div className=" px-5 py-10 sm:p-10">
      <section className="px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our services</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Here's a simple overview of the services we offer, you can contact us to learn more about each one.
        </p>
      </section>
      <section className="mb-6">
        <div className="mt-16 grid divide-x divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 border-2 border-slate-600 bg-gradient-to-br from-slate-700 to-slate-900">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
