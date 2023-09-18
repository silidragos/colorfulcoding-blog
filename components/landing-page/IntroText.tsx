"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const IntroText = () => {
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
        <div style={{ transform: "translate(0, -75px)" }} ref={ref}>
            <motion.div
                className="bg-zinc-900 py-5"
                variants={{
                    hidden: { opacity: 0, y: -25 },
                    visible: { opacity: 1, y: 15 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 4.0, delay: 0 }}
            >
                <h2>
                    <span className="accent">ColorfulCoding</span> is a full-service XR creative studio inspired by the potential of emerging technologies.
                </h2>
                <p className='py-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ipsum nisl. Sed volutpat purus ut velit pellentesque, commodo tincidunt dui cursus. Donec imperdiet urna est, vitae dapibus leo mattis nec. Ut augue purus, maximus ultrices lacinia non, venenatis blandit tellus.
                </p>
                <p className='pb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ipsum nisl. Sed volutpat purus ut velit pellentesque, commodo tincidunt dui cursus.
                </p>
            </motion.div>
        </div>
    )
}

export default IntroText;