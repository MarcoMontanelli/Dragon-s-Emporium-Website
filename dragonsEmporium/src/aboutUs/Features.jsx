import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHeadphones, faMoneyBillWave, faPenFancy, faRecycle, faSheetPlastic } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
  return (
    <section className="text-center px-6 mt-4 mb-8">
      <div className="mx-auto rounded-lg shadow-lg bg-gray-900 shadow-purple-700/50 border border-gray-700"
       >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
            <h2 className="mb-6 pb-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mb-6 pb-2 text-lg text-neutral-200 font-semibold sm:text-2xl">
              We offer durable and high quality products, excellent customer support, and we are generally cheaper than our competition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-800 text-gray-400 lg:h-12 lg:w-12 ">
                  <FontAwesomeIcon icon={feature.icon} size="2x" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  { title: "Customer Support", icon: faHeadphones, description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan." },
  { title: "High quality materials", icon: faRecycle, description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you." },
  { title: "Low prices", icon: faMoneyBillWave, description: "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started." },
  { title: "Custom designs", icon: faPenFancy, description: "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting." },
  { title: "Commissions", icon: faSheetPlastic, description: "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration." },
  { title: "Easy to use", icon: faCheckCircle, description: "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual." }
];

export default WhyUs;
