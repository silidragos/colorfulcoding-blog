"use client"

import React, { useEffect, useState } from "react";

const MainReel = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

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
        <div>
            <video className="w-full"style={{ maxWidth: "100%" }} autoPlay muted loop playsInline>
                <source src={isMobile ? "./video/reel_compressed.mp4" : "./video/reel_wide_compressed.mp4"} type="video/mp4" />
            </video>
        </div>
    )
}

export default MainReel;