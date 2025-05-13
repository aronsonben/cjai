import { useState, useEffect, useRef } from "react"
import { motion, animate, stagger } from "motion/react"
import { splitText } from "motion-plus"
import textured from './assets/textured_bkg_green.png'
import Music from './pages/Music'
import Contact from './pages/Contact'
import EPK from './pages/EPK'
import { YouTubeEmbed } from "./components/YouTubeEmbed";
import { MenuLink } from "./components/MenuLink";
import headerfont2 from './assets/cjai_headerfont-retrocursive2.2.png'
import headerfontOG from './assets/cjai_original_font.png'
import handdrawnfont from './assets/cjai_handdrawn_font.png'
import headerfontOGorange from './assets/cjai_original_font_org.png'
import './App.css'


function HideBox() {
  return (
    <motion.div 
      className="absolute top-[50%] left-0 w-full h-[300px] z-10"
      style={{
        backgroundImage: `url("${textured}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
      initial={{ opacity: 1, height: "100%"}}
      animate={{ height: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
  )
}

function SplitText() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      document.fonts.ready.then(() => {
          if (!containerRef.current) {
            console.log("ref not loaded");
            return;
          }

          // Hide the container until the fonts are loaded
          containerRef.current.style.visibility = "visible"

          const { words } = splitText(
              containerRef.current.querySelector("h1")
          )

          // Animate the words in the h1
          animate(
              words,
              { opacity: [0, 1], y: [10, 0] },
              {
                  type: "spring",
                  duration: 2,
                  bounce: 0,
                  delay: stagger(0.05),
              }
          )
      })
  }, [])

  return (
      <div className="container" ref={containerRef}>
          <motion.h1
            id="cjai-brand-text2"
            className="h1 !text-[84px] md:!text-[84px]"
            style={{ 
              fontFamily: 'Hoper Begin',
              color: '#E6E5DB',
              letterSpacing: '0.1em',
              filter: 'drop-shadow(4px 4px 1px #D8572A)' 
            }}
          >
            C.Jai
          </motion.h1>
      </div>
  )
}

const HeaderStyle = ({ type }) => {
  return type == "text" ? (
    <motion.h1
      id="cjai-brand-text"
      className="!text-[84px] md:!text-[84px]"
      style={{ 
        fontFamily: 'Hoper Begin',
        color: '#E6E5DB',
        letterSpacing: '0.1em',
        filter: 'drop-shadow(4px 4px 1px #D8572A)' 
      }}
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      transformTemplate={({ x, rotate }) => `skewX(-12deg)`}
    >
      C.Jai
    </motion.h1>
  ) : type == "image" ? (
    <img 
      src={headerfont2} 
      alt="C.Jai Header" 
      className="max-h-24" 
    />
  ) : (
    <div className="flex items-center justify-center">
      <SplitText />
    </div>
  )
}

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null)

  useEffect(() => {
      document.fonts.ready.then(() => {
          if (!containerRef.current) return

          // Hide the container until the fonts are loaded
          containerRef.current.style.visibility = "visible"

          const { words } = splitText(
              containerRef.current.querySelector("h1")
          )

          // Animate the words in the h1
          animate(
              words,
              { opacity: [0, 1], x: [-50, 0] },
              {
                  type: "spring",
                  duration: 2,
                  bounce: 0,
                  delay: stagger(0.05),
              }
          )
      })
  }, [])

  const shape = {
    strokeWidth: 3,
    strokeLinecap: "round",
    fill: "transparent",
}

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 0.75,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
  }

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
      {currentView != "epk" && (
        <header className="w-full flex justify-center items-center p-4 pt-8 md:justify-start md:p-8">
          <div className="flex justify-center md:justify-start" ref={containerRef}>
          {/* <motion.h1
            id="cjai-brand-text"
            className="!text-[84px] md:!text-[84px]"
            style={{ 
              fontFamily: 'Hoper Begin',
              color: '#E6E5DB',
              letterSpacing: '0.1em',
              filter: 'drop-shadow(4px 4px 1px #D8572A)' 
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            >
              C.Jai
            </motion.h1> */}
            {/* <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 20"
              className="absolute w-[25%] top-[15%] left-[57%] md:absolute md:w-[10%] md:top-[12%] md:left-[21%] squiggly-line"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M0 10 Q 25 0, 50 10 T 100 10"
                fill="transparent"
                stroke="#D8572A"
                strokeWidth="2"
                strokeLinecap="round"
                variants={draw}
                custom={1}
                style={shape}
              />
            </motion.svg> */}
            <motion.img 
              src={handdrawnfont} 
              alt="C.Jai Header" 
              className="max-h-20 md:max-h-20" 
              onClick={() => setCurrentView("home")}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 }, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </header>
      )}

      {/* Content Section */}
      <main className="flex-1 w-full overflow-auto">
        {currentView === "home" ? (
          <div id="home-container" className="flex flex-col-reverse md:flex-row w-full h-full justify-around items-center gap-4 p-4 pb-8 md:pt-0 md:p-12">
            <motion.div 
              id="text-menu" 
              className="flex-1/2 flex flex-col justify-center items-center gap-8 text-4xl"
            >
              <MenuLink text="Music" onClick={() => setCurrentView("music")} delay={0.05} />
              <MenuLink text="EPK" onClick={() => setCurrentView("epk")} delay={0.1} />
              <MenuLink text="E. Rapport" href="https://erapport.club/" onClick={() => {}} delay={0.15} />
              <MenuLink text="Contact" onClick={() => setCurrentView("contact")} delay={0.2} />
            </motion.div>
            <motion.div 
              id="youtube-embed" 
              className="w-full md:flex-1/2 px-4 md:px-0 md:max-w-3/4 flex flex-col justify-center items-center gap-4 rounded-[30px]"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
            >
              <YouTubeEmbed source="https://www.youtube.com/embed/mbGDDGKc7Eg?si=0gZhBQ8kSms3jtmY&autoplay=1" isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </motion.div>
          </div>
        ) : currentView === "music" ? (
          <Music onBack={() => setCurrentView("home")} />
        ) : currentView === "contact" ? (
          <Contact onBack={() => setCurrentView("home")} />
        ) : currentView === "epk" ? (
          <EPK onBack={() => setCurrentView("home")} />
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
