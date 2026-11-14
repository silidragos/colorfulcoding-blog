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
        <div ref={ref} className="w-full">
            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 0.5 },
                visible: { opacity: 1, y: 0, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: .25 }}>
                <Image className='m-auto w-full' src="./icons/icon_short_large.svg" alt="ColorfulCoding" width={100} height={100} />
            </motion.div>
        </div >
    )
}

export default IntroLogo;