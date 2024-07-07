import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';


const HomePage = () => {
  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20'>
      <h1 className='text-5xl mb-20'>Interactive Installations & <br /> <span className='text-orange-500'>Promotional Campaigns</span></h1>
      <h2 className="text-3xl">Innovative strategies for Captivating Audiences and Showcasing Products</h2>

      <video className='md:w-1/2 my-10 mx-auto sm:w-full border-8 border-white rounded-md' autoPlay loop muted src="/article-images/artlink-conference.mp4" />

      <p className='my-10'>
        <span className='text-orange-500'>Public interactive installations, 3D hologram systems and AR/VR technologies</span> are becoming more and more popular between companies all across the industries.
        These technologies offer immersive experiences that not only grab attention but also leave a lasting impression.
        By incorporating augmented reality (AR), virtual reality (VR), or 3D visualizations into your presentations or booth setups, you can effectively showcase products or services in a dynamic and interactive manner.
        <br />This not only enhances understanding but also increases engagement levels significantly, making your brand memorable amidst the bustling environment of a conference or public space.
        Moreover, such cutting-edge approaches demonstrate your company's commitment to innovation and modernity, potentially attracting tech-savvy clients and partners who value forward-thinking solutions.
      </p>
      <br /><br />

      <img src="/article-images/collage-stands-xr.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Stand Collage" />

      <p className='mt-10'>
        From <span className='text-orange-500'>3D AI agents</span> empowered by language models for real-time voice interactions to <span className='text-orange-500'>immersive VR tryouts</span> using branded headsets like <span className='text-orange-500'>Meta Quest</span> or <span className='text-orange-500'>Apple VisionPro</span>, there are numerous compelling use cases for these technologies to help you stand out.
      </p>
      <br />

      <ul className='list-disc pl-10'>
        <li>Companies can engage attendees with interactive experiences where <span className='text-orange-500'>virtual agents</span> provide information or demonstrations, enhancing customer service and product understanding.</li>
        <li> <span className='text-orange-500'>VR tryouts</span> allow potential clients to experience products firsthand in a controlled, branded environment, fostering deeper connections and memorable experiences. </li>
        <li><span className='text-orange-500'>AR-powered free merch</span> can distribute virtual items or promotions tied to physical products, driving both foot traffic and brand engagement. </li>
        <li><span className='text-orange-500'>Video-mapping interactive experiences</span> transform static displays into dynamic showcases, allowing for customizable and engaging content that adapts to viewer interaction. </li>
      </ul>
      <br />
      <p>
        These technologies not only attract attention but also create meaningful interactions that leave a lasting impression, reinforcing brand identity and innovation leadership in competitive market spaces.
      </p>

      <img src="/article-images/collage-stands-xr-2.png" className='sm:w-full md:w-1/2 m-auto' alt="XR Stand Collage" />

      <h2 className="text-3xl">Commercial Advertising and Campaigns</h2>
      
      
      <video className='md:w-1/2 my-10 mx-auto sm:w-full border-8 border-white rounded-md' autoPlay loop muted src="/article-images/TF.mp4" />

      <p>
        XR provides compelling advantages in contemporary marketing strategies:
      </p>
      <ul className='list-disc pl-10'>
        <li><span className='text-orange-500'>AR Packaging</span>: Enhances product visibility and engagement by offering interactive content directly on packaging, such as tutorials, additional product information, or virtual demos, enriching the consumer experience at the point of sale.</li>

        <li><span className='text-orange-500'>VR Promotional Experiences</span>: Create immersive brand interactions in virtual environments where users can explore products, participate in interactive demos, or simulate real-life scenarios, fostering deeper consumer understanding and emotional connections with the brand.</li>

        <li><span className='text-orange-500'>In-Street AR Interactive Installations</span>: Transform urban spaces into interactive platforms where pedestrians can engage with digital overlays, games, or informative displays linked to physical locations, turning everyday walks into memorable brand experiences that reinforce consumer engagement and brand presence. These technologies redefine traditional marketing approaches by offering personalized, interactive experiences that resonate with modern consumers seeking engaging interactions with brands.</li>
      </ul>
    </div>

    <Contact></Contact>
  </div >;
};

export default HomePage;