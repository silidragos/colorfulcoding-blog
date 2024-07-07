import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';


const HomePage = () => {
  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20'>
      <h1 className='text-5xl mb-20'>Tourism & <br /> <span className='text-orange-500'>Cultural Storytelling</span></h1>
      
      <video className='md:w-1/2 my-10 mx-auto sm:w-full border-8 border-white rounded-md' autoPlay loop muted src="/article-images/liminal.mp4" />

      <h2 className="text-3xl">Urban AR Experiences</h2>

      <p>Urban AR experiences offer an innovative way to enhance festivals and uncover the hidden histories of cities by blending digital layers with physical environments. Here’s how they can transform tourism:</p><br />
      <ul>
        <li><span className='text-orange-500'>Museum Artefacts</span>: Digitally archive and present artifacts in virtual exhibitions for global accessibility.</li>
        <li><span className='text-orange-500'>City Monuments</span>: Accurately scan and recreate historical monuments for preservation and educational purposes.</li>
        <li><span className='text-orange-500'>Buildings and Architecture</span>: Document and explore architectural heritage through 3D reconstructions.</li>
        <li><span className='text-orange-500'>Interiors</span>: Capture and present the interiors of significant spaces, offering immersive historical and cultural experiences.</li>
      </ul>

      <img src="/article-images/collage-tourism.png" className='sm:w-full md:w-1/2 mt-20 m-auto' alt="XR Stand Collage" />

      <hr className='my-20'></hr>

      <h2 className="text-3xl">XR Narrative Experiences and Exhibitions</h2>

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

      <img src="/article-images/collage-arts-1.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Arts Collage" />

      <hr className='my-20'></hr>

      <h2 className="text-3xl">Digital Heritage</h2>

      <p>The opportunity of digital heritage lies in the ability to preserve and share cultural artifacts, monuments, and historical buildings through advanced technologies such as 3D scanning and recreation. Museums can digitally archive their collections, allowing for virtual exhibitions that transcend physical limitations and reach global audiences. Similarly, city monuments and historical buildings can be accurately scanned and recreated in 3D, preserving architectural heritage and enabling immersive experiences for virtual tourism and education. Interior spaces of significance, from ancient temples to modern landmarks, can also be documented and presented in interactive digital formats, providing insights into historical and cultural contexts. This fusion of digital technology with cultural preservation not only ensures the conservation of our collective heritage but also opens up new avenues for exploration and appreciation across diverse audiences. Some opportunities of Digital Heritage with 3D Scanning and such are:</p>
      <br />
      <ul className='list-disc pl-10'>
        <li><span className='text-orange-500'>Museum Artefacts</span>: Digitally archive and present artifacts in virtual exhibitions for global accessibility.</li>
        <li><span className='text-orange-500'>City Monuments</span>: Accurately scan and recreate historical monuments for preservation and educational purposes.</li>
        <li><span className='text-orange-500'>Buildings and Architecture</span>: Document and explore architectural heritage through 3D reconstructions.</li>
        <li><span className='text-orange-500'>Interiors</span>: Capture and present the interiors of significant spaces, offering immersive historical and cultural experiences.</li>
      </ul>

      <img src="/article-images/collage-scans.png" className='sm:w-full my-20 md:w-1/2 m-auto' alt="XR Arts Collage" />


    </div>

    <Contact></Contact>
  </div >;
};

export default HomePage;