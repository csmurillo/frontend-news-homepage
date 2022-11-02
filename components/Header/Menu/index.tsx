import Image from 'next/image';
import React from "react";
import Close from '../../../public/images/icon-menu-close.svg';

type MenuType = {
    close: () => void
};

const Menu = ({close}:MenuType)=>{
    return (
        <div className="absolute top-0 left-0 w-full h-full flex sm:hidden">
            <div className='bg-black w-40 opacity-70'>

            </div>
            <div className='bg-white flex-1 h-full pt-4 px-5'>
                <div className='flex justify-end mb-20'>
                   <Image className='cursor-pointer' src={Close} alt="close menu" onClick={close}/>
                </div>
                <div>
                    <nav>
                        <ul className='text-2xl'>
                            <li className='hover:underline hover:cursor-pointer mb-4'>Home</li>
                            <li className='hover:underline hover:cursor-pointer mb-4'>New</li>
                            <li className='hover:underline hover:cursor-pointer mb-4'>Popular</li>
                            <li className='hover:underline hover:cursor-pointer mb-4'>Trending</li>
                            <li className='hover:underline hover:cursor-pointer mb-4'>Categories</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};


export default Menu;