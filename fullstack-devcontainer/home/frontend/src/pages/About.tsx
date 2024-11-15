import React from 'react';
import { Navbar } from '@/components/hero/navbar';


const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-start px-4 py-10">
        
        {/* Team Picture at the Top */}
        <div className="w-full max-w-3xl flex justify-center mb-10">
          <div className="bg-gray-300 w-full h-48 md:h-60 lg:h-72 flex items-center justify-center text-gray-700">
            Current Team Picture
          </div>
        </div>

        {/* Goals and Philosophy Section */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          
          {/* Our Goals */}
          <div className="w-full md:w-1/2 space-y-4 text-center">
            <h2 className="text-3xl font-semibold">Our Goals</h2>
            <p className="text-lg">
              Our goal is to make space accessible to people of all backgrounds and prove that anyone can be involved in space. We also wish to create a baseline design for future projects, keep both design and production simple, and open source all of our designs and procedures. Above all, we hope to inspire future generations to explore space!
            </p>
          </div>

          {/* DIY Philosophy */}
          <div className="w-full md:w-1/2 space-y-4 text-center">
            <h2 className="text-3xl font-semibold">DIY Philosophy</h2>
            <p className="text-lg">
              Do It Yourself Philosophy! Our philosophy encourages collaborative education among an all-undergraduate team, utilizes processes commonly accessible to the informed public, and minimizes cost by minimizing pre-built component use. All of our projects are student built from scratch and are designed to avoid tolerance stack-up and maintain simplicity. With our DIY Philosophy, our members have the freedom to learn and build while having fun!
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
