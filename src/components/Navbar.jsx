"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out ${
      scrolled ? 'py-4 px-4 md:py-6 md:px-[max(2rem,calc((100vw-1152px)/2))]' : 'py-0 px-0'
    }`}>
      <nav className={`w-full flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-700 ease-in-out
        ${scrolled ? 'bg-white/20 backdrop-blur-lg rounded-full shadow-[0_10px_40px_rgba(6,24,47,0.08)] border border-white/40' : 'bg-white rounded-none border-b border-neutral-100'}
      `}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo/ZEOWL.png" alt="Zeowl" className="h-10 md:h-12 object-contain" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/70">
          <Link href="#about" className="hover:text-brand-orange transition-colors">About Us</Link>
          <Link href="#services" className="hover:text-brand-orange transition-colors">Services</Link>
          <Link href="#work" className="hover:text-brand-orange transition-colors">Work</Link>
        </div>

        {/* CTA */}
        <Link href="#" className="hidden md:inline-flex px-6 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-full shadow-lg shadow-brand-orange/20 hover:bg-brand-navy hover:shadow-brand-navy/20 transition-all">
          Let's Talk
        </Link>
        
        {/* Mobile menu button placeholder */}
        <div className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 cursor-pointer">
            <span className="w-6 h-0.5 bg-brand-navy rounded-full"></span>
            <span className="w-6 h-0.5 bg-brand-navy rounded-full"></span>
        </div>
      </nav>
    </div>
  );
}
