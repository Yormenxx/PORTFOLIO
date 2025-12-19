import { useTranslation } from 'react-i18next';
import { motion,Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/images/mjbg.png';

function Contact() {
    const { t } = useTranslation();


    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemFadeUp:Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 60, damping: 20 }
        }
    };

    const itemScale:Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <>
            <span id="contacto"></span>

      
            <section className="relative w-full mx-auto px-4 md:px-20 py-16 flex justify-center dark:bg-neutral-900 bg-neutral-50">
                <motion.div
                    className="w-full flex justify-center rounded-3xl bg-white dark:bg-neutral-950 py-12 md:py-16 px-6 md:px-8 text-center shadow-lg border border-neutral-200 dark:border-neutral-800"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} 
                >
                    <div className="flex flex-col items-center justify-start space-y-8 w-full max-w-2xl">

                  
                        <motion.div
                            variants={itemScale}
                            className="flex flex-col md:flex-row items-center gap-4"
                        >
                            <div className="flex items-center bg-neutral-100 rounded-full p-2 ring-2 ring-[#00ec76]/20">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full" />
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Juan Ortiz</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {t('contact.role')}
                                </p>
                            </div>
                        </motion.div>

                        
                        <motion.div
                            variants={itemFadeUp}
                            className="flex flex-col space-y-2"
                        >
                            <h3 className="text-3xl text-gray-900 capitalize font-light dark:text-white leading-tight">
                                {t('contact.title')} <span className="text-[#00ec769a]">{t('contact.titleHighlight')}</span>
                            </h3>
                            <h4 className="text-xl md:text-2xl text-gray-500 dark:text-neutral-400">
                                {t('contact.subtitle')}
                            </h4>
                        </motion.div>

               
                        <motion.div variants={itemFadeUp}>
                            <p className="text-gray-600 md:w-full w-[330px] mx-auto dark:text-neutral-300 leading-relaxed">
                                {t('contact.description')}
                            </p>
                        </motion.div>

              
                        <motion.div
                            variants={itemFadeUp}
                            className="flex flex-wrap justify-center gap-4 pt-4"
                        >
                            <motion.a
                                href="mailto:tu@email.com"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <MdEmail className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.email')}
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-white dark:bg-neutral-900 hover:border-[#00ec76] hover:text-[#00ec76] font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.linkedin')}
                            </motion.a>

                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-white dark:bg-neutral-900 hover:border-[#00ec76] hover:text-[#00ec76] font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.github')}
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

     
            <footer className="w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
                <motion.div 
                    className="max-w-7xl mx-auto px-4 md:px-20 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                     
                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <div className="flex items-center gap-3 ">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full bg-neutral-100" />
                                <span className="text-xl font-bold dark:text-white">Juan Ortiz</span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {t('footer.tagline')}
                            </p>
                        </motion.div>

                
                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                                {t('footer.navigation')}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {['home', 'projects', 'services', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item === 'home' ? 'inicio' : item}`} className="text-neutral-600 dark:text-neutral-400 hover:text-[#00ec76] transition-colors">
                                            {t(`nav.${item}`)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    
                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                                {t('footer.follow')}
                            </h4>
                            <div className="flex gap-3">
                                {[
                                    { icon: <FaGithub />, href: "https://github.com" },
                                    { icon: <FaLinkedin />, href: "https://linkedin.com" },
                                    { icon: <FaDiscord />, href: "https://discord.com" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-[#00ec76] dark:hover:bg-[#00ec76] hover:text-black transition-colors duration-200 text-xl"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

               
                    <motion.div 
                        variants={itemFadeUp}
                        className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center"
                    >
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            © {new Date().getFullYear()} Juan Ortiz. {t('footer.rights')}
                        </p>
                    </motion.div>
                </motion.div>
            </footer>
        </>
    );
}

export default Contact;