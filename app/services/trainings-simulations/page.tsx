import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';


const HomePage = () => {
  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20'>
      <h1 className='text-5xl mb-20'>Trainings & <br /> <span className='text-orange-500'>Simulations</span></h1>
      
      <video className='md:w-1/2 my-10 mx-auto sm:w-full border-8 border-white rounded-md' autoPlay loop muted src="/article-images/cad_objects.mp4" />


      <h2 className="text-3xl">Employee Training, Guided Work and VR Multiplayer Experiences </h2>
      <p>Employee training and guided work are essential pillars in ensuring workforce competence and productivity, particularly when augmented by AR and VR simulations. These technologies provide immersive, hands-on learning experiences that allow employees to practice skills in realistic scenarios. Guided work further enhances this by offering supervised opportunities for applying newly acquired knowledge, with ongoing analytics providing insights into performance and areas for improvement. Multiplayer functionalities in AR and VR environments facilitate collaborative support and co-working, fostering teamwork and collective problem-solving. By integrating these innovative tools and methodologies, organizations can effectively empower their employees to achieve proficiency, enhance collaboration, and adapt swiftly to the demands of a dynamic workplace environment.</p>

      <img src="/article-images/collage-trainings.png" className='sm:w-full md:w-1/2 mt-20 m-auto' alt="XR Trainings Collage" />

      <h2 className="text-3xl">VR Safety Training</h2>

      <p>VR holds tremendous potential in enhancing workplace safety training, particularly for scenarios involving fires, earthquakes, and other emergencies. By simulating realistic environments and crisis situations, VR allows employees to experience and practice safety protocols in a controlled setting. For instance, workers can navigate through virtual buildings engulfed in flames, learning evacuation routes and fire suppression techniques without physical risk. Similarly, VR can simulate earthquake scenarios, teaching employees how to react swiftly to structural damage and assist colleagues in a crisis. These immersive simulations not only improve procedural knowledge and response times but also enhance situational awareness and decision-making under pressure. By integrating VR into safety training programs, organizations can effectively prepare their workforce to handle emergencies with confidence, ultimately reducing workplace accidents and ensuring a safer work environment overall.</p>

      <video className='md:w-1/2 my-10 mx-auto sm:w-full border-8 border-white rounded-md' autoPlay loop muted src="/article-images/safety.mp4" />


    </div>

    <Contact></Contact>
  </div >;
};

export default HomePage;