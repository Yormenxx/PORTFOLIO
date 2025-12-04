import logo from "../assets/images/mjbg.png"
// import { NAV_ITEMS } from "../constants"
import { useState, useEffect } from "react"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import { motion, AnimatePresence } from 'framer-motion';
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

  // Resetear el navbar cuando la pantalla sea mayor a mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavbar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='fixed w-full z-40 flex justify-center m-3'>
      <div className='flex justify-between px-3 py-2 items-center rounded-4xl !backdrop-blur-2xl text-neutral-400 mx-auto border border-neutral-200 dark:border-neutral-700'>
        
        <div 
          className="flex items-center p-3 border border-y-neutral-950 sm:p-0 sm:border-none bg-neutral-100  rounded-full md:m-3 sm:pointer-events-none cursor-pointer sm:cursor-default" 
          onClick={handleNavbar}
        >
          <img src={logo} width={35} height={35} alt="logo" />
        </div>

        <div>
          <ul className="hidden sm:flex space-x-2 items-center">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  className="text-sm text-black font font-medium w-full relative px-3 after:content-[''] after:absolute after:bg-[#00ec76] after:h-[2px] after:w-0 after:left-0 after:-bottom-2.5 after:transition-all after:duration-300 z-50 hover:after:w-full hover:text-[#00ec76] transition-colors dark:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <div className="px-4 space-x-2  flex items-center gap-2">
              <LanguageSwitcher />
              <AnimatedThemeToggler className="cursor-pointer" />
            </div>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavbar && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNavbar}
            />

            {/* Navbar */}
            <motion.ul
              className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-neutral-900 shadow-lg flex flex-col space-y-4 p-6 pt-20 z-40"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.link}
                    className="text-sm text-black font-medium block w-full relative px-3 py-2 after:content-[''] after:absolute after:bg-[#00ec76] after:h-[2px] after:w-0 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-[#00ec76] transition-colors dark:text-white"
                    onClick={handleNavbar}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}

              <div className="px-3 pt-2 flex flex-col gap-3">
                <LanguageSwitcher />
                <AnimatedThemeToggler className="cursor-pointer" />
              </div>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default Navbar