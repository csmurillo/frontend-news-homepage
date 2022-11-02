import React, { useState } from 'react';
import Image from 'next/image';

import RetroPc from '../../public/images/image-retro-pcs.jpg';
import Laptops from '../../public/images/image-top-laptops.jpg';
import GamingController from '../../public/images/image-gaming-growth.jpg';

const FeaturedNews: React.FC = ()=>{
    return (
        <div className='sm:flex'>
            <div className='flex gap-10 mb-5 sm:flex-1'>
                <div className='relative w-[130px] h-[195px]'>
                    <Image fill src={RetroPc} alt="image of a retro pc"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl'>01</h4>
                        <p className='text-lg'>Reviving Retro PCs</p>
                    </hgroup>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='flex gap-10 mb-5 sm:flex-1'>
                <div className='relative w-[130px] h-[195px] sm:w-[127px] sm:h-[190px]'>
                    <Image fill src={Laptops} alt="image of a laptop keyboard"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl'>02</h4>
                        <p className='text-lg'>Top 10 Laptops of 2022</p>
                    </hgroup>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex gap-10 sm:flex-1'>
                <div className='relative w-[130px] h-[195px]'>
                    <Image fill src={GamingController} alt="image of a floating gaming controller"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl'>03</h4>
                        <p className='text-lg'>The Growth of Gaming</p>
                    </hgroup>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedNews;
