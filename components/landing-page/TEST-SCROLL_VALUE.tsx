"use client"
import { motion, useAnimationFrame, useScroll, useTransform } from "framer-motion";


const Services = () => {
    const { scrollYProgress } = useScroll();
    const distance = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useAnimationFrame((t, delta)=>{
        
    });

    return (
        <motion.div className="
        fixed text-white top-10 z-100 text-8xl"
        style={{opacity: distance}}>
            {distance.get()}
        </motion.div>
    )
}

export default Services;