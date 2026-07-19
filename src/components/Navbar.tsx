import logo from "../assets/images/mjbg.png";
import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
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
    setMobileNavbar((prev) => !prev);
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

  const sidebarVariants: Variants = {
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
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-40 flex justify-center mt-3 px-3"
    >
      <div className="flex justify-between items-center gap-4 px-3 py-2 rounded-full !backdrop-blur-2xl mx-auto border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-black/50 shadow-sm">

        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0" aria-label="Inicio">
          <img
            src={logo}
            width={34}
            height={34}
            alt="logo"
            className="rounded-full bg-white"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="group relative block px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {item.name}
                <span className="absolute left-3 right-3 bottom-0.5 h-px scale-x-0 bg-neutral-950 dark:bg-white transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-neutral-200 dark:border-neutral-800">
            <LanguageSwitcher />
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>

          <div className="flex sm:hidden items-center gap-1">
            <AnimatedThemeToggler className="cursor-pointer" />
            <motion.button
              onClick={handleNavbar}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 dark:text-neutral-200 cursor-pointer"
              aria-label={mobileNavbar ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileNavbar}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mobileNavbar && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNavbar}
            />

            <motion.ul
              className="fixed top-0 left-0 h-screen w-72 bg-white dark:bg-neutral-950 flex flex-col p-6 pt-24 z-40 border-r border-neutral-200 dark:border-neutral-800"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.button
                onClick={handleNavbar}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer"
                whileTap={{ scale: 0.9 }}
                aria-label="Cerrar menú"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="flex flex-col">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="list-none border-b border-neutral-200 dark:border-neutral-800">
                    <a
                      href={item.link}
                      className="block py-4 text-base font-medium text-neutral-800 dark:text-neutral-100"
                      onClick={handleNavbar}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-4 pt-6 mt-auto"
                variants={itemVariants}
              >
                <LanguageSwitcher />
              </motion.div>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;