"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const StrokeTitle = (props: { children: ReactNode }) => {
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
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 1.0, delay: .5 }}
            >
                <div className='line upper-line'></div>
            </motion.div>

            <motion.div
                className="bg-zinc-900 py-5"
                variants={{
                    hidden: { opacity: 0, y: -25 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 4.0, delay: .75 }}
            >
                {props.children}
            </motion.div>

            <motion.div
                className="bg-zinc-900 py-5"
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 1.0, delay: .9 }}
            >
                <div className='line lower-line'></div>
            </motion.div>
        </div>
    )
}

export default StrokeTitle;