import { motion } from "motion/react";
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import highway from '../assets/img/songart/cjai_highway.jpeg'
import regal from '../assets/img/songart/cjai_regal.png'
import paradigm from '../assets/img/songart/cjai_paradigm.jpg'
import keys from '../assets/img/songart/cjai_keys.png'

export default function Music({ onBack }) {
  const albums = [
    { id: 1, title: "Paradigm Shift (feat. Lixxxtheprophet)", cover: paradigm, link: "https://distrokid.com/hyperfollow/cjai/paradigm-shift-feat-lixxtheprophet/" },
    { id: 2, title: "Highway", cover: highway, link: "https://linktr.ee/C.jai" },
    { id: 3, title: "Regal", cover: regal, link: "https://linktr.ee/C.jai" },
  ]

  return (
    <motion.div
      id="music-container"
      className="w-full h-fit flex flex-col justify-start items-start gap-8 md:gap-20 p-4 pb-8 md:pt-0 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="music-header" className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative w-full">
        <motion.button
          onClick={onBack}
          className="text-[#E6E5DB] flex items-center gap-2 text-xs px-2 py-1 md:px-3 md:py-2 bg-[#1a1a1a] cursor-pointer rounded-lg border-solid border-[1px] border-transparent md:absolute md:left-0 md:text-lg"
          whileHover={{ scale: 1.05, backgroundColor: "#1a1a1aa8" }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <ArrowLeft className="w-3 h-3 md:w-6 md:h-6"/> */}
          Back
        </motion.button>
        <h1 className="text-[#E6E5DB] text-4xl font-bold">Trax</h1>
      </div>
      
      <div id="album-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <motion.a 
            key={album.id} 
            href={album.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <motion.img 
              src={album.cover} 
              alt={album.title} 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
                transition: { duration: 0.3 }
              }}
            />
            <h2 className="text-[#E6E5DB] text-center text-2xl">{album.title}</h2>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
