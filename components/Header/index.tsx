import Image from 'next/image';
import React, { useState } from 'react';

// subcomponent
import Menu from './Menu';

// svgs
import Logo from '../../public/images/logo.svg';
import Hamburger from '../../public/images/icon-menu.svg';

const Header: React.FC = ()=>{
    const [menu,setMenu]=useState(false);

    const openMenu = ()=>{
        document.getElementsByTagName('body')[0].classList.add("overflow-hidden");
        setMenu(true);
    };

    const closeMenu = ()=>{
        document.getElementsByTagName('body')[0].classList.remove("overflow-hidden");
        setMenu(false);
    };

    return(
        <header className='flex justify-between pb-8'>
            <div>
                <Image src={Logo} alt="W company logo"/>
            </div>
            <div className='flex items-center sm:hidden'>
                <Image className='cursor-pointer' src={Hamburger} alt="hamburger menu" onClick={openMenu}/>
            </div>
            <div className='sm:flex hidden items-center'>
                <nav>
                    <ul className='flex gap-10'>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </nav>
            </div>
            {menu && <Menu close={closeMenu}/>}
        </header>
    );
};

export default Header;
