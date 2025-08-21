import { motion } from "motion/react";
import { useState } from "react"
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MenuLink } from "../components/MenuLink";

export default function Home() {
  const handleClick = (e, onClick) => {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen justify-around items-center gap-4 p-4 md:p-12">
    <motion.div 
        id="text-menu" 
        className="flex-1/2 flex flex-col justify-center items-center gap-8 text-4xl"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <MenuLink text="Trax" />
        <MenuLink text="EPK" />
        <MenuLink text="BERi" />
        <MenuLink text="Contact" />
      </motion.div>
      <motion.div 
        id="youtube-embed" 
        className="w-full flex-1/2 max-w-3/4 flex flex-col justify-center items-center gap-4 rounded-[30px] pt-[115px] md:pt-0"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <YouTubeEmbed />
      </motion.div>
    </div>
  )
}