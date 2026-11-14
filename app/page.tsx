import React from 'react';
import PortfolioLink from '@/components/landing-page/PortfolioLink';
import hero from './studio-hero.module.css';

import StudioHeader from '@/components/landing-page/StudioHeader';

import IntroLogo from '@/components/landing-page/IntroLogo';
import services from './services.module.css';
import Service from '@/components/landing-page/ServiceCategory';
import Contact from '@/components/landing-page/Contact';

import PortfolioCarousel from '@/components/landing-page/PortfolioCarousel';
import MainReel from '@/components/landing-page/MainReel';
import Burtiera from '@/components/landing-page/Burtiera';
import ServicesCards from '@/components/landing-page/ServicesCards';
import Platforms from '@/components/landing-page/Platforms';
import Team from '@/components/landing-page/Team';


const HomePage = () => {


  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <section id="home" className='mb-20'>
      <div className={hero.cover}>
        <StudioHeader />
        <div className={hero.grid}>
          <div className={hero.copy}>
            <div className={hero.eyebrow}>WORLDS WORTH EXPERIENCING</div>
            <h1>We are a <em>full-service</em> XR Creative Studio</h1>
            <p>We design and deliver interactive experiences for education, training, culture and arts.</p>
            <div className={hero.actions}>
              <a className={hero.cta} href="#services">Services <span aria-hidden="true">→</span></a>
              <a className={`${hero.cta} ${hero.call}`} href="#contact">Let&apos;s talk</a>
            </div>
          </div>
          <MainReel />
        </div>
      </div>
      <div className={hero.introduction}>
        <div className={hero.introductionCopy}>
          <p className={hero.lead}>
            At ColorfulCoding, we believe in the power of interactive storytelling to shape the future of digital experiences.
          </p>
          <p>
            Our studio specializes in creating finely-tuned XR solutions tailored for diverse audiences, from the realms of advertising, artistic expression, digital heritage, tourism to various other more applied industries.
          </p>
          <p>
            With a team that balances design, 3D artistry, and development expertise, we focus on building genuine connections, fostering engagement, and delivering meaningful narratives.
          </p>
        </div>
        <IntroLogo></IntroLogo>
      </div>

      <Burtiera></Burtiera>
    </section>
    <section id="services" className={services.section}>
      <h2 className={services.heading}>Our <span>Services</span></h2>


      <div className={services.grid}>
        <Service imgSrc="./icons/digital_heritage.svg" imgAlt="Digital Heritage" content="We turn artifacts, historic sites, and local stories into interactive experiences for museums and cultural destinations.">
          <h3><span>Digital Heritage</span> &amp;<br /> Cultural Storytelling</h3>
        </Service>

        <Service imgSrc="./icons/artistic.svg" imgAlt="Artistic Experiences" content="We work with artists and curators to create virtual worlds and installations that respond to visitors’ movement and participation.">
          <h3><span>Immersive Art</span> &amp;<br /> Interactive Installations</h3>
        </Service>

        <Service imgSrc="./icons/educational_tools.svg" imgAlt="Educational Tools" content="We build simulations where learners can practise procedures, explore complex ideas, and learn by doing.">
          <h3><span>XR Training</span> &amp;<br /> Education</h3>
        </Service>

        <Service imgSrc="./icons/digital_twin.svg" imgAlt="Digital Twins" content="We create interactive models of spaces, equipment, and processes so teams can explore how they work.">
          <h3><span>Digital Twins</span> &amp;<br /> 3D Visualization</h3>
        </Service>
      </div>

    </section>

    <Platforms />

    <section id="projects" className='my-40'>
      <h2 className={services.heading}>Selected <span>Work</span></h2>

      {/* <PortfolioCarousel></PortfolioCarousel> */}
      <ServicesCards></ServicesCards>
    </section>



    <Team></Team>


    <PortfolioLink />
    <Contact></Contact>

  </div >;
};

export default HomePage;
