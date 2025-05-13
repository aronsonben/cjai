import { motion } from "motion/react";
import { useState } from "react"
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MenuLink } from "../components/MenuLink";
import cjaiInterviewThumb from "../assets/cjai_interview_thumbnail.png"
import cjaiBW from '../assets/cjai_bw_keys.png';
import highway from '../assets/img/songart/cjai_highway.jpeg'
import regal from '../assets/img/songart/cjai_regal.png'
import paradigm from '../assets/img/songart/cjai_paradigm.jpg'
import keys from '../assets/img/songart/cjai_keys.png'

export default function EPK() {
  const cjainterviewvid = "https://freelance-cjai.s3.us-east-1.amazonaws.com/Camille+Interview.mp4"
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-2/3 flex items-center justify-center">
        <video
          className="w-full h-full object-cover rounded-none"
          controls
          autoPlay={true}
          poster={cjaiInterviewThumb}
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={cjainterviewvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div 
        className="w-full flex-1 p-4 md:px-8 md:py-4 md:mt-4" 
        style={{ 
          fontFamily: 'Palatino',
          color: '#E6E5DB'
        }}
      >
        <p className="text-lg">
          <span className="text-4xl" style={{fontFamily: 'Milky Vintage'}}>Camille “C.Jai” Scott </span> 
          is a performing/recording artist, multi-instrumentalist, songwriter and producer based in Baltimore, Maryland.</p>
      </div>
      <div 
        className="w-full flex-1 p-4 md:px-8 md:py-4 md:mb-4" 
        style={{ 
          fontFamily: 'Palatino',
          color: '#E6E5DB'
        }}
      >
        <p className="text-lg">
           C.Jai strives to Build Exceptional
            Rapport with each individual she encounters as
            it is her belief that this profoundly optimistic
            principle would yield harmonious living among
            the human race. Today you will find her
            instructing (piano, drums and music
            production) at after school programs
            throughout Baltimore City as well as gigging at
            various venues with The Storage Unit
            Collective.</p>
      </div>
      {/* Creative image grid for desktop, single image for mobile */}
      <div className="w-full max-h-[400px] hidden md:grid md:grid-cols-6 md:grid-rows-2 md:gap-4 md:px-8">
        {/* Tall image */}
        <img src={cjaiBW} alt="" className="row-span-2 col-span-2 object-cover rounded-lg h-full w-full" />
        {/* Wide cropped image, centered vertically */}
        <img src={highway} alt="" className="row-span-1 col-span-3 object-cover object-center rounded-lg h-full w-full" />
        {/* Far right image, extends down to bottom */}
        <img src={regal} alt="" className="row-span-2 col-span-1 object-cover rounded-lg h-full w-full" />
        {/* Short wide image */}
        <img src={paradigm} alt="" className="row-span-1 col-span-3 object-cover object-bottom rounded-lg h-full w-full" style={{gridColumn: '3 / span 3', gridRow: '2'}} />
      </div>
      {/* Mobile: show only the first image */}
      <div className="w-full max-h-[300px] block p-4 md:hidden">
        <img src={cjaiBW} alt="" className="object-cover rounded-lg h-full w-full" />
      </div>
      <div className="w-full flex-1 p-4 md:p-12">
        <p 
          style={{ 
            fontFamily: 'Palatino',
            color: '#E6E5DB'
          }}
        >
        Her creative path began as a TWIGs
        student and her love for musical production
        and writing was further developed through her
        attendance as a percussion major at Baltimore
        School for the Arts. At age 15 she taught
        herself how to record and produce music on
        her iPod. During her ladder teenage years she
        built a home studio, developed her engineering
        skills and began recording tracks that had
        been sitting in the vault for some time.</p>
      </div>
      <div className="w-full h-2/3 flex items-center justify-center">
        <video
          className="w-full h-full object-cover rounded-none"
          controls
          poster={cjaiInterviewThumb}
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={cjainterviewvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full flex-1 p-4 md:p-12">
        <p style={{ 
            fontFamily: 'Palatino',
            color: '#E6E5DB'
          }}
        >
        Her musical inspiration includes Neo-Soul artists
        such as Jill Scott and Musiq Soulchild as well as
        alternative R&B/Hip-Hop artists like Lauryn Hill
        and Pharell.
        </p>
      </div>
    </div>
  )
}