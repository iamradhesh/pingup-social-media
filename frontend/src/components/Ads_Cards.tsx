import React from 'react'
import adsImage from "../assets/adsImage.png"
const Ads_Cards = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-full h-full mt-1 ">
        {/* Ads_Cards component content goes here */}
        <img src={adsImage} alt="Advertisement" className='w-72 h-50 rounded-md top-10 left-4' />
        <div className='flex-1 text-left gap-1'>
            <h2 className="font-outfit font-normal text-xs leading-4 align-middle text-[#45556C]">Email marketing</h2>
            <p className="font-outfit font-normal text-xs leading-4 align-middle text-[#90A1B9]">Supercharge your marketing with a powerful, easy-to-use platform built for results.</p>
        </div>
        
    </div>
  )
}

export default Ads_Cards
