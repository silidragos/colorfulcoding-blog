import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const TeamMember = (props: { my: any, img: string, memberName: string, role: string }) => {
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
        <div ref={ref} className="lg:w-1/2 md:w-full align-center text-center my-20" style={{ marginTop: props.my }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", duration: 1.0, bounce: 0.5, delay: 0 }}
            >
                <img className="w-1/3 m-auto" src={props.img}></img>
                <h2>{props.memberName}</h2>
                <p>{props.role}</p>
            </motion.div>
        </div>
    )
}

export default TeamMember;