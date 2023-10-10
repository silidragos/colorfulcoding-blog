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
            <video className="w-full" style={{ maxWidth: "100%" }} src={isMobile ? "./video/reel.webm" : "./video/Raindrops_Videvo.mp4"} autoPlay muted loop></video>
        </div>
    )
}

export default MainReel;