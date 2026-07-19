import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/images/mjbg.png';

function Contact() {
    const { t } = useTranslation();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemFadeUp: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 60, damping: 20 }
        }
    };

    const itemScale: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 60, damping: 20 },
        },
    };

    return (
        <>
            <span id="contacto"></span>

            <section className="relative w-full mx-auto px-4 md:px-20 py-16 flex justify-center">
                <motion.div
                    className="w-full flex justify-center rounded-3xl bg-white dark:bg-neutral-950 py-12 md:py-16 px-6 md:px-8 text-center border border-neutral-200 dark:border-neutral-800"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    <div className="flex flex-col items-center justify-start space-y-8 w-full max-w-2xl">

                        <motion.div
                            variants={itemVariants}
                            className="mx-auto md:mx-0 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2"
                        >
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c96b] opacity-60"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c96b]"></span>
                            </span>
                            <p className="text-xs text-neutral-700 dark:text-neutral-300 font-semibold uppercase tracking-[0.12em]">
                                {t('contact.available')}

                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemScale}
                            className="flex flex-col md:flex-row items-center gap-4"
                        >
                            <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 rounded-full p-2 border border-neutral-200 dark:border-neutral-800">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full" />
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Juan Ortiz</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {t('contact.role')}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemFadeUp}
                            className="flex flex-col space-y-2 font-cormorant text-3xl md:text-7xl"
                        >
                            <h3 className="text-neutral-900 capitalize font-light dark:text-white leading-tight">
                                {t('contact.title')} <span className="italic font-medium">{t('contact.titleHighlight')}</span>
                            </h3>
                            <h4 className="md:text-2xl text-neutral-500 dark:text-neutral-400">
                                {t('contact.subtitle')}
                            </h4>
                        </motion.div>

                        <motion.div variants={itemFadeUp}>
                            <p className="text-neutral-600 md:w-full w-[330px] mx-auto dark:text-neutral-300 leading-relaxed">
                                {t('contact.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemFadeUp}
                            className="flex flex-wrap justify-center gap-3 pt-4"
                        >
                            <motion.a
                                href="mailto:tu@email.com"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-2 rounded-full px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium transition-all duration-200"
                            >
                                <MdEmail className="text-lg group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.email')}
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-all duration-200"
                            >
                                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.linkedin')}
                            </motion.a>

                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-all duration-200"
                            >
                                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
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
                            <div className="flex items-center gap-3">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full bg-neutral-100" />
                                <span className="text-xl font-bold text-neutral-900 dark:text-white">Juan Ortiz</span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {t('footer.tagline')}
                            </p>
                        </motion.div>

                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900 dark:text-white">
                                {t('footer.navigation')}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {['home', 'projects', 'services', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item === 'home' ? 'inicio' : item}`}
                                            className="text-neutral-600 dark:text-neutral-400 border-b border-transparent hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors pb-0.5"
                                        >
                                            {t(`nav.${item}`)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900 dark:text-white">
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
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.92 }}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
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