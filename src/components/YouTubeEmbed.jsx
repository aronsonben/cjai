import { motion } from "motion/react";
import { useState } from "react";
import { Play } from "lucide-react";
import cjaibw from '../assets/cjai_bw_keys.png'

export const YouTubeEmbed = ({ isPlaying, setIsPlaying }) => {

  return isPlaying ? (
    <iframe 
      className="w-full aspect-video rounded-lg"
      src="https://www.youtube.com/embed/mbGDDGKc7Eg?si=0gZhBQ8kSms3jtmY&autoplay=1"
      title="CJai YouTube Embed"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  ) : (
    <motion.div 
      className="w-full aspect-video relative cursor-pointer rounded-[30px]"
      onClick={() => setIsPlaying(true)}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      whileHover={{
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
        transition: { duration: 0.3 }
      }}
    >
      <img 
        src={cjaibw}
        alt="Video thumbnail of CJai"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center rounded-[30px]">
        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
          <Play color="#1c1c1c" strokeWidth={2} /> 
        </div>
      </div>
    </motion.div>
  );
};