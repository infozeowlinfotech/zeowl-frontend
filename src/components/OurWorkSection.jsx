'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, ArrowRight, Layers, Lightbulb, TrendingUp } from 'lucide-react';

export default function OurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const categories = ['All Projects', 'Web Apps', 'Mobile Apps', 'Design', 'Automation'];
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const projects = [
    {
      id: '01',
      title: 'Sarvakshetra',
      description: 'Learning and placement ecosystem for students, experts and companies.',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-900',
      tech: ['React', 'Next.js', 'Node', 'Figma'],
      imagePlaceholder: 'bg-[#1a2332]'
    },
    {
      id: '02',
      title: 'LMS Platform',
      description: 'Complete learning management system with courses, certificates & live classes.',
      color: 'bg-gradient-to-br from-slate-700 to-slate-900',
      tech: ['Vue', 'Express', 'MongoDB'],
      imagePlaceholder: 'bg-[#111827]'
    },
    {
      id: '03',
      title: 'Business Website',
      description: 'Modern and responsive website for a premium service-based company.',
      color: 'bg-gradient-to-br from-orange-800 to-stone-900',
      tech: ['React', 'Tailwind', 'GSAP'],
      imagePlaceholder: 'bg-[#291e16]'
    },
    {
      id: '04',
      title: 'Fintech Dashboard',
      description: 'Comprehensive financial dashboard with real-time analytics and reporting.',
      color: 'bg-gradient-to-br from-emerald-800 to-teal-900',
      tech: ['Next.js', 'Redux', 'Chart.js'],
      imagePlaceholder: 'bg-[#0f241d]'
    }
  ];

  const numProjects = projects.length;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % numProjects);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + numProjects) % numProjects);

  useGSAP(() => {
    projects.forEach((_, index) => {
      const el = cardRefs.current[index];
      if (!el) return;

      const isCenter = index === activeIndex;
      const isLeft = index === (activeIndex - 1 + numProjects) % numProjects;
      const isRight = index === (activeIndex + 1) % numProjects;

      // Ensure mobile responsiveness in GSAP values
      const isMobile = window.innerWidth < 768;

      if (isCenter) {
        gsap.to(el, {
          xPercent: 0,
          yPercent: 0,
          z: 80,
          rotationY: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
          filter: 'blur(0px) brightness(1.1)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else if (isLeft) {
        gsap.to(el, {
          xPercent: isMobile ? 0 : -60,
          yPercent: 0,
          z: isMobile ? -200 : -100,
          rotationY: isMobile ? 0 : 18,
          rotationZ: isMobile ? 0 : -2,
          scale: isMobile ? 0.8 : 0.82,
          opacity: isMobile ? 0 : 0.6,
          zIndex: 20,
          filter: 'blur(2px) brightness(0.6)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else if (isRight) {
        gsap.to(el, {
          xPercent: isMobile ? 0 : 60,
          yPercent: 0,
          z: isMobile ? -200 : -100,
          rotationY: isMobile ? 0 : -18,
          rotationZ: isMobile ? 0 : 2,
          scale: isMobile ? 0.8 : 0.82,
          opacity: isMobile ? 0 : 0.6,
          zIndex: 20,
          filter: 'blur(2px) brightness(0.6)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else {
        // Hidden cards
        gsap.to(el, {
          xPercent: 0,
          yPercent: 0,
          z: -300,
          rotationY: 0,
          rotationZ: 0,
          scale: 0.5,
          opacity: 0,
          zIndex: 10,
          filter: 'blur(10px) brightness(0.3)',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      }
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    <section className="relative w-full bg-[#fdfdfd] py-20 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(245,126,32,0.04)_0%,transparent_60%)]"></div>
        {/* Subtle curved lines */}
        <svg className="absolute bottom-10 left-0 w-full h-40 opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 -20 480 140 720 60C960 -20 1200 140 1440 60" stroke="#f57e20" strokeWidth="2" strokeDasharray="8 8"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[#f57e20]"></div>
              <span className="text-[#f57e20] font-black tracking-widest text-sm uppercase">OUR WORK</span>
              <div className="w-12 h-[2px] bg-[#f57e20]"></div>
            </div>
            <h2 className="text-[#071a35] text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-4">
              Ideas Turned <br />
              Into <span className="text-[#f57e20]">Real Projects.</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-md">
              A glimpse of the solutions we've built for startups, businesses and growing brands.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 items-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                    ${isActive 
                      ? 'bg-[#f57e20] text-white border-[#f57e20] shadow-lg' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-gray-400'}`}></span>
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div className="relative w-full mb-16 px-2 md:px-12 group">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute top-1/2 left-2 md:left-8 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-[#f57e20] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-8 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-[#f57e20] hover:scale-110 hover:shadow-xl transition-all cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        {/* 3D Scene Container */}
        <div 
          ref={containerRef} 
          className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              className="absolute inset-0 m-auto w-[90%] md:w-[60%] lg:w-[55%] h-[420px] md:h-[500px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] group hover:-translate-y-2 transition-transform duration-500 ease-out"
              style={{ background: '#06182f', transformOrigin: 'center center' }}
            >
              {/* Project Image Mockup */}
              <div className={`w-full h-full relative ${project.imagePlaceholder} overflow-hidden`}>
                 <div className={`absolute inset-0 opacity-40 ${project.color} mix-blend-overlay`}></div>
                 {/* Simulate a UI mockup */}
                 <div className="absolute top-8 left-8 right-8 bottom-32 bg-white/5 backdrop-blur-sm rounded-t-xl border border-white/10 p-4 flex flex-col shadow-2xl">
                    <div className="flex gap-2 mb-4 border-b border-white/5 pb-3">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex gap-4 flex-1">
                       <div className="w-1/4 h-full bg-white/5 rounded-lg hidden md:block"></div>
                       <div className="flex-1 flex flex-col gap-4">
                          <div className="w-full h-32 bg-white/5 rounded-lg"></div>
                          <div className="w-full flex-1 bg-white/5 rounded-lg"></div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Dark Overlay gradient for text readability */}
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#06182f] via-[#06182f]/80 to-transparent"></div>
              </div>

              {/* Bottom Info Panel */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                 <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-[#f57e20] font-bold text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(245,126,32,0.5)]">{project.id}</span>
                       <h3 className="text-white text-2xl md:text-3xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base max-w-sm">
                       {project.description}
                    </p>
                 </div>

                 {/* Tech Stack & Button */}
                 <div className="flex flex-col items-start sm:items-end gap-4 relative z-10">
                    <div className="flex items-center gap-2">
                       <span className="text-gray-400 text-xs font-semibold mr-1">TECH:</span>
                       {project.tech.map((t, i) => (
                          <div key={i} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] text-white/80 backdrop-blur-md">
                             {t}
                          </div>
                       ))}
                    </div>
                    <button className="bg-white hover:bg-[#f57e20] text-[#071a35] hover:text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                       View Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              
              {/* Active Orange Glow */}
              <div className="absolute inset-0 border border-transparent rounded-[24px] pointer-events-none group-hover:border-[#f57e20]/30 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Pagination Details */}
        <div className="relative flex items-center justify-center mb-16 border-t border-gray-200/60 pt-6">
           <div className="flex gap-10">
             {projects.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setActiveIndex(i)}
                 className={`font-bold text-sm pb-2 relative transition-colors ${activeIndex === i ? 'text-[#f57e20]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 0{i + 1}
                 {activeIndex === i && (
                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#f57e20] rounded-full"></span>
                 )}
               </button>
             ))}
           </div>
           
           <div className="absolute right-0 top-0 -translate-y-4 flex flex-col items-end rotate-[-5deg] hidden md:flex">
              <span className="text-[#f57e20] font-bold text-xl" style={{ fontFamily: 'cursive' }}>More Projects <br/> Coming Soon...</span>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 -scale-x-100 text-[#f57e20]">
                <path d="M5 12C5 12 8 4 16 4M16 4L12 8M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-gray-200/60 pt-16">
           <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                 <Layers size={24} />
              </div>
              <div>
                 <h4 className="text-[#071a35] font-black text-lg mb-1">Real Solutions</h4>
                 <p className="text-gray-500 text-sm">Built for actual business needs.</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                 <Lightbulb size={24} />
              </div>
              <div>
                 <h4 className="text-[#071a35] font-black text-lg mb-1">Modern Approach</h4>
                 <p className="text-gray-500 text-sm">Clean design and scalable code.</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f57e20] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                 <TrendingUp size={24} />
              </div>
              <div>
                 <h4 className="text-[#071a35] font-black text-lg mb-1">Growing Impact</h4>
                 <p className="text-gray-500 text-sm">Helping businesses move forward.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
