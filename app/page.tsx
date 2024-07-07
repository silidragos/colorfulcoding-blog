import React from 'react';
import getWritingsMetadata from '@/components/GetWritingsAndTalksMetadata';
import TopNav from '@/components/TopNav';

import Image from 'next/image';
import IntroText from '@/components/landing-page/IntroText';
import IntroLogo from '@/components/landing-page/IntroLogo';
import StrokeTitle from '@/components/landing-page/StrokeTitle';
import Service from '@/components/landing-page/ServiceCategory';
import Contact from '@/components/landing-page/Contact';

import PortfolioCarousel from '@/components/landing-page/PortfolioCarousel';
import MainReel from '@/components/landing-page/MainReel';
import Burtiera from '@/components/landing-page/Burtiera';
import ServicesCards from '@/components/landing-page/ServicesCards';
import Team from '@/components/landing-page/Team';


const HomePage = () => {
  const talksMetadata = getWritingsMetadata();

  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>

    {/* VIDEO REEL*/}
    <section id="home" className='mb-20'>
      {/* Full height video that autoplays on mute loop */}
      <MainReel></MainReel>
      <IntroText></IntroText>

      <div className='flex align-middle w-full flex-wrap'>
        <div className='px-10 sm:w-full md:w-1/2 align-middle'>
          <p className='py-10 md:text-xl'>
            At ColorfulCoding, we believe in the power of interactive storytelling to shape the future of digital experiences. Our studio specializes in creating finely-tuned XR solutions tailored for diverse audiences, from the realms of advertising, artistic expression, digital heritage, tourism to various other more applied industries.
          </p>
          <p className="md:text-xl">
            With a team that balances design, 3D artistry, and development expertise, we focus on building genuine connections, fostering engagement, and delivering meaningful narratives.
          </p>
        </div>
        <IntroLogo></IntroLogo>
      </div>

      <Burtiera></Burtiera>
    </section>
    <br />

    <section id="services" className='my-20' style={{ marginTop: "10rem" }}>
      <StrokeTitle>
        <h1 className='font-bold stroke-text text-zinc-900' style={{ fontSize: "3em" }}>Services</h1>
      </StrokeTitle>

      <Service imgSrc="./icons/product_marketing.svg" imgAlt="Product Marketing" content="We bring products to life with interactive, immersive visuals. Beyond just showcasing a product, this approach allows consumers to explore details intimately, enhancing storytelling and forging a deeper connection between brand and audience.">
        <h1 className='w-full'><span className='text-orange-500'>3D</span> <br />Product Marketing</h1>
      </Service>

      <Service imgSrc="./icons/educational_tools.svg" imgAlt="Educational Tools" content="Our goal is to elevate learning by plunging students into interactive experiences. Beyond traditional methods, we want to help enhance comprehension, foster engagement, and make complex concepts accessible and memorable.">
        <h1 className='w-full'>Immersive <br /><span className='text-orange-500'>Educational Tools</span></h1>
      </Service>

      <Service imgSrc="./icons/digital_heritage.svg" imgAlt="Digital Heritage" content="3D digital heritage captures the past in vivid detail, preserving historical treasures in interactive formats. Beyond mere archiving, it breathes life into ancient relics and stories, offering a tangible connection to our shared history.">
        <h1 className='w-full'><span className='text-orange-500'>3D</span> <br /> Digital Heritage</h1>
      </Service>

      <Service imgSrc="./icons/digital_twin.svg" imgAlt="Digital Twins" content="Digital Twins blend the real and virtual, creating dynamic replicas of physical entities. More than just simulations, they offer real-time insights, enhance operational efficiency, and provide a bridge between digital and tangible realms.">
        <h1 className='w-full'>XR <span className='text-orange-500'>Digital Twin</span> <br /> Technologies</h1>
      </Service>

      <Service imgSrc="./icons/artistic.svg" imgAlt="Artistic Experiences" content="We thrive to transcend traditional boundaries, merging art with immersive technology. Beyond just viewing, we invite audiences to engage, interact, and become part of the evolving narrative, offering a deeper connection to the artistic intent.">
        <h1 className='w-full'>XR <span className='text-orange-500'>Artistic <br /> Experiences</span></h1>
      </Service>

      <Service imgSrc="./icons/vr_world.svg" imgAlt="World Building" content="Crafting interactive universes where users connect and collaborate. Beyond just digital realms, these environments foster community, enable shared experiences, and reshape the way we perceive virtual social interaction.">
        <h1 className='w-full'>Social <span className='text-orange-500'>VR World<br /> Building</span></h1>
      </Service>
    </section>

    <section id="projects" className='my-40'>
      <StrokeTitle>
        <h1><span className="text-orange-500">Projects</span></h1>
        {/* <span className='text-zinc-900 stroke-text'>Services</span> &  */}
      </StrokeTitle>

      {/* <PortfolioCarousel></PortfolioCarousel> */}
      <ServicesCards></ServicesCards>
    </section>

    

    <Team></Team>


    <section id="articles" className='my-20'>
      <StrokeTitle>
        <h1><span className='text-zinc-900 stroke-text'>Writings</span> & <span className="text-orange-500">talks</span></h1>
      </StrokeTitle>
    </section>

    <section style={{ height: "250px" }}>
      <div className='text-center pt-12'>
        <div className='wavy-text'>
          <span style={{ "--i": 1 } as React.CSSProperties}>W</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>I</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>P</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>.</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>.</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>.</span>
        </div>

        <div className='mt-5'>
          Check out our <a href="http://colorfulcoding-portofolio.s3-website.eu-central-1.amazonaws.com/" target="_blank" className='text-orange-500'>3D portfolio</a>.
        </div>
      </div>
      {/* <div className='grid grid-cols-2 gap-4'>
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
      </div> */}
    </section>
    <Contact></Contact>

  </div >;
};

export default HomePage;