"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image';

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
        <div ref={ref}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 0.5 },
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: .25 }}>
                <Image className='m-auto w-4/5' src="./icons/icon_short_large.svg" alt="Image 1" width={0} height={0} />
            </motion.div>

            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 2},
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: .75 }}>

                <div className='text-zinc-900 bg-white font-bold text-lg py-2 burtiera_wrapper_one'>
                    <div className='burtiera burtiera-1'>
                        <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
                    </div>
                    <div className='burtiera burtiera-2'>
                        <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
                    </div>
                </div>
            </motion.div>


            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 2},
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: 1 }}>
                <div className='text-zinc-900 bg-orange-500 font-bold text-lg py-2 burtiera_wrapper_two'>
                    <div className='burtiera burtiera-1'>
                        <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
                    </div>
                    <div className='burtiera burtiera-2'>
                        <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default IntroLogo;