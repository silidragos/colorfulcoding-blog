"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from 'next/image';

const Contact = () => {
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
        <div id="contact" ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 1.0, bounce: 0.5, delay: 0 }}
            >
                <section id="contact" className='bg-orange-500 text-zinc-900 text-left mt-20 py-10'>
                    <h1 className='text-center w-3/5 m-auto'>Have an idea? <br />
                        <span className='text-orange-500 stroke-text-zinc'> Contact Us </span></h1>

                    <br />
                    <div className='underline text-center text-lg text-white'>
                        <a href="mailto:dragos@colorfulcoding.com">dragos@colorfulcoding.com</a>
                    </div>

                    <div className="contact-websites grid grid-cols-3 gap-4 w-3/5 m-auto my-8" style={{ height: "50px" }}>
                        <div><a className='w-full' target="_blank" href="https://www.linkedin.com/company/colorfulcoding/about/?viewAsMember=true"><Image className='w-full' src="/icons/linkedin.svg" alt="LinkedIn" width={0} height={0} /></a></div>
                        {/* <div><a className='w-full' href=""><Image className='w-full' src="./icons/instagram.svg" alt="Istagram" width={0} height={0} /></a></div> */}
                        <div><a className='w-full' target="_blank" href="https://www.youtube.com/channel/UC8uHMNgoz4aUbkeQ3CtWQXg"><Image className='w-full' src="/icons/youtube.svg" alt="Youtube" width={0} height={0} /></a></div>
                        <div><a className='w-full' target="_blank" href="https://www.tiktok.com/@colorfulcoding"><Image className='w-full' src="/icons/tiktok.svg" alt="Tiktok" width={0} height={0} /></a></div>
                    </div>

                    <p className='text-center text-white pt-5'>Made with ♥ in Iași</p>

                </section>
            </motion.div>
        </div>
    )
}

export default Contact;