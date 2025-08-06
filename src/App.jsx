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
              <MenuLink text="BERi" href="https://erapport.club/" onClick={() => {}} delay={0.15} />
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

      {/* Footer with Social Icons */}
      <footer>
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
        {/* <div className="flex justify-center w-full my-4" ref={containerRef}>
          <motion.img 
            src={handdrawnfont} 
            alt="C.Jai Header" 
            className="max-h-12 md:max-h-12" 
            onClick={() => setCurrentView("home")}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 }, cursor: "pointer" }}
            whileTap={{ scale: 0.95 }}
          />
          </div> */}
      </footer>
    </div>
  )
}

export default App
