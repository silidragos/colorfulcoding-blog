'use client';

import React, { useEffect, useState } from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';
import Lottie from 'react-lottie';

const HomePage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://assets3.lottiefiles.com/packages/lf20_8k9r3psx.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <div className='bg-practimentor-dark text-practimentor-light' style={{ overflow: "hidden", maxWidth: "100%" }}>
    <TopNav></TopNav>
    <div className='my-40 px-20 grid grid-cols-2 gap-10'>
      <div>
        <h1 className='text-5xl mb-20'>Your World. Your Team. Your AI Mentor.</h1>
        <h2 className="text-3xl">All in One Simulation.</h2>
      </div>
      <div>
        {animationData && <Lottie options={defaultOptions} height={400} width={400} />}
      </div>
    </div>
    <div className='my-40 px-20'>
      <p>PractiMentor is a VR Training and Simulation platform that has 3 core principles: Digital Twins for environment, machinery and systems, Multiplayer collaboration on several platforms (VR, ipads, PC) and AI Characters - Clients, Trainers or Pacients.</p>

      <div className='my-20'>
        <h2 className='text-2xl text-center'>Trusted by educators, hospitals, and innovators across Europe</h2>
      </div>

      <div className='my-20 grid grid-cols-3 gap-10'>
        <div>
          <h3 className='text-xl text-practimentor-cyan'>THE PAIN</h3>
          <p>Outdated training. Expensive gear. Zero retention.</p>
        </div>
        <div>
          <h3 className='text-xl text-practimentor-cyan'>THE SHIFT</h3>
          <p>Immersive VR + smart AI characters = practice without risk</p>
        </div>
        <div>
          <h3 className='text-xl text-practimentor-cyan'>THE WIN</h3>
          <p>3× retention. 50 % cost reduction. 10× engagement.</p>
        </div>
      </div>

      <div className='my-20'>
        <h2 className='text-3xl'>What Makes PractiMentor a Revolution, Not Just a Platform</h2>
        <div className='grid grid-cols-3 gap-10 mt-10'>
          <div>
            <h3 className='text-2xl'>Digital Twin: Your World, Recreated in VR</h3>
            <p>Scan any environment, machine, or system — and train inside its perfect 3D twin. No more generic labs. We digitize your location, tools, and processes — down to the screw.</p>
          </div>
          <div>
            <h3 className='text-2xl'>Multiplayer Collaboration: Train Together. Perform Together.</h3>
            <p>Doctors, technicians, and instructors in different rooms — learning together inside the same scenario. Simulate group operations, handovers, or soft skills — all inside your digital world.</p>
          </div>
          <div>
            <h3 className='text-2xl'>AI-Powered Characters: Real Reactions. Real Consequences.</h3>
            <p>Train with virtual patients, clients, or trainees — all powered by AI. They talk back, react to your tone, challenge your assumptions. No scripts. Just dynamic human-like simulation.</p>
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
          <div className='border-2 border-practimentor-light p-5 rounded-lg'>
            <h3 className='text-2xl'>Starter</h3>
            <p className='text-4xl font-bold'>€499<span className='text-lg font-normal'> / year</span></p>
            <p>Small teams (3 seats)</p>
          </div>
          <div className='border-2 border-practimentor-cyan p-5 rounded-lg'>
            <h3 className='text-2xl'>Pro</h3>
            <p className='text-4xl font-bold'>€1499<span className='text-lg font-normal'> / year</span></p>
            <p>Full access + trainer tools</p>
          </div>
          <div className='border-2 border-practimentor-light p-5 rounded-lg'>
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
