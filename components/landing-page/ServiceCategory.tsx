"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { Children, ReactNode, useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Service = (props: { children: ReactNode, imgSrc: string, imgAlt: string, content: string }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div ref={ref}>
            <motion.div
                className="bg-zinc-900 py-5"
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 4.0, delay: 0 }}
            >

                <div className='my-20 text-center py-10 flex flex-wrap items-center justify-items-center'>
                    {isMobile && props.children}
                    <Image className='m-auto my-10 md:my-0 w-2/5 md:w-1/5' src={props.imgSrc} alt={props.imgAlt} width={0} height={0} />
                    <div className="w-full md:w-1/2">
                    {!isMobile && props.children}
                    <p className="px-5 w-full md:w-4/5 m-auto">{props.content}</p>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default Service;