import React, { useEffect, useMemo } from 'react';
import getWritingsMetadata from '@/components/GetWritingsAndTalksMetadata';
import TopNav from '@/components/TopNav';

import Image from 'next/image';
import IntroText from '@/components/landing-page/IntroText';
import IntroLogo from '@/components/landing-page/IntroLogo';
import StrokeTitle from '@/components/landing-page/StrokeTitle';
import Service from '@/components/landing-page/ServiceCategory';
import Contact from '@/components/landing-page/Contact';

import PortfolioCarousel from '@/components/landing-page/PortfolioCarousel';


const HomePage = () => {
  const talksMetadata = getWritingsMetadata();

  return <div className='bg-zinc-900 px-2' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>

    {/* VIDEO REEL*/}
    <section id="home" className='mb-20'>
      {/* Full height video that autoplays on mute loop */}
      <video className="w-full" style={{maxWidth: "100%"}} src="./video/reel.mp4" autoPlay muted loop></video>
      <IntroText></IntroText>
      <IntroLogo></IntroLogo>
    </section>
    <br />

    <section id="services" className='my-20' style={{ marginTop: "10rem" }}>
      <StrokeTitle>
        <h1 className='font-bold stroke-text text-zinc-900' style={{ fontSize: "3em" }}>Services</h1>
      </StrokeTitle>

      <Service imgSrc="./icons/product_marketing.svg" imgAlt="Product Marketing" content="Is the use of three-dimensional models, visualizations, and simulations to promote and showcase products in a more engaging and immersive way.">
        <h1><span className='text-orange-500'>3D</span> <br />Product Marketing</h1>
      </Service>

      <Service imgSrc="./icons/educational_tools.svg" imgAlt="Educational Tools" content="Refer to interactive technologies such as AR and VR that create engaging and immersive learning experiences, enabling users to explore and interact with virtual environments for educational purposes.">
        <h1>Immersive <br /><span className='text-orange-500'>Educational Tools</span></h1>
      </Service>

      <Service imgSrc="./icons/digital_heritage.svg" imgAlt="Digital Heritage" content="Refers to the digitization and preservation of cultural artifacts, historical sites, and objects in three-dimensional models, allowing for immersive exploration, documentation, and study of our rich heritage using digital technology.">
        <h1><span className='text-orange-500'>3D</span> <br /> Digital Heritage</h1>
      </Service>

      <Service imgSrc="./icons/digital_twin.svg" imgAlt="Digital Twins" content="Involve the use of extended reality (XR), which encompasses VR, AR, and MR, to create virtual replicas or representations of physical objects, environments, or systems for simulation, analysis, and collaborative purposes.">
        <h1>XR <span className='text-orange-500'>Digital Twin</span> <br /> Technologies</h1>
      </Service>

      <Service imgSrc="./icons/artistic.svg" imgAlt="Artistic Experiences" content="Encompass the integration of MR technology, combining virtual and real-world elements, to create immersive and interactive artistic encounters that blur the boundaries between physical and digital art forms.">
        <h1>XR <span className='text-orange-500'>Artistic <br /> Experiences</span></h1>
      </Service>

      <Service imgSrc="./icons/vr_world.svg" imgAlt="World Building" content="Involves the collaborative creation and design of VR environments where users can interact, communicate, and engage with each other, fostering social connections and shared experiences within the virtual world.">
        <h1>Social <span className='text-orange-500'>VR World<br /> Building</span></h1>
      </Service>
    </section>

    <section className='my-20'>
      <StrokeTitle>
        <h1><span className='text-orange-500'>Past</span> <br /> Projects</h1>
      </StrokeTitle>
      

      <PortfolioCarousel></PortfolioCarousel>
    </section>


    <section className='my-20'>
      <StrokeTitle>
        <h1><span className='text-zinc-900 stroke-text'>Writings</span> & <span className="text-orange-500">talks</span></h1>
      </StrokeTitle>
    </section>

    <section id="articles">
      <div className='grid grid-cols-2 gap-4'>
        {talksMetadata.map((talk) => {
          return <div className='writing-element rounded-lg overflow-hidden relative bg-cover aspect-square' style={{ backgroundImage: `url(${talk.cover})` }}>
            <div className='info absolute bg-orange-800 bottom-0 p-2 w-full'>
              <h3 className='text-zinc-900 font-bold'>{talk.type}</h3>
              <p className='text-white'>{talk.title}</p>
            </div>
            <div className='more absolute bg-orange-500 bottom-0 p-2 w-full text-center'>
              READ MORE &gt;
            </div>
          </div>;
        })}
      </div>
    </section>
    <Contact></Contact>

  </div >;
};

export default HomePage;