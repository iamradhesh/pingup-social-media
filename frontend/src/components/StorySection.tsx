// src/components/StorySection.tsx

import React from 'react';
// Assuming you have a placeholder image imported
import profilepic from '../assets/profilepic.jpg'; 

const StorySection = () => {
  return (
    // Outer container: w-full takes the full width of the centered FeedPage container
    <div className='w-full h-full overflow-x-auto overflow-y-hidden p-2'>
      
      {/* Inner container: flex-nowrap ensures items stay on a single line for horizontal scrolling */}
      <div className="flex gap-4 flex-nowrap">
        
        {/* Story Card 1 (Create Story) - flex-shrink-0 is crucial */}
        <div className='flex-shrink-0 w-[120px] h-[160px] rounded-lg border-2 border-dashed border-[#A3B3FF] bg-gradient-to-b from-[#EEF2FF] to-white shadow-md p-2 
                       flex flex-col justify-between items-center'>
          
          <img 
            src={profilepic}
            alt="Create Story" 
            className='h-8 w-8 rounded-full mt-1' 
          />

          <div className='w-full p-1'>
            <p className="text-sm font-medium text-center text-gray-700">
              Create Story
            </p>
          </div>
        </div>

        {/* Placeholder for other story items (Ensure there are enough to exceed screen width for scrolling) */}
        <div className='flex-shrink-0 w-[120px] h-[160px] bg-gray-300 rounded-lg shadow-md'></div>
        <div className='flex-shrink-0 w-[120px] h-[160px] bg-gray-300 rounded-lg shadow-md'></div>
        <div className='flex-shrink-0 w-[120px] h-[160px] bg-gray-300 rounded-lg shadow-md'></div>
        <div className='flex-shrink-0 w-[120px] h-[160px] bg-gray-300 rounded-lg shadow-md'></div>
        <div className='flex-shrink-0 w-[120px] h-[160px] bg-gray-300 rounded-lg shadow-md'></div>

      </div>
    </div>
  );
};

export default StorySection;