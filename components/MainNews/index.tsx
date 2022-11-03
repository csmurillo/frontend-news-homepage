import React, { useState } from 'react';
import Image from 'next/image';

// import jpgs
import mobileHeroImg from '../../public/images/image-web-3-mobile.jpg';
import desktopHeroImg from '../../public/images/image-web-3-desktop.jpg';

const MainNews: React.FC = ()=>{
    return (
        <div className='flex-1 mb-16'>
            <div className='relative w-full h-[23.5em] mb-6 flex sm:hidden'>
                <Image fill src={mobileHeroImg} alt="hero image showcasing web3"/>
            </div>
            <div className='relative w-full h-[23.5em] mb-6 hidden sm:block'>
                <Image fill src={desktopHeroImg} alt="hero image showcasing web3"/>
            </div>
            <div className='lg:flex'>
                <h1 className='flex-1 text-4xl font-bold pr-20 mb-4 lg:text-6xl'>The Bright Future of Web 3.0?</h1>
                <div className='lg:relative lg:w-[21em]'>
                    <p className='mb-6 text-base text-darkGrayishBlue'>  
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </p>
                    <button className="px-6 py-3 lg:px-9 lg:absolute lg:bottom-0 bg-softRed text-white hover:bg-black">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default MainNews;


