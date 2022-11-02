import React, { useState } from 'react';
import Image from 'next/image';

// import jpgs
import mobileHeroImg from '../../public/images/image-web-3-mobile.jpg';
import desktopHeroImg from '../../public/images/image-web-3-desktop.jpg';

const MainNews: React.FC = ()=>{
    return (
        <div className='flex-1'>
            <div className='relative w-full h-96 flex sm:hidden'>
                <Image fill src={mobileHeroImg} alt="hero image showcasing web3"/>
            </div>
            <div className='relative w-full h-96 hidden sm:block'>
                <Image fill src={desktopHeroImg} alt="hero image showcasing web3"/>
            </div>
            <h1>The Bright Future of Web 3.0?</h1>
            <p>  
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
            </p>
            <button className="px-5 py-5 bg-blue-600">Read More</button>
        </div>
    );
};

export default MainNews;
