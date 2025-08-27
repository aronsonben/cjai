import { motion } from "motion/react"

export const MenuLink = ({ text, href, onClick, delay, image }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E6E5DB] relative cursor-pointer" // Add relative positioning
      onClick={onClick}
      style={{ 
        position: 'relative',
        textDecoration: 'none', // Ensure no default underline
        backgroundImage: 'linear-gradient(#D8572A, #D8572A)',
        backgroundRepeat: 'no-repeat'
      }}
      whileHover="hover"
      initial="initial"
      animate={{ opacity: 1, x: 0 }}
      transition={{type: "spring", duration: 2, bounce: 0, delay: delay}}
      variants={{
        initial: {
          opacity: 0,
          x: -50,
          backgroundSize: '0% 4px',
          backgroundPosition: '0 100%'
        },
        hover: {
          backgroundSize: '100% 4px',
          backgroundPosition: '0 100%',
          transition: {
            duration: 0.3
          }
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {image != null ? (
        <img src={image} className="w-20" alt={text}></img>
      ) : (
        <span>{text}</span>
      )}
    </motion.a>
  )
}