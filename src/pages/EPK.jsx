import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react"
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MenuLink } from "../components/MenuLink";
import cjaiInterviewThumb from "../assets/cjai_interview_thumbnail.png"
import cjaiBW from '../assets/cjai_bw_keys.png';
import highway from '../assets/img/songart/cjai_highway.jpeg'
import regal from '../assets/img/songart/cjai_regal.png'
import paradigm from '../assets/img/songart/cjai_paradigm.jpg'
import keys from '../assets/img/songart/cjai_keys.png'
import perf25 from '../assets/cjai_perf25.jpeg'

// Lightbox component for image gallery
function ImageLightbox({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      />
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
      >
        ✕
      </button>
    </motion.div>
  );
}

// Section wrapper with scroll animations
function Section({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
}

export default function EPK() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cjainterviewvid = "https://freelance-cjai.s3.us-east-1.amazonaws.com/Camille+Interview.mp4"
  const cjaiperformancevid = "https://freelance-cjai.s3.us-east-1.amazonaws.com/CJai_Performance.mp4"

  const images = [
    { src: cjaiBW, alt: "C.Jai at piano in black and white" },
    { src: highway, alt: "C.Jai highway photoshoot" },
    { src: regal, alt: "C.Jai regal portrait" },
    { src: paradigm, alt: "C.Jai paradigm album art" },
    { src: keys, alt: "C.Jai with keys" },
    { src: perf25, alt: "C.Jai performing in 2025" },
  ];

  return (
    <div ref={containerRef} className="w-screen min-h-screen bg-[#32372F] relative overflow-x-hidden">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#D8572A] z-40 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section with Video */}
      <Section className="h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#32372F]/80 z-10" />
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay={true}
          muted
          poster={cjaiInterviewThumb}
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={cjainterviewvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero overlay content */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 
            className="text-6xl md:text-8xl mb-4"
            style={{ 
              fontFamily: 'Milky Vintage', 
              color: '#E6E5DB',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            C.Jai
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-2xl"
            style={{ 
              fontFamily: 'Palatino', 
              color: '#E6E5DB',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}
          >
            Performing artist, multi-instrumentalist, songwriter and producer based in Baltimore, Maryland
          </p>
        </motion.div>
      </Section>

      {/* Story Section */}
      <Section className="py-20 px-8 md:px-16" delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-center"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            The Story
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p 
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
              >
                C.Jai strives to <span className="text-[#D8572A] font-semibold">Build Exceptional Rapport</span> with each individual she encounters as 
                it is her belief that this profoundly optimistic principle would yield harmonious 
                living among the human race.
              </p>
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
              >
                Today you will find her instructing (piano, drums and music production) at after 
                school programs throughout Baltimore City as well as gigging at various venues 
                with <span className="text-[#D8572A] font-semibold">The Storage Unit Collective</span>.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={cjaiBW} 
                alt="C.Jai at piano" 
                className="w-full rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(images[0])}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Origins Section */}
      <Section className="py-20 px-8 md:px-16 bg-gradient-to-r from-[#32372F] to-[#2a2f26]" delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-center"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Origins
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img 
                src={keys} 
                alt="C.Jai with keys" 
                className="w-full rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightboxImage(images[4])}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
              >
                Her creative path began as a TWIGs student and her love for musical production 
                and writing was further developed through her attendance as a percussion major at 
                <span className="text-[#D8572A] font-semibold">Baltimore School for the Arts.</span> 
                At age 15 she taught herself how to record and produce music on her iPod. During her latter teenage years she built a home studio, 
                developed her engineering skills and began recording tracks that had been sitting 
                in the vault for some time.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Visual Gallery Section */}
      <Section className="py-20 px-8 md:px-16" delay={0.4}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-center"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Visuals
          </motion.h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-6 h-[500px]">
            {/* Regal Album Art - Links to music */}
            <motion.a
              href="https://linktr.ee/C.jai"
              target="_blank"
              rel="noopener noreferrer"
              className="row-span-2 col-span-1 relative group block h-full w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src={regal} 
                alt="C.Jai Regal album art" 
                className="object-cover rounded-lg h-full w-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Regal
                </span>
              </div>
            </motion.a>
            
            {/* Paradigm Album Art - Links to music */}
            <motion.a
              href="https://distrokid.com/hyperfollow/cjai/paradigm-shift-feat-lixxtheprophet/"
              target="_blank"
              rel="noopener noreferrer"
              className="row-span-1 col-span-2 relative group block h-full w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={paradigm} 
                alt="C.Jai Paradigm Shift album art" 
                className="object-cover object-[0px_-105px] rounded-lg h-full w-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Paradigm Shift
                </span>
              </div>
            </motion.a>
            
            {/* Portrait photo - Opens lightbox */}
            <motion.img 
              src={perf25} 
              alt="C.Jai portrait" 
              className="row-span-2 col-span-1 object-cover rounded-lg h-full w-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              onClick={() => setLightboxImage(images[0])}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            {/* Highway Album Art - Links to music */}
            <motion.a
              href="https://linktr.ee/C.jai"
              target="_blank"
              rel="noopener noreferrer"
              className="row-span-1 col-span-2 relative group block h-full w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={highway} 
                alt="C.Jai Highway album art" 
                className="object-cover object-[0px_-105px] rounded-lg h-full w-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Highway
                </span>
              </div>
            </motion.a>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden space-y-6">
            {/* Regal Album */}
            <motion.a
              href="https://linktr.ee/C.jai"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src={regal} 
                alt="C.Jai Regal album art" 
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Regal
                </span>
              </div>
            </motion.a>
            
            {/* Highway Album */}
            <motion.a
              href="https://linktr.ee/C.jai"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={highway} 
                alt="C.Jai Highway album art" 
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Highway
                </span>
              </div>
            </motion.a>
            
            {/* Paradigm Album */}
            <motion.a
              href="https://distrokid.com/hyperfollow/cjai/paradigm-shift-feat-lixxtheprophet/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={paradigm} 
                alt="C.Jai Paradigm Shift album art" 
                className="w-full h-64 object-cover z-100 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Palatino' }}>
                  Listen to Paradigm Shift
                </span>
              </div>
            </motion.a>
            
            {/* Portrait photos - Open lightbox */}
            <motion.img 
              src={perf25} 
              alt="C.Jai portrait" 
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              onClick={() => setLightboxImage(images[0])}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            
            {/* Keys photo - Open lightbox */}
            <motion.img 
              src={keys} 
              alt="C.Jai with keys" 
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
              onClick={() => setLightboxImage(images[4])}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>
        </div>
      </Section>

      {/* Influences Section */}
      <Section className="py-20 px-8 md:px-16 bg-gradient-to-l from-[#32372F] to-[#2a2f26]" delay={0.5}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Influences
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl leading-relaxed"
            style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Her musical inspiration includes Neo-Soul artists such as{' '}
            <span className="text-[#D8572A] font-semibold">Jill Scott</span> and{' '}
            <span className="text-[#D8572A] font-semibold">Musiq Soulchild</span> as well as 
            alternative R&B/Hip-Hop artists like{' '}
            <span className="text-[#D8572A] font-semibold">Lauryn Hill</span> and{' '}
            <span className="text-[#D8572A] font-semibold">Pharrell</span>.
          </motion.p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-20 px-8 md:px-16" delay={0.6}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Connect
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p 
              className="text-lg md:text-xl"
              style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
            >
              For booking, collaborations, and press inquiries
            </p>
            
            <div id="contact-icons" className="flex items-center justify-center gap-8 my-8">
              {/* SVG Gradient Definition (hidden, but referenced by all icons) */}
              <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="100%" stopColor="#E6E5DB" />
                    <stop offset="100%" stopColor="#D8572A" />
                  </linearGradient>
                  <motion.filter id="icon-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="4" dy="4" stdDeviation="0" floodColor="#D8572A" floodOpacity="0.5"/>
                  </motion.filter>
                </defs>
              </svg>
              <div className="w-6 h-6 md:w-6 md:h-6">
                <a href="https://www.instagram.com/c.jai00/?hl=en">
                  <motion.svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#icon-gradient)" filter="url(#icon-shadow)" whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0 } }} exit={{ opacity: 0 }}>
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                  </motion.svg>
                </a>
              </div>
              <div className="w-6 h-6 md:w-6 md:h-6">
                <a href="https://twitter.com/_cjai00">
                  <motion.svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#icon-gradient)" filter="url(#icon-shadow)" whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} exit={{ opacity: 0 }}>
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </motion.svg>
                </a>
              </div>
              <div className="w-6 h-6 md:w-6 md:h-6">
                <a href="https://open.spotify.com/album/0Nea3OUytRyX7oLLrStFqw?highlight=spotify:track:6wSciVDs4ZM3uYsuVuAwUQ">
                  <motion.svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#icon-gradient)" filter="url(#icon-shadow)" whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }} exit={{ opacity: 0 }}>
                    <title>Spotify</title>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </motion.svg>
                </a>
              </div>
              <div className="w-6 h-6 md:w-6 md:h-6">
                <a href="https://music.apple.com/us/album/highway-single/1535534212">
                  <motion.svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#icon-gradient)" filter="url(#icon-shadow)" whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }} exit={{ opacity: 0 }}>
                    <title>Apple Music</title>
                    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/>
                  </motion.svg>
                </a>
              </div>
              <div className="w-6 h-6 md:w-6 md:h-6">
                <a href="https://tidal.com/browse/track/17271458">
                  <motion.svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="url(#icon-gradient)" filter="url(#icon-shadow)" whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }} exit={{ opacity: 0 }}>
                    <title>Tidal</title>
                    <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/>
                  </motion.svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="mailto:contact@cjai.com"
                className="px-8 py-3 bg-[#D8572A] text-white rounded-full text-lg font-semibold hover:bg-[#c14a24] transition-colors"
                style={{ fontFamily: 'Palatino' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-[#E6E5DB]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-sm opacity-70"
            style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
          >
            © 2025 C.Jai. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      <ImageLightbox 
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  )
}
