import React from 'react';
import TechOrbit from '@/components/TechOrbit';
import RotatingText from '@/components/RotatingText';
import ServicesSection from '@/components/ServicesSection';

export default function Page() {
  return (
    <>
      <div className="sticky top-0 h-screen bg-white text-brand-navy flex flex-col justify-center items-center p-8 pt-24 lg:pt-0 z-0 overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <main className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="text-left flex flex-col items-start justify-center pt-12 lg:pt-0 mt-12 md:mt-20 lg:mt-28">
            <h2 className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-6">
              Welcome to Zeowl Infotech
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.05]">
              <div className="overflow-hidden pb-2">
                <div className="animate-slide-up [animation-delay:4600ms]">ENGINEERING</div>
              </div>
              <div className="overflow-hidden pb-2">
                <div className="animate-slide-up [animation-delay:4800ms]"><RotatingText /></div>
              </div>
              <div className="overflow-hidden pb-2">
                <div className="animate-slide-up [animation-delay:5000ms]">EXPERIENCES</div>
              </div>
            </h1>

            <p className="text-brand-navy/70 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
              We craft premium digital experiences and engineer scalable, automated tech solutions for ambitious brands.
            </p>

            <button className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-full hover:bg-brand-navy shadow-lg shadow-brand-orange/20 hover:shadow-brand-navy/20 transition-all duration-300">
              Start a Project
            </button>
          </div>

          {/* Right Column: Orbiting Tech Stack */}
          <div className="flex items-center justify-center w-full h-full">
            <TechOrbit />
          </div>

        </main>
      </div>

      {/* About Section */}
      {/* About Section */}
      <section id="about" className="bg-[#FCFBF9] w-full min-h-screen flex items-center justify-center py-10 relative overflow-hidden font-sans z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        {/* Background "ZEOWL" huge watermark */}
        <div className="absolute -bottom-20 -right-20 pointer-events-none select-none z-0">
          <span className="text-[20vw] font-bold text-[#EEF1F4]/50 leading-none tracking-tighter">ZEOWL</span>
        </div>

        {/* Ideas into Impact handwritten top right */}
        <div className="absolute top-10 right-20 transform rotate-[332deg] z-10 hidden lg:block scale-75 transform-origin-top-right">
          <div className="animate-handwriting inline-flex flex-col items-center">
            <div className="text-[#FF7A18] text-4xl leading-tight" style={{ fontFamily: 'var(--font-caveat), "Caveat", cursive', fontWeight: 600 }}>
              Ideas<br />into<br />Impact
            </div>
            <svg viewBox="0 0 100 24" className="w-28 mt-0.5" style={{ filter: 'drop-shadow(0 2px 4px rgba(255,122,24,0.15))' }}>
              <path d="M 2 20 C 35 15, 65 5, 98 2 C 65 8, 35 18, 2 20 Z" fill="#FF7A18" />
            </svg>
          </div>
        </div>

        <div className="max-w-[90rem] w-full mx-auto px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            {/* LEFT SIDE */}
            <div className="flex flex-col pr-0 lg:pr-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#FF7A18]"></div>
                <span className="text-[#FF7A18] uppercase tracking-wider text-xs font-bold">ABOUT ZEOWL INFOTECH</span>
              </div>

              <h2 className="text-[#071A35] text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black leading-[1.05] mb-5 tracking-tight">
                WE DON'T JUST BUILD <br />
                <span className="text-[#FF7A18]">DIGITAL PRODUCTS.</span><br />
                <span className="whitespace-nowrap">WE ENGINEER EXPERIENCES.</span>
              </h2>

              <p className="text-[#566579] text-sm leading-relaxed mb-8 max-w-xl">
                Zeowl Infotech is a technology and creative studio focused on building meaningful digital experiences for ambitious businesses. We bring together engineering, design, automation and emerging technologies to transform ideas into scalable digital solutions.
              </p>

              <div className="flex gap-4">
                {/* 01 ENGINEERING */}
                <div className="flex-1 bg-white border border-[#EEF1F4] rounded-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,122,24,0.08)] transition-all duration-300 group cursor-default">
                  <span className="absolute top-4 right-4 text-[#EEF1F4] text-xl font-semibold group-hover:text-[#FF7A18]/20 transition-colors duration-300">01</span>
                  <div className="text-[#FF7A18] mb-3 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
                  <h4 className="text-[#071A35] font-bold text-xs uppercase mb-1.5">ENGINEERING</h4>
                  <p className="text-[#566579] text-[10px] leading-relaxed">Scalable and reliable digital systems built for real-world business needs.</p>
                </div>

                {/* 02 INNOVATION */}
                <div className="flex-1 bg-white border border-[#EEF1F4] rounded-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,122,24,0.08)] transition-all duration-300 group cursor-default">
                  <span className="absolute top-4 right-4 text-[#EEF1F4] text-xl font-semibold group-hover:text-[#FF7A18]/20 transition-colors duration-300">02</span>
                  <div className="text-[#FF7A18] mb-3 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>
                  </div>
                  <h4 className="text-[#071A35] font-bold text-xs uppercase mb-1.5">INNOVATION</h4>
                  <p className="text-[#566579] text-[10px] leading-relaxed">Modern technologies and intelligent solutions that keep businesses ahead.</p>
                </div>

                {/* 03 EXPERIENCE */}
                <div className="flex-1 bg-white border border-[#EEF1F4] rounded-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,122,24,0.08)] transition-all duration-300 group cursor-default">
                  <span className="absolute top-4 right-4 text-[#EEF1F4] text-xl font-semibold group-hover:text-[#FF7A18]/20 transition-colors duration-300">03</span>
                  <div className="text-[#FF7A18] mb-3 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h4 className="text-[#071A35] font-bold text-xs uppercase mb-1.5">EXPERIENCE</h4>
                  <p className="text-[#566579] text-[10px] leading-relaxed">Human-centered digital experiences designed to be simple, useful and memorable.</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Ecosystem) - Scaled Down */}
            <div className="relative w-full aspect-square flex items-center justify-center max-w-[500px] mx-auto scale-90 lg:scale-100">
              {/* Orbital Rings */}
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] border border-[#EEF1F4] rounded-full"></div>
              <div className="absolute inset-0 m-auto w-[65%] h-[65%] border border-[#EEF1F4] border-dashed rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-0 m-auto w-[36%] h-[36%] bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-center border border-[#EEF1F4]/50 z-10">
                <img src="/logo/ZEOWL.png" alt="Zeowl" className="h-24 w-auto object-contain" />
              </div>

              {/* Dotted points / Glows */}
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full animate-[spin_60s_linear_infinite]">
                <div className="absolute top-[-3px] left-1/2 w-1.5 h-1.5 bg-[#FF7A18] rounded-full shadow-[0_0_8px_#FF7A18]"></div>
                <div className="absolute bottom-1/4 right-2 w-1 h-1 bg-[#FF7A18] rounded-full shadow-[0_0_6px_#FF7A18]"></div>
              </div>

              {/* Nodes container */}
              <div className="absolute inset-0 w-full h-full z-20" style={{ animation: 'orbit-spin 40s linear infinite' }}>
                {/* STRATEGY */}
                <div className="absolute w-24 h-24" style={{ top: '17.5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">STRATEGY</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Plan for impact</span>
                    </div>
                  </div>
                </div>
                {/* AI SOLUTIONS */}
                <div className="absolute w-24 h-24" style={{ top: '33.75%', left: '78.145%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">AI SOLUTIONS</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Innovate smarter</span>
                    </div>
                  </div>
                </div>
                {/* AUTOMATION */}
                <div className="absolute w-24 h-24" style={{ top: '66.25%', left: '78.145%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">AUTOMATION</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Work smarter</span>
                    </div>
                  </div>
                </div>
                {/* GROWTH */}
                <div className="absolute w-24 h-24" style={{ top: '82.5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">GROWTH</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Scale together</span>
                    </div>
                  </div>
                </div>
                {/* TECHNOLOGY */}
                <div className="absolute w-24 h-24" style={{ top: '66.25%', left: '21.855%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">TECHNOLOGY</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Build for scale</span>
                    </div>
                  </div>
                </div>
                {/* DESIGN */}
                <div className="absolute w-24 h-24" style={{ top: '33.75%', left: '21.855%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-full h-full" style={{ animation: 'reverse-spin 40s linear infinite' }}>
                    <div className="w-full h-full bg-white rounded-full p-2.5 flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-[#EEF1F4] hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,122,24,0.1)] hover:border-[#FF7A18]/30 transition-all duration-300 cursor-default group">
                      <svg className="text-[#FF7A18] mb-1 transform group-hover:-translate-y-0.5 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                      <span className="text-[#071A35] font-bold text-[9px] group-hover:text-[#FF7A18] transition-colors duration-300">DESIGN</span>
                      <span className="text-[#566579] text-[7px] mt-0.5">Create with purpose</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR PROCESS PANEL - Compact */}
          <div className="flex flex-col lg:flex-row items-center gap-8 pt-6 border-t border-[#EEF1F4]">

            <div className="flex-shrink-0 pr-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-[#FF7A18]"></div>
                <span className="text-[#FF7A18] uppercase tracking-wider text-xs font-bold">OUR PROCESS</span>
              </div>
              <h3 className="text-[#071A35] font-black text-3xl leading-[1.1] tracking-tight">
                FROM IDEA<br />TO IMPACT
              </h3>
            </div>

            <div className="flex-1 w-full flex items-center justify-center gap-6 lg:gap-10 relative">
              {/* Connecting Line */}
              <div className="absolute top-6 left-10 right-10 h-px bg-[#EEF1F4] z-0"></div>

              {/* IDEA */}
              <div className="relative z-10 flex flex-col items-center text-center gap-2.5 w-16">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border-2 border-[#EEF1F4] shadow-sm flex items-center justify-center text-[#EEF1F4] animate-process-node" style={{ animationDelay: '0s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>
                </div>
                <div>
                  <div className="text-[#071A35] font-bold text-[10px]">IDEA</div>
                  <div className="text-[#566579] text-[8px] leading-tight">Understand your vision</div>
                </div>
              </div>

              <div className="relative z-10 bg-[#FCFBF9] px-1 hidden md:block animate-process-arrow" style={{ animationDelay: '0.5s', top: '-14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>

              {/* DESIGN */}
              <div className="relative z-10 flex flex-col items-center text-center gap-2.5 w-16">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border-2 border-[#EEF1F4] shadow-sm flex items-center justify-center text-[#EEF1F4] animate-process-node" style={{ animationDelay: '2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /></svg>
                </div>
                <div>
                  <div className="text-[#071A35] font-bold text-[10px]">DESIGN</div>
                  <div className="text-[#566579] text-[8px] leading-tight">Craft the right solution</div>
                </div>
              </div>

              <div className="relative z-10 bg-[#FCFBF9] px-1 hidden md:block animate-process-arrow" style={{ animationDelay: '2.5s', top: '-14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>

              {/* DEVELOP */}
              <div className="relative z-10 flex flex-col items-center text-center gap-2.5 w-16">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border-2 border-[#EEF1F4] shadow-sm flex items-center justify-center text-[#EEF1F4] animate-process-node" style={{ animationDelay: '4s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </div>
                <div>
                  <div className="text-[#071A35] font-bold text-[10px]">DEVELOP</div>
                  <div className="text-[#566579] text-[8px] leading-tight">Build with precision</div>
                </div>
              </div>

              <div className="relative z-10 bg-[#FCFBF9] px-1 hidden md:block animate-process-arrow" style={{ animationDelay: '4.5s', top: '-14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>

              {/* LAUNCH */}
              <div className="relative z-10 flex flex-col items-center text-center gap-2.5 w-16">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border-2 border-[#EEF1F4] shadow-sm flex items-center justify-center text-[#EEF1F4] animate-process-node" style={{ animationDelay: '6s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                </div>
                <div>
                  <div className="text-[#071A35] font-bold text-[10px]">LAUNCH</div>
                  <div className="text-[#566579] text-[8px] leading-tight">Bring ideas to life</div>
                </div>
              </div>

              <div className="relative z-10 bg-[#FCFBF9] px-1 hidden md:block animate-process-arrow" style={{ animationDelay: '6.5s', top: '-14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </div>

              {/* GROW */}
              <div className="relative z-10 flex flex-col items-center text-center gap-2.5 w-16">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border-2 border-[#EEF1F4] shadow-sm flex items-center justify-center text-[#EEF1F4] animate-process-node" style={{ animationDelay: '8s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                </div>
                <div>
                  <div className="text-[#071A35] font-bold text-[10px]">GROW</div>
                  <div className="text-[#566579] text-[8px]">Scale for a better tomorrow</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <ServicesSection />
    </>
  );
}
