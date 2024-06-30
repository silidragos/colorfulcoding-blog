"use client"
import { motion, useAnimation, useAnimationFrame, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image';

const NavBarWrapper = (props: { onClickBurgerMenu: any }) => {
    const { scrollYProgress } = useScroll();
    const distance = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const mainControls = useAnimation();

    useAnimationFrame((t, delta) => {
        let dist = distance.get();
        if (dist > 0.15) {
            mainControls.start('darkgray');
        } else {
            mainControls.start('transparent');
        }
    });

    return (
        <motion.div className='w-full flex flex-wrap items-center justify-between mx-auto p-4'
            variants={{
                transparent: { backgroundColor: 'rgba(0,0,0,0)' },
                darkgray: { backgroundColor: '#111' },
            }}
            initial="transparent"
            animate={mainControls}
            transition={{ type: "tween", duration: 0.3, delay: 0 }}>
            <a href="/#home"><Image src="/icons/icon_small.svg" alt={'Logo'} width={50} height={50}></Image></a>
            <button onClick={() => { props.onClickBurgerMenu() }} className='px-5'><Image src="/icons/menu.svg" alt="Burger Menu" width={30} height={30} /></button>
        </motion.div>
    )
}

export default NavBarWrapper;