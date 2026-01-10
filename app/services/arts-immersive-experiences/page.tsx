import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';


const HomePage = () => {
  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20'>
      <h1 className='text-5xl mb-20'>Arts & <br /> <span className='text-orange-500'>Immersive Experiences</span></h1>
      <h2 className="text-3xl">XR Narrative Experiences and Exhibitions</h2>

      <img src="/article-images/collage-arts-1.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Arts Collage" />


      <p className='my-10'>
        The convergence of AR and VR technologies created in the last few years a whole new wave of opportunities for storytelling, documentaries, narrative experiences, and virtual art galleries across various platforms such as mobile devices, Oculus Quest, Apple VisionPro, and other 3D enhanced mediums. These technologies allow creators to craft immersive narratives that transcend traditional boundaries, placing audiences directly within the story or art piece.
      </p>
      <ul className='list-disc pl-10'>
        <li><span className='text-orange-500'>Mobile AR</span> enables users to interact with digital content overlaid onto the real world, blending fiction with reality to create compelling storytelling experiences.</li>
        <li><span className='text-orange-500'>VR</span> on platforms like <span className='text-orange-500'>Meta Quest, HTC Vive or Pico Neo</span> delivers fully immersive environments where viewers can explore virtual worlds and participate in narratives as active participants, enhancing engagement and emotional connection.</li>
        <li><span className='text-orange-500'>XR/MR headsets</span> and other advanced 3D mediums offer high-fidelity experiences ideal for detailed art galleries or cinematic documentaries, providing viewers with a sense of presence and immersion akin to being physically present.</li>
      </ul>
      <br />
      <p>This convergence not only expands creative possibilities but also democratizes access to immersive storytelling, making it a transformative tool for artists, filmmakers, and storytellers to captivate audiences in new and profound ways.</p>

      <h2 className="text-3xl">Augmented Reality - From Markers to Geolocation</h2>

      <img src="/article-images/collage-arts-2.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Arts Collage" />

      <p>Augmented Reality (AR) is reshaping creative expression and user engagement across various applications:</p>
      <br />
      <ul className='list-disc pl-10'>
        <li><span className='text-orange-500'>Room AR</span>: Transforms physical spaces into interactive digital environments, merging virtual elements seamlessly with real-world settings.</li>
        <li><span className='text-orange-500'>Marker Recognition</span>: Enhances educational and storytelling experiences by overlaying digital content onto specific markers or objects, enriching interactive learning and entertainment.</li>
        <li><span className='text-orange-500'>AR Social Media Filters</span>: Offers playful and interactive enhancements for selfies and videos on platforms like Instagram and Snapchat, fostering social engagement through digital effects. </li>
        <li><span className='text-orange-500'>Geolocated AR in Urban Settings</span>: Integrates digital overlays and contextual information into real-world locations, providing users with interactive city guides or immersive location-based experiences.</li>
      </ul>
      <br />
      <p>Artists are harnessing AR across mediums such as drawing, animation, 3D modeling, and AI-generated content to push creative boundaries and engage audiences in innovative ways, through illustrations, 2D animation, 3D experiences or AI-generated content.</p>

      <h2 className="text-3xl mt-16">Theatre Content Creation, Videomapping & Interactive Technologies</h2>
      <img src="/article-images/collage-theatre.png" className='sm:w-full md:w-1/2 m-auto my-8' alt="Theatre, Videomapping, Interactive" />
      <p className="my-10">
        The crossroads of live performance, visual art, and digital technology is rapidly transforming the landscape of theatre and performance spaces. By integrating immersive multimedia with traditional stagecraft, creators design unforgettable, multi-sensory experiences for audiences and performers alike.
      </p>
      <ul className='list-disc pl-10'>
        <li>
          <span className='text-orange-500'>Dynamic Video Mapping</span>: Using projection technology, real-time visuals, and tailored animations, stage sets can be transformed instantly to support mood, narrative, or interactive elements that respond to cues from both the performance and the audience.
        </li>
        <li>
          <span className='text-orange-500'>Interactive Installations & Props</span>: Sensors, motion tracking and AR technologies blur the line between actors, audience, and the digital world. Interactive props and reactive set pieces enable performers to shape and influence digital content as part of the storytelling process.
        </li>
        <li>
          <span className='text-orange-500'>Virtual and Hybrid Theatre Events</span>: Live performances can be shared and interacted with remotely, giving global audiences access to innovative productions and enabling hybrid events that merge in-person energy with digital reach.
        </li>
      </ul>
      <br />
      <p>
        Our team partners with directors, set designers, and visual artists to craft high-impact digital content for the stage—ranging from concept storyboards, 3D/2D assets, generative visuals, to full-scale real-time interactive shows. Whether you're exploring narrative videomapping for a festival, designing AR overlays for experimental theatre, or connecting performers and online viewers in a hybrid event, we specialize in building the technical bridges that empower creative expression and redefine live storytelling.
      </p>

      <h2 className="text-3xl">Technology as a companion</h2>

      <img src="/article-images/collage-arts-3.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Arts Collage" />

      <p>Technology serves as an indispensable companion to art and cultural festivals, enhancing storytelling and theatrical experiences through a variety of means. From augmented reality enriching interactive art installations to virtual reality immersing viewers in dynamic narratives, these technologies redefine traditional boundaries, offering new dimensions of engagement and creativity. Moreover, plain mobile apps, dashboards, and analytics provide organizers with powerful tools for managing events, analyzing attendee feedback, and enhancing operational efficiency. This integration of digital innovation with cultural heritage not only creates memorable experiences but also democratizes access to artistic expression and cultural narratives, fostering broader audience participation and appreciation.</p>
    </div>

    <Contact></Contact>
  </div >;
};

export default HomePage;