'use client'

import Image from 'next/image';
import { PostMetadata } from "./PostMetadata";
import React, { useState } from 'react';
import NavBarWrapper from './landing-page/NavBarWrapper';

const TopNav = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    return (<nav className='fixed z-10' style={{ width: "100%"}}>
        {!isBurgerMenuOpen &&
            <NavBarWrapper onClickBurgerMenu={() => { setIsBurgerMenuOpen(true) }}></NavBarWrapper>
        }

        {/* Burger menu */}
        {isBurgerMenuOpen && <div className='bg-orange-500 w-full h-screen'>
            <div className='w-full flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href="#home" onClick={() => setIsBurgerMenuOpen(false)}><Image src="/icons/icon_small_white.svg" alt={'Logo'} width={50} height={50}></Image></a>
                <button onClick={() => setIsBurgerMenuOpen(false)}><Image src="/icons/exit.svg" alt="Burger Menu" width={50} height={50} /></button>
            </div>
            <div className='flex w-full m-auto text-zinc-900 text-6xl font-bold text-center h-screen' style={{ marginTop: "-150px" }}>
                <div className='m-auto relative'>
                    <div className="bg-white" style={{ width: "200px", height: "10px", right: "-200px", top: "-50px", position: "absolute" }}></div>

                    <div className='my-10'><a href="#home" onClick={() => setIsBurgerMenuOpen(false)}>About</a></div>
                    <div className='my-10'><a href="#services" onClick={() => setIsBurgerMenuOpen(false)}>Services</a></div>
                    <div className='my-10'><a href="#articles" onClick={() => setIsBurgerMenuOpen(false)}>Articles</a></div>

                    <div className="bg-white" style={{ width: "150px", height: "10px", left: "-200px", bottom: "-50px", position: "absolute" }}></div>
                    <div className="bg-white" style={{ width: "400px", height: "10px", right: "-200px", bottom: "-150px", position: "absolute" }}></div>

                </div>

                <div className='absolute center w-full text-4xl underline' style={{ bottom: "150px" }}><a href="#About" onClick={() => setIsBurgerMenuOpen(false)}>Contact Us</a></div>
            </div>
        </div>
        }
    </nav >);
}

export default TopNav;