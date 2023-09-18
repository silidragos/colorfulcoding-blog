"use client"

import { useMemo, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const PortfolioCarousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    return (
        <div>
            <AwesomeSlider onTransitionEnd={e => {
                setCurrentIdx(e.currentIndex);
            }}>
                <div className="slider__video-card">
                    {currentIdx === 0 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-slate-950/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">ArtLink</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">The artworld at your fingertips</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2019-present)</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>
                <div className="slider__video-card">
                    {currentIdx === 1 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-lime-700/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Immersive Oradea</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Learn the History of Oradea's central plaza with AR</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2023)</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Find out more</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    {currentIdx === 2 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-purple-900/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">PsycheHouse 60s</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Step into Psyche60s and experience a massive cultural "Youthquake!"</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2023)</b> The Psyche60s is an immersive VR experience that combines a unique collection of artwork, original music soundtracks, and rich historical insights that took place in San Francisco in the 1960s.</p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    {currentIdx === 3 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-blue-400/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Copil Creativ</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Read and Learn!</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2023) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</b> </p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    {currentIdx === 4 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-amber-800/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Wamdah VR</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">A journey to the future</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2022) WAMDAH is a VR storytelling experience of Odai in his tireless quest towards finding his lost brother. After his brother’s disappearance, Odai’s world changed. He made it his sole mission to journey on the shores and dunes of the kingdom to find his brother and bring him home. Step into Odai’s world, interwind between recollections and discoveries as he captures some of the most beautiful places in Saudi Arabia, regaining his lost passion along the way.</b> </p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    {currentIdx === 5 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-fuchsia-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">OCA Walkathon VR</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Together we win</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2021) WAMDAH is a VR storytelling experience of Odai in his tireless quest towards finding his lost brother. After his brother’s disappearance, Odai’s world changed. He made it his sole mission to journey on the shores and dunes of the kingdom to find his brother and bring him home. Step into Odai’s world, interwind between recollections and discoveries as he captures some of the most beautiful places in Saudi Arabia, regaining his lost passion along the way.</b> </p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>
                <div className="slider__video-card">
                    {currentIdx === 6 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-blue-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Fire Simulator</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">...</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2021) WAMDAH is a VR storytelling experience of Odai in his tireless quest towards finding his lost brother. After his brother’s disappearance, Odai’s world changed. He made it his sole mission to journey on the shores and dunes of the kingdom to find his brother and bring him home. Step into Odai’s world, interwind between recollections and discoveries as he captures some of the most beautiful places in Saudi Arabia, regaining his lost passion along the way.</b> </p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>
                <div className="slider__video-card">
                    {currentIdx === 7 && <video className="w-full" style={{ maxWidth: "100%" }} src="./video/reel.mp4" autoPlay muted loop></video>}
                    <div className="absolute bottom-0 py-5 bg-red-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">XR Marketing</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">...</h2>
                        <p className="text-left text-xs w-11/12 m-auto font-light pt-5"><b>(2021) WAMDAH is a VR storytelling experience of Odai in his tireless quest towards finding his lost brother. After his brother’s disappearance, Odai’s world changed. He made it his sole mission to journey on the shores and dunes of the kingdom to find his brother and bring him home. Step into Odai’s world, interwind between recollections and discoveries as he captures some of the most beautiful places in Saudi Arabia, regaining his lost passion along the way.</b> </p>
                        <p className="w-full text-center underline pt-3"><a className="font-normal" href="#">Landing Page</a></p>
                    </div>
                </div>
            </AwesomeSlider>
        </div>);
}

export default PortfolioCarousel;