import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-12 md:grid-cols-10 lg:grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-start-2 lg:col-span-10 text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-[#405B6F] mb-6">
              Site Under Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We&#39;re currently updating our website to bring you an even better experience.
              Please check back soon.
            </p>
            <div className="w-24 h-24 mx-auto mb-8">
              <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#B39852]"></div>
            </div>
            <p className="text-lg text-gray-500">
              Expected completion: Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
