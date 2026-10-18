'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '@/public/images/logo-light.png';

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-head${solid ? ' solid' : ''}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Workco home">
          <Image src={logo} alt="Workco premium coworking spaces" width={99} height={32} priority />
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#space">The space</a>
          <a href="#plans">Plans</a>
          <a href="#meet">Meeting rooms</a>
          <a href="#cabins">Cabins</a>
        </nav>
        <a className="head-cta" href="/workco-brochure.pdf" download="Workco-Brochure.pdf" aria-label="Download the Workco brochure (PDF)">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v9M4 7l4 4 4-4M3 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Brochure
        </a>
      </div>
    </header>
  );
}
