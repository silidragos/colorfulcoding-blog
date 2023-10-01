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
        <div style={{ transform: "translate(0, -25px)" }} ref={ref}>
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
                <div className="px-2">
                    <h2>
                        <span className="accent">ColorfulCoding</span> is a full-service XR creative studio inspired by the potential of emerging technologies.
                    </h2>
                    <p className='py-10'>
                        At ColorfulCoding, we believe in the power of interactive storytelling to shape the future of digital experiences. Our studio specializes in creating finely-tuned XR solutions tailored for diverse audiences, from the realms of advertising, artistic expression, digital heritage, tourism to various other more applied industries.
                    </p>
                    <p>
                        With a team that balances design, 3D artistry, and development expertise, we focus on building genuine connections, fostering engagement, and delivering meaningful narratives.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default IntroText;