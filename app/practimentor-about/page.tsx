import React from 'react';
import TopNav from '@/components/TopNav';
import Contact from '@/components/landing-page/Contact';
import Image from 'next/image';

const PractiMentorAboutPage = () => {
  return (
    <div className='bg-zinc-900' style={{ overflow: "hidden", maxWidth: "100%" }}>
      <TopNav />
      <div className='my-40 px-20'>
        <h1 className='text-5xl mb-20'>
          PractiMentor- Platformă modulară de training VR <br />
          <span className='text-orange-500'>asistat de AI</span>
        </h1>

        <p className="text-lg text-zinc-300 mb-10 text-center">
          Data publicării: 17-Martie-2026
        </p>

        <div className='my-10'>
          <Image
            src="/images/Site anunt.png"
            alt="PractiMentor - Platformă modulară de training VR asistat de AI"
            width={1200}
            height={675}
            className="sm:w-full md:w-3/4 mx-auto rounded-lg border-8 border-white"
          />
        </div>

        <div className='prose prose-invert max-w-none'>
          <p className='text-lg leading-relaxed my-6'>
            Proiectul &quot;PractiMentor- Platformă modulară de training VR asistat de AI&quot;, cod MySMIS 342933, finanțat prin Programul Regional Nord-Est 2021-2027 este implementat de către SM COLORFUL CODING S.R.L. și are o valoare totală de 343.353,38 LEI, din care 274.682,7 LEI reprezintă finanțare nerambursabilă. Programul Regional 2021-2027 este implementat la nivel regional de către ADR Nord Est în calitate de Autoritate de Management, ce monitorizează implementarea acestui proiect în Regiunea Nord Est. Proiectul este prevăzut a se derula în perioada 09.02.2026-08.02.2027.
          </p>

          <p className='text-lg leading-relaxed my-6'>
            Obiectivul general al proiectului este dezvoltarea unui concept funcțional de platformă inovativă de training în realitate virtuală, care să integreze scenarii educaționale (universitare, corporative și industriale) modulare, capabile să ofere utilizatorilor experiențe de învățare personalizabile, interactive, multiplatformă și cu capabilități multiplayer, cu scopul de a transforma experiența educațională din Regiunea Nord-Est într-una interactivă, accesibilă și sustenabilă, în concordanță cu direcțiile de specializare inteligentă RIS3.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Obiectivele specifice ale proiectului sunt:</h2>
          <ul className='list-disc pl-10 space-y-4 text-lg leading-relaxed'>
            <li>
              <span className='text-orange-500 font-medium'>O1.</span> Explorarea, și modularizarea capabilităților 3D/VR pentru a crea scenarii 3D/VR specifice educației și industriei, prin dezvoltarea unui sistem flexibil de construcție și personalizare a conținutului, adaptat diverselor nevoi de instruire.
            </li>
            <li>
              <span className='text-orange-500 font-medium'>O2.</span> Implementarea platformei de bază, care să permită conectivitatea trainer–student, funcționalități multiplayer și suport multi-platformă (VR, PC, tabletă), asigurând astfel un cadru tehnic robust pentru desfășurarea sesiunilor de training interactive.
            </li>
            <li>
              <span className='text-orange-500 font-medium'>O3.</span> Integrarea cu agenți conversaționali AI, pentru a oferi utilizatorilor suport contextual și feedback personalizat în timp real, cu scopul de a îmbunătăți interactivitatea și eficiența procesului de instruire în scenariile VR.
            </li>
          </ul>

          <hr className="my-12" />

          <p className="text-sm leading-relaxed my-4">
            Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați{' '}
            <a href="https://mfe.gov.ro/" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">
              https://mfe.gov.ro/
            </a>.
          </p>

          <p className="text-sm leading-relaxed my-4">
            <span className="font-semibold">Aproape de tine</span> –{' '}
            <a href="https://www.regionordest.ro" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">
              www.regionordest.ro
            </a>{' '}
            |{' '}
            <a href="https://www.facebook.com/Regio.NordEst.ro" className="text-orange-500 underline" target="_blank" rel="noopener noreferrer">
              facebook.com/Regio.NordEst.ro
            </a>
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PractiMentorAboutPage;
