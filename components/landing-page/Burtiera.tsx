"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const MainReel = () => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView])


    function handleWindowSizeChange() {
        if(typeof window === 'undefined') return;

        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        if(typeof window === 'undefined') return;
        
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div ref={ref}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 2 },
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: .75 }}>

                <div className='text-zinc-900 bg-white font-bold text-lg py-2 burtiera_wrapper_one'>
                    <div className='burtiera burtiera-1'>
                        {isMobile ?
                            <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
                            :
                            <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL.</span>
                        }   
                    </div>
                    <div className='burtiera burtiera-2'>
                        {isMobile ?
                            <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
                            :
                            <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL.</span>
                        } 
                    </div>
                </div>
            </motion.div>


            <motion.div variants={{
                hidden: { opacity: 0, y: 0, scale: 2 },
                visible: { opacity: 1, y: 75, scale: 1 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 0.8, bounce: .5, delay: 1 }}>
                <div className='text-zinc-900 bg-orange-500 font-bold text-lg py-2 burtiera_wrapper_two'>
                    <div className='burtiera burtiera-1'>
                        {isMobile ?
                            <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
                            :
                            <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP.  </span>
                        } 
                    </div>
                    <div className='burtiera burtiera-2'>
                        {isMobile ?
                            <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
                            :
                            <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP.  </span>
                        } 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MainReel;