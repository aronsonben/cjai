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
    { src: keys, alt: "C.Jai with keys" }
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
            Performing artist, multi-instrumentalist, songwriter and producer from Baltimore, Maryland
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

      {/* Live Performance Section */}
      <Section className="py-20 px-8 md:px-16" delay={0.35}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-center"
            style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Live Performance
          </motion.h2>
          
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="w-full h-auto object-cover"
              controls
              poster={cjaiInterviewThumb}
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source src={cjaiperformancevid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          
          <motion.p 
            className="text-center text-lg md:text-xl mt-6 opacity-80"
            style={{ fontFamily: 'Palatino', color: '#E6E5DB' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            C.Jai performing live with The Storage Unit Collective
          </motion.p>
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
              src={cjaiBW} 
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
              src={cjaiBW} 
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
              
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E6E5DB] rounded-full flex items-center justify-center text-[#32372F] text-xl hover:bg-[#D8572A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📧
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E6E5DB] rounded-full flex items-center justify-center text-[#32372F] text-xl hover:bg-[#D8572A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  🎵
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E6E5DB] rounded-full flex items-center justify-center text-[#32372F] text-xl hover:bg-[#D8572A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📱
                </motion.a>
              </div>
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
