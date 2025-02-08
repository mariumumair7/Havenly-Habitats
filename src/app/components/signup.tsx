'use client';

import React from 'react';

const EmailSignup = () => {
  const handleEmailSignup = () => {
    const email = "your-email@example.com"; // Replace with your email
    const subject = "Newsletter Signup";
    const body = "I would like to sign up for your newsletter."; // You can adjust the body text as needed
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="w-full h-screen bg-white flex justify-center items-center">
      {/* Outer Border (Light Grey) with 50px thickness */}
      <div className="w-full max-w-[1440px] h-[481px] border-[50px] border-[#F9F9F9] rounded-lg p-4 flex justify-center items-center">
        {/* Inner Border (White) */}
        <div className="w-full h-full border-4 border-white rounded-lg flex flex-col justify-center items-center px-4 py-8">
          <div className="text-center">
            {/* Section Title */}
            <h2 className="text-[32px] font-[Satoshi] font-medium text-[#2A254B] mb-4">
              Join the club and get the benefits
            </h2>

            <p className="text-[16px] font-[Satoshi] font-medium text-[#6B6B6B] mb-6">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
            
            {/* Email Input */}
            <div className="flex items-center justify-center w-full max-w-[600px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-[16px] font-[Satoshi] text-[#333] border border-[#B0B0B0] rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleEmailSignup}
                className="px-12 py-2 bg-[#2A254B] text-white font-[Satoshi] font-normal text-[16px] leading-[24px] rounded-r-lg"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
