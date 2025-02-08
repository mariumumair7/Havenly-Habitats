import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <div className="w-full bg-white py-16 flex justify-center">
      <div className="max-w-[1200px] w-full px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <a href="/next-day-delivery" className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"> 
            <Image src="/truck.png" alt="Next Day Delivery" width={48} height={48} className="mb-4" />
            <h3 className="text-lg font-medium mb-2">Next day as standard</h3>
            <p className="text-sm text-gray-600">Order before 3pm and get your order the next day as standard</p>
          </a>

          {/* Feature 2 */}
          <a href="/artisan-craftsmanship" className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"> 
            <Image src="/tick.png" alt="Made by True Artisans" width={48} height={48} className="mb-4" />
            <h3 className="text-lg font-medium mb-2">Made by true artisans</h3>
            <p className="text-sm text-gray-600">Handmade crafted goods made with real passion and craftsmanship</p>
          </a>

          {/* Feature 3 */}
          <a href="/unbeatable-prices" className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"> 
            <Image src="/buy.jpg" alt="Unbeatable Prices" width={48} height={48} className="mb-4" />
            <h3 className="text-lg font-medium mb-2">Unbeatable prices</h3>
            <p className="text-sm text-gray-600">For our materials and quality you will not find better prices anywhere</p>
          </a>

          {/* Feature 4 */}
          <a href="/recycled-packaging" className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"> 
            <Image src="/plant-32.png" alt="Recycled Packaging" width={48} height={48} className="mb-4" />
            <h3 className="text-lg font-medium mb-2">Recycled packaging</h3>
            <p className="text-sm text-gray-600">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
