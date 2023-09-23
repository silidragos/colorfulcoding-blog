"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { Children, ReactNode, useEffect, useRef } from "react";
import Image from 'next/image';

const Service = (props: { children: ReactNode, imgSrc: string, imgAlt: string, content: string }) => {
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

                <div className='my-20 text-center py-10'>
                    {props.children}
                    <Image className='m-auto my-10 w-2/5' src={props.imgSrc} alt={props.imgAlt} width={0} height={0} />
                    <p className="px-5">{props.content}</p>
                </div>

            </motion.div>
        </div>
    )
}

export default Service;