import logo from "../assets/images/mjbg.png";
import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { name: t('nav.home'), link: '#inicio' },
    { name: t('nav.projects'), link: '#proyectos' },
    { name: t('nav.services'), link: '#services' },
    { name: t('nav.contact'), link: '#contacto' }
  ];

  const handleNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavbar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const sidebarVariants:Variants = {
    closed: { 
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='fixed w-full z-40 flex justify-center mt-3'
    >
      <div className='flex justify-between px-3 py-2 items-center rounded-4xl !backdrop-blur-2xl text-neutral-400 mx-auto border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-black/50 shadow-sm'>
        
      
        <motion.div 
          className="flex items-center p-3 sm:p-0 sm:border-none bg-neutral-100  sm:bg-transparent rounded-full md:m-3 sm:pointer-events-none cursor-pointer sm:cursor-default" 
          onClick={handleNavbar}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo} width={35} height={35} alt="logo" className="rounded-full bg-white" />
        </motion.div>

       
        <div>
          <ul className="hidden sm:flex space-x-2 items-center">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <motion.a 
                  href={item.link} 
                
                  className="group text-sm text-black font-medium w-full relative px-3 py-1 block dark:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
              
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00ec76] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}

            <div className="px-4 space-x-2 flex items-center gap-2 border-l border-neutral-300 dark:border-neutral-700 ml-2">
              <LanguageSwitcher />
              <AnimatedThemeToggler className="cursor-pointer" />
            </div>
          </ul>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mobileNavbar && (
          <>
          
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNavbar}
            />
            
           
            <motion.ul
              className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col space-y-4 p-6 pt-24 z-40 border-r border-neutral-200 dark:border-neutral-800"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
             
              <motion.button 
                 onClick={handleNavbar}
                 className="absolute top-5 right-5 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-black dark:text-white"
                 whileTap={{ scale: 0.9 }}
              >
                 ✕
              </motion.button>

              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                >
                  <a
                    href={item.link}
                    className="group text-lg text-black font-medium block w-full relative px-3 py-2 dark:text-white"
                    onClick={handleNavbar}
                  >
                    {item.name}
                
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00ec76] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}

              <motion.div 
                className="px-3 pt-6 flex flex-col items-start gap-4 border-t border-neutral-200 dark:border-neutral-800 mt-4"
                variants={itemVariants}
              >
                <LanguageSwitcher />
                <AnimatedThemeToggler className="cursor-pointer" />
              </motion.div>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;