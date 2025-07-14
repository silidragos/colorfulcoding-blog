import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';


const HomePage = () => {
  return <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20'>
      <h1 className='text-5xl mb-20'>Practi<span className='text-orange-500'>Mentor</span></h1>

      <h2 className="text-3xl">VR Training that Sticks. Simulations Your Trainees Won’t Forget.</h2>
      <p>PractiMentor delivers AI-powered 3D simulations for critical training — faster, safer, and cheaper than traditional methods.</p>

      <div className='my-20'>
        <h2 className='text-2xl text-center'>Trusted by educators, hospitals, and innovators across Europe</h2>
      </div>

      <div className='my-20 grid grid-cols-3 gap-10'>
        <div>
          <h3 className='text-xl text-orange-500'>THE PAIN</h3>
          <p>Outdated training. Expensive gear. Zero retention.</p>
        </div>
        <div>
          <h3 className='text-xl text-orange-500'>THE SHIFT</h3>
          <p>Immersive VR + smart AI characters = practice without risk</p>
        </div>
        <div>
          <h3 className='text-xl text-orange-500'>THE WIN</h3>
          <p>3× retention. 50 % cost reduction. 10× engagement.</p>
        </div>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>What Makes PractiMentor a Revolution, Not Just a Platform</h2>
        <div className='grid grid-cols-3 gap-10 mt-10'>
          <div>
            <h3 className='text-2xl'>Digital Twin: Your World, Recreated in VR</h3>
            <p>Scan any environment, machine, or system — and train inside its perfect 3D twin.</p>
          </div>
          <div>
            <h3 className='text-2xl'>Multiplayer Collaboration: Train Together. Perform Together.</h3>
            <p>Doctors, technicians, and instructors in different rooms — learning together inside the same scenario.</p>
          </div>
          <div>
            <h3 className='text-2xl'>AI-Powered Characters: Real Reactions. Real Consequences.</h3>
            <p>Train with virtual patients, clients, or trainees — all powered by AI.</p>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>Built for These Fields. Ready for Yours.</h2>
        <div className='grid grid-cols-4 gap-10 mt-10'>
          <div>
            <p className='text-5xl'>👩‍⚕️</p>
            <p>Medical Universities</p>
          </div>
          <div>
            <p className='text-5xl'>👷</p>
            <p>Industry Training</p>
          </div>
          <div>
            <p className='text-5xl'>🎓</p>
            <p>Vocational Schools</p>
          </div>
          <div>
            <p className='text-5xl'>🧑‍🏫</p>
            <p>Trainers & Coaches</p>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>Everything Modern Training Demands — and Then Some.</h2>
        <ul className='grid grid-cols-2 gap-10 mt-10'>
          <li>✅ Goal-Based Learning Paths</li>
          <li>🤖 AI Characters that Respond</li>
          <li>🧪 Customizable Scenarios</li>
          <li>📊 Scoring & Analytics Dashboard</li>
          <li>🌐 No-Code Trainer Control Panel</li>
          <li>🔒 Offline & LAN Hosting for Security</li>
        </ul>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>Pricing</h2>
        <div className='grid grid-cols-3 gap-10 mt-10'>
          <div className='border-2 border-white p-5 rounded-lg'>
            <h3 className='text-2xl'>Starter</h3>
            <p className='text-4xl font-bold'>€499<span className='text-lg font-normal'> / year</span></p>
            <p>Small teams (3 seats)</p>
          </div>
          <div className='border-2 border-orange-500 p-5 rounded-lg'>
            <h3 className='text-2xl'>Pro</h3>
            <p className='text-4xl font-bold'>€1499<span className='text-lg font-normal'> / year</span></p>
            <p>Full access + trainer tools</p>
          </div>
          <div className='border-2 border-white p-5 rounded-lg'>
            <h3 className='text-2xl'>Enterprise</h3>
            <p className='text-4xl font-bold'>Custom</p>
            <p>Schools, Hospitals</p>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>FAQ</h2>
        <div className='grid grid-cols-2 gap-10 mt-10'>
          <div>
            <h3 className='text-xl'>Do I need a headset?</h3>
            <p>No, Web mode included</p>
          </div>
          <div>
            <h3 className='text-xl'>Can I use my own characters?</h3>
            <p>Yes</p>
          </div>
          <div>
            <h3 className='text-xl'>Does it work offline?</h3>
            <p>Yes – secure LAN mode</p>
          </div>
          <div>
            <h3 className='text-xl'>How do I track performance?</h3>
            <p>Analytics dashboard included</p>
          </div>
        </div>
      </div>

    </div>

    <Contact></Contact>
  </div >;
};

export default HomePage;
