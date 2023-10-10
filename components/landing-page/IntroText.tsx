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
        <div ref={ref} className="section-1_text">
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
                <div className="px-5">
                    <h2 className="md:text-5xl">
                        <span className="accent">ColorfulCoding</span> is a full-service XR creative studio inspired by the potential of emerging technologies.
                    </h2>
                </div>
            </motion.div>
        </div>
    )
}

export default IntroText;