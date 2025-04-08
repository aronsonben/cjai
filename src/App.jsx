import { motion } from "motion/react"
import { useState } from "react"
import textured from './assets/textured_bkg_green.png'
import Home from "./pages/Home";
import Music from './pages/Music'
import Contact from './pages/Contact'
import { YouTubeEmbed } from "./components/YouTubeEmbed";
import { MenuLink } from "./components/MenuLink";
import headerfont2 from './assets/cjai_headerfont-retrocursive2.2.png'
import './App.css'

const HeaderStyle = ({ type }) => {
  return type == "text" ? (
    <motion.h1
      id="cjai-brand-text"
      className="!text-[84px] md:!text-[84px]"
      style={{ 
        fontFamily: 'Milky Vintage',
        color: '#E6E5DB',
        letterSpacing: '0.1em',
        filter: 'drop-shadow(4px 4px 1px #D8572A)' 
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      transformTemplate={({ x, rotate }) => `skewX(-12deg)`}
    >
      C.Jai
    </motion.h1>
  ) : (
    <img 
      src={headerfont2} 
      alt="C.Jai Header" 
      className="max-h-24" 
    />
  )
}

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      id="main-container" 
      className="flex flex-col w-screen h-screen"
      style={{
        backgroundImage: `url("${textured}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header Section */}
      <header className="w-full flex justify-start items-center p-4 md:p-8">
        <div className="flex justify-center md:justify-start">
          <HeaderStyle type="image" />
        </div>
      </header>
      
      {/* Content Section */}
      <main className="flex-1 w-full overflow-auto">
        {currentView === "home" ? (
          <div id="home-container" className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center gap-4 p-4 pb-8 md:pt-0 md:p-12">
            <motion.div 
              id="text-menu" 
              className="flex-1/2 flex flex-col justify-center items-center gap-8 text-4xl"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1 }}
              whileInView={{ opacity: 1 }}
            >
              <MenuLink text="Music" onClick={() => setCurrentView("music")} />
              <MenuLink text="EPK" href="https://erapport.club/" onClick={() => {}} />
              <MenuLink text="E. Rapport" href="https://erapport.club/" onClick={() => {}} />
              <MenuLink text="Contact" onClick={() => setCurrentView("contact")} />
            </motion.div>
            <motion.div 
              id="youtube-embed" 
              className="w-full flex-1/2 max-w-3/4 flex flex-col justify-center items-center gap-4 rounded-[30px]"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
            >
              <YouTubeEmbed isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </motion.div>
          </div>
        ) : currentView === "music" ? (
          <Music onBack={() => setCurrentView("home")} />
        ) : currentView === "contact" ? (
          <Contact onBack={() => setCurrentView("home")} />
        ) : (
          <div>
            <p>Whoops!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
