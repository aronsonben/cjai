import { motion, useScroll, useTransform } from "motion/react";
import Spline from "@splinetool/react-spline";
import { useState, useRef } from "react";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MenuLink } from "../components/MenuLink";
import { ArrowLeft, ArrowDown } from "lucide-react"
import Box3D from "../components/Box3D";
import cjaiInterviewThumb from "../assets/cjai_interview_thumbnail.png"
import cjaiBW from '../assets/cjai_bw_keys.png';
import highway from '../assets/img/songart/cjai_highway.jpeg'
import regal from '../assets/img/songart/cjai_regal.png'
import paradigm from '../assets/img/songart/cjai_paradigm.jpg'
import keys from '../assets/img/songart/cjai_keys.png'
import perf25 from '../assets/cjai_perf25.jpeg'
import handdrawnfont from '../assets/cjai_handdrawn_font.png'
import cjaitrippy from '../assets/cjai_trippy.mp4';
import '../index.css'


export default function EPKSauce({ onBack }) {
  const images = [
    { src: cjaiBW, alt: "C.Jai at piano in black and white" },
    { src: highway, alt: "C.Jai highway photoshoot" },
    { src: regal, alt: "C.Jai regal portrait" },
    { src: paradigm, alt: "C.Jai paradigm album art" },
    { src: keys, alt: "C.Jai with keys" },
    { src: perf25, alt: "C.Jai performing in 2025" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="flex items-center justify-center w-screen h-screen sm:max-h-[50vh] sm:w-full">
        <div id="hdr" className="w-full h-full block relative">
          <div id="hdr_bgImg" className="w-full h-full absolute top-0 left-0">
            {/* White overlay */}
            <div className="absolute inset-0 bg-white opacity-10 pointer-events-none" />
            <motion.img
              src={perf25}
              alt="C.Jai Header"
              className="w-full h-full max-w-full max-h-full object-fill sm:object-cover sm:max-h-[50vh]"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 }, cursor: "pointer" }}
            />
          </div>
          <div id="hdr_txt" className="relative top-1/2 text-center z-10">
            <span>
              <h1 id="top-name" className="crew-modern text-[#f9cd91] opacity-100">C. JAI</h1>
            </span>
            <span>
              <motion.h1
                className="crew-modern-outline text-white opacity-80 mt-[-30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{type: "spring", duration: 2, bounce: 0, delay: 0.05}}
              >
                C. JAI
              </motion.h1>
            </span>
            <span>
              <motion.h1
                className="crew-modern-outline text-white opacity-50 mt-[-30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{type: "spring", duration: 2, bounce: 0, delay: 0.3}}
              >
                C. JAI
              </motion.h1>
            </span>
            <span>
              <motion.h1
                className="crew-modern-outline text-white opacity-30 mt-[-30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{type: "spring", duration: 2, bounce: 0, delay: 0.5}}
              >
                C. JAI
              </motion.h1>
            </span>
          </div>
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer"
            style={{ bottom: '10%' }}
            animate={{
                scale: [1, 1, 1],
                y: [0, 10, 0],
                opacity: ["100%", "80%", "100%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            onClick={() => {
              const el = document.getElementById("first-pic");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                const el = document.getElementById("first-pic");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            aria-label="Scroll to bio"
            role="button"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </div>
      <div id="full-bio" className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <p className="inline-block align-middle m-0" style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}>
          Performing artist, multi-instrumentalist, songwriter and producer based in Baltimore, Maryland,
          <img src={handdrawnfont} className="px-2 max-h-6 inline" alt="Handdrawn font" /> 
          is an undeniable force that cannot be stopped as she builds upon her journey. </p>
      </div>
      <div id="first-pic" className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <img src={keys} className="rounded-2xl"></img>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <p 
          className="text-lg md:text-xl"
          style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
        >
          The gumption and vision that fuel <span className="text-[#D8572A] font-semibold">C.Jai</span> both artistically and personally transcend limits. 
          With a passion to embolden listeners to optimize their potential, her music reflects her own journey of growth, self-discovery, and love. 
          Through colorful <span className="text-[#D8572A] font-semibold">compositions</span>, profound <span className="text-[#D8572A] font-semibold">lyricism</span>, and exceptional <span className="text-[#D8572A] font-semibold">musicianship</span>, 
          C.Jai crafts an auditory experience that inspires, uplifts, and embodies the power of possibility.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <video src={cjaitrippy} className="w-[80vw] rounded-2xl" autoPlay muted loop playsInline></video>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <p 
          className="text-lg md:text-xl"
          style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
        >
          At age 14 she taught herself how to record and produce music on her iPod and her love for musical production and writing was further developed through her attendance as a percussion major at Baltimore School for the Arts. 
          During her latter teenage years she built a home studio, developed her engineering skills and began recording tracks that had been sitting in the vault for some time.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <img src={regal} className="w-[80vw] rounded-2xl"></img>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <p 
          className="text-lg md:text-xl"
          style={{ fontFamily: 'Milky Vintage', color: '#E6E5DB' }}
        >
          Today you will find her performing at some of Baltimore's most charming venues such as The Walters Art Museum, Baltimore Center Stage and Keystone Korner.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-2 my-4 px-4">
        <img src={paradigm} className="w-[40vw] rounded-2xl"></img>
        <img src={highway} className="w-[40vw] rounded-2xl"></img>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 my-4 px-4">
        <motion.button
          onClick={onBack}
          className="text-[#E6E5DB] flex items-center gap-2 text-xs px-2 py-1 md:px-3 md:py-2 bg-[#1a1a1a] cursor-pointer rounded-lg border-solid border-[1px] border-transparent md:absolute md:left-0 md:text-lg"
          whileHover={{ scale: 1.05, backgroundColor: "#1a1a1aa8" }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-3 h-3 md:w-6 md:h-6"/> 
          Back
        </motion.button>
      </div>
    </div>
  )

}