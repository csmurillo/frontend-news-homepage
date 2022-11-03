import React, { useState } from 'react';
import Image from 'next/image';

import RetroPc from '../../public/images/image-retro-pcs.jpg';
import Laptops from '../../public/images/image-top-laptops.jpg';
import GamingController from '../../public/images/image-gaming-growth.jpg';

const FeaturedNews: React.FC = ()=>{
    return (
        <div className='sm:flex gap-16'>
            <div className='flex gap-10 mb-5 sm:flex-1'>
                <div className='relative w-[6.25em] h-[8em] min-h-[8em] min-w-[6.25em]'>
                    <Image fill src={RetroPc} alt="image of a retro pc"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl text-grayishBlue font-bold'>01</h4>
                        <p className='text-lg font-bold hover:text-softRed hover:cursor-pointer'>Reviving Retro PCs</p>
                    </hgroup>
                    <p className='text-base text-darkGrayishBlue'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='flex gap-10 mb-5 sm:flex-1'>
                <div className='relative w-[6.25em] h-[8em] min-h-[8em] min-w-[6.25em]'>
                    <Image fill src={Laptops} alt="image of a laptop keyboard"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl text-grayishBlue font-bold'>02</h4>
                        <p className='text-lg font-bold hover:text-softRed hover:cursor-pointer'>Top 10 Laptops of 2022</p>
                    </hgroup>
                    <p className='text-base text-darkGrayishBlue'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex gap-10 sm:flex-1'>
                <div className='relative w-[6.25em] h-[8em] min-h-[8em] min-w-[6.25em]'>
                    <Image fill src={GamingController} alt="image of a floating gaming controller"/>
                </div>
                <div>
                    <hgroup>
                        <h4 className='text-3xl text-grayishBlue font-bold'>03</h4>
                        <p className='text-lg font-bold hover:text-softRed hover:cursor-pointer'>The Growth of Gaming</p>
                    </hgroup>
                    <p className='text-base text-darkGrayishBlue'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedNews;
