"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import Image from 'next/image';
import { useEffect, useRef } from "react";

const IntroLogo = () => {
    const ref = useRef(null);
    
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView])

    return (
        <div ref={ref} className="w-full md:w-1/2 align-middle ">
            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 0.5 },
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: .25 }}>
                <Image className='m-auto w-4/5 md:w-2/5' src="./icons/icon_short_large.svg" alt="Image 1" width={100} height={100} />
            </motion.div>
        </div >
    )
}

export default IntroLogo;