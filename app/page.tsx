import getWritingsMetadata from '@/components/GetWritingsAndTalksMetadata';
import TopNav from '@/components/TopNav';
import Image from 'next/image';

const HomePage = () => {
  const talksMetadata = getWritingsMetadata();

  return <div className='bg-zinc-900 px-2'>
    <TopNav></TopNav>

    {/* VIDEO REEL*/}
    <section id="intro">
      {/* Full height video that autoplays on mute loop */}
      <video className="w-full" src="./video/reel.mp4" autoPlay muted loop></video>
      <h2>
        <span className="accent">ColorfulCoding</span> is a full-service XR creative studio inspired by the potential of emerging technologies.
      </h2>
      <p className='py-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ipsum nisl. Sed volutpat purus ut velit pellentesque, commodo tincidunt dui cursus. Donec imperdiet urna est, vitae dapibus leo mattis nec. Ut augue purus, maximus ultrices lacinia non, venenatis blandit tellus.
      </p>
      <p className='pb-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ipsum nisl. Sed volutpat purus ut velit pellentesque, commodo tincidunt dui cursus.
      </p>

      <Image className='m-auto w-4/5 py-10' src="./icons/icon_short_large.svg" alt="Image 1" width={0} height={0} />

      <div className='text-zinc-900 bg-white font-bold text-lg py-2 burtiera_wrapper_one'>
        <div className='burtiera burtiera-1'>
          <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
        </div>
        <div className='burtiera burtiera-2'>
          <span>XR. VR. TOURISM. EDUCATIONAL. MARKETING. INDUSTRIAL. CULTURAL. </span>
        </div>
      </div>

      <div className='text-zinc-900 bg-orange-500 font-bold text-lg py-2 burtiera_wrapper_two'>
        <div className='burtiera burtiera-1'>
          <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
        </div>
        <div className='burtiera burtiera-2'>
          <span>HOLOLENS. META QUEST. META PRO. ANDROID. IOS. DESKTOP. </span>
        </div>
      </div>
    </section >

    <section className='my-20' style={{ marginTop: "10rem" }} id="services">
      <div className='line upper-line'></div>
      <h1 className='font-bold stroke-text text-zinc-900' style={{ fontSize: "3em" }}>Services</h1>
      <div className='line lower-line'></div>

      <div className='my-20 text-center py-10'>
        <h1><span className='text-orange-500'>3D</span> <br />Product Marketing</h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/product_marketing.svg" alt="Product Marketing" width={0} height={0} />
        <p>Is the use of three-dimensional models, visualizations, and simulations to promote and showcase products in a more engaging and immersive way.</p>
      </div>


      <div className='my-20 text-center'>
        <h1>Immersive <br /><span className='text-orange-500'>Educational Tools</span></h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/educational_tools.svg" alt="Educational Tools" width={0} height={0} />
        <p>Refer to interactive technologies such as AR and VR that create engaging and immersive learning experiences, enabling users to explore and interact with virtual environments for educational purposes.</p>
      </div>


      <div className='my-20 text-center'>
        <h1><span className='text-orange-500'>3D</span> <br /> Digital Heritage</h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/digital_heritage.svg" alt="Digital Heritage" width={0} height={0} />
        <p>Refers to the digitization and preservation of cultural artifacts, historical sites, and objects in three-dimensional models, allowing for immersive exploration, documentation, and study of our rich heritage using digital technology.</p>
      </div>


      <div className='my-20 text-center'>
        <h1>XR <span className='text-orange-500'>Digital Twin</span> <br /> Technologies</h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/digital_twin.svg" alt="Digital Twins" width={0} height={0} />
        <p> Involve the use of extended reality (XR), which encompasses VR, AR, and MR, to create virtual replicas or representations of physical objects, environments, or systems for simulation, analysis, and collaborative purposes.</p>
      </div>


      <div className='my-20 text-center'>
        <h1>XR <span className='text-orange-500'>Artistic <br /> Experiences</span></h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/artistic.svg" alt="Artistic Experiences" width={0} height={0} />
        <p> Encompass the integration of MR technology, combining virtual and real-world elements, to create immersive and interactive artistic encounters that blur the boundaries between physical and digital art forms.</p>
      </div>


      <div className='my-20 text-center'>
        <h1>Social <span className='text-orange-500'>VR World<br /> Building</span></h1>
        <Image className='m-auto my-10 w-2/5' src="./icons/vr_world.svg" alt="World Building" width={0} height={0} />
        <p>Involves the collaborative creation and design of VR environments where users can interact, communicate, and engage with each other, fostering social connections and shared experiences within the virtual world.</p>
      </div>
    </section>

    <section className='my-20'>
      <div className='line upper-line'></div>
      <h1><span className='text-zinc-900 stroke-text'>Writings</span> & <span className="text-orange-500">talks</span></h1>
      <div className='line lower-line'></div>
    </section>

    <section>
      <div className='grid grid-cols-2 gap-4'>
        {talksMetadata.map((talk) => {
          return <div className='writing-element rounded-lg overflow-hidden relative bg-cover aspect-square' style={{ backgroundImage: `url(${talk.cover})` }}>
            <div className='info absolute bg-orange-800 bottom-0 p-2'>
              <h3 className='text-zinc-900 font-bold'>{talk.type}</h3>
              <p className='text-white'>{talk.title}</p>
            </div>
            <div className='more absolute bg-orange-500 bottom-0 p-2 w-full text-center'>
              <a href="">READ MORE &gt;</a>
            </div>
          </div>;
        })}
      </div>
    </section>

    <section className='bg-orange-500 text-zinc-900 text-left mt-20 py-10'>
      <h1 className='text-center w-3/5 m-auto'>Have an idea? <br />
        <span className='text-orange-500 stroke-text-zinc'> Contact Us </span></h1>

      <br />
      <div className='underline text-center text-lg text-white'>
        <a href="">dragos@colorfulcoding.com</a>
      </div>

      <div className="grid grid-cols-4 gap-4 w-3/5 m-auto my-8" style={{height:"50px"}}>
        <div><a className='w-full' href=""><Image className='w-full' src="./icons/linkedin.svg" alt="LinkedIn" width={0} height={0} /></a></div>
        <div><a className='w-full' href=""><Image className='w-full' src="./icons/instagram.svg" alt="Istagram" width={0} height={0} /></a></div>
        <div><a className='w-full' href=""><Image className='w-full' src="./icons/youtube.svg" alt="Youtube" width={0} height={0} /></a></div>
        <div><a className='w-full' href=""><Image className='w-full' src="./icons/tiktok.svg" alt="Tiktok" width={0} height={0} /></a></div>
      </div>

      <p className='text-center text-white'>Made with ♥ in Iași</p>
    
    </section>

  </div >;
};

export default HomePage;