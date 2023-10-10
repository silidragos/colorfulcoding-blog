"use client"

import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const PortfolioCarousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    return (
        <div>
            <AwesomeSlider onTransitionEnd={e => {
                console.log(e.currentIndex === 1);
                setCurrentIdx(e.currentIndex);
            }}>
                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/artlink_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-slate-950/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">ArtLink</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">The artworld at your fingertips</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5"><b>(2019-present)</b> Through our in-house platform, ArtLink, we help Artists all over the world, Museums, Galleries, Festivals and Cultural institutions step into the world of immersive art creation without the need of prior technical knowledge. Besides a 3 years-old fine-tuned platform, you also get the experience of a team that made dozens of XR projects, to help you step into the amazing world of XR. </p>
                        <p className="w-full text-center md:text-xl underline pt-3"><a className="font-normal" target="_blank" href="https://artlink.app/">Landing Page</a></p>
                    </div>
                </div>
                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/oradea_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-lime-700/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Immersive Oradea</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">AR Geolocated Touristic Experience</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5 pb-5"><b>(2023) - developement. </b> The motto that Oradea lives by today, art nouveau life nouveau, is written in centuries of history, with various social, religious and cultural influences. Come and discover together, to see with your own eyes what Piata Unirii once looked like!</p>
                        {/* <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" target="_blank" href="https://artlink.app/">Find out more</a></p> */}
                    </div>
                </div>

                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/psychehouse_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-purple-900/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">PsycheHouse 60s</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Experience a massive cultural "Youthquake!"</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5"><b>(2023)</b> The Psyche60s is an immersive VR experience that combines a unique collection of artwork, original music soundtracks, and rich historical insights that took place in San Francisco in the 1960s.</p>
                        <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" target="_blank" href="https://psyche60s.sigmaways.com/">Landing Page</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/copil_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-blue-400/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Copil Creativ</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">AR Children's Book</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5"><b>(2023)</b> With interactive games and delightful animations, every page turn is a step towards fun-filled learning. Make bedtime stories a magical journey towards a healthier tomorrow. Experience the magic, one interactive page at a time! </p>
                        <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" target="_blank" href="https://copilcreativ.ro/">Landing Page</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/wamdah_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-amber-800/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Wamdah VR</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">A journey to the future</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5"><b>(2022) WAMDAH is a VR storytelling experience of Odai in his tireless quest towards finding his lost brother. After his brother’s disappearance, Odai’s world changed. He made it his sole mission to journey on the shores and dunes of the kingdom to find his brother and bring him home. Step into Odai’s world, interwind between recollections and discoveries as he captures some of the most beautiful places in Saudi Arabia, regaining his lost passion along the way.</b> </p>
                        <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" target="_blank" href="https://www.youtube.com/watch?v=aAxUPClBPKk&ab_channel=HakawatiStudio">Teaser</a></p>
                    </div>
                </div>

                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/oca_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-fuchsia-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">OCA Walkathon VR</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">Together we win</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5 pb-5"><b>(2021)</b> The Oman Cancer Association (OCA) is hosting its 17th Annual Walkathon virtually in response to the COVID-19 pandemic. With a state-of-the-art immersive platform, participants can explore OCA's contributions and the scenic beauty of Oman from May 22nd to 23rd, 2021. Offering free registration, this continuous 48-hour event invites participants to virtually walk, discover OCA's mission, and contribute to the vital support they provide to cancer patients and their families. </p>
                        {/* <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" href="#">Landing Page</a></p> */}
                    </div>
                </div>
                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/fire_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-blue-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">Fire Simulator</h1>
                        <h2 className="text-center w-11/12 m-auto font-normal">VR Training Simulator</h2>
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5 pb-5"><b>(2021) The fire simulator for offices, designed for the Oculus Quest, provides an immersive training experience, replicating real-life fire scenarios within a workplace environment. Unique to this simulator is a specialized controller fashioned as an actual fire extinguisher, enabling users to practice and hone their fire-extinguishing skills in a realistic yet safe virtual setting. This innovative blend of hardware and software ensures that participants are well-equipped to tackle fire emergencies confidently and effectively.</b> </p>
                        {/* <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" href="#">Landing Page</a></p> */}
                    </div>
                </div>
                <div className="slider__video-card">
                    <video className="w-full" style={{ maxWidth: "100%" }} src="./video/marketing_mobile.webm" autoPlay muted loop></video>
                    <div className="absolute bottom-0 py-5 bg-red-500/80 w-full">
                        <h1 className="text-center w-11/12 m-auto">XR in Advertising & Marketing</h1>
                        {/* <h2 className="text-center w-11/12 m-auto font-normal">...</h2> */}
                        <p className="text-left text-xs md:text-base w-11/12 m-auto font-light pt-5 pb-5"><b>(2021)We have had the privilege of crafting multiple XR experiences for esteemed brands like Tommy Hilfiger, KFC, and Coca Cola, as well as for various NGOs. In each project, we've harnessed the power of immersion, blending interactivity and enjoyment to heighten awareness and engagement. Our expertise in leveraging the unique facets of XR ensures that each experience is not just memorable but also deeply impactful for the audience.</b> </p>
                        {/* <p className="w-full text-center underline md:text-xl pt-3"><a className="font-normal" href="#">Landing Page</a></p> */}
                    </div>
                </div>
            </AwesomeSlider>
        </div>);
}

export default PortfolioCarousel;