import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/images/mjbg.png';

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <span id="contacto"></span>

            {/* Sección de Contacto */}
            <section className="relative w-full mx-auto px-4 md:px-20 py-16 flex justify-center dark:bg-neutral-900 bg-neutral-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center  rounded-3xl bg-white dark:bg-neutral-950 py-12 md:py-16 px-6 md:px-8 text-center shadow-lg border border-neutral-200 dark:border-neutral-800"
                >
                    <div className="flex flex-col items-center justify-start space-y-8">

                        {/* Avatar y Info */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex flex-col md:flex-row items-center gap-4"
                        >
                            <div className="flex items-center bg-neutral-100  rounded-full p-2 ring-2 ring-[#00ec76]/20">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full" />
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Juan Ortiz</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {t('contact.role')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Título Principal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex flex-col space-y-2"
                        >
                            <h3 className="text-3xl  text-gray-900 capitalize font-light dark:text-white leading-tight">
                                {t('contact.title')} <span className="text-[#00ec769a]">{t('contact.titleHighlight')}</span>
                            </h3>
                            <h4 className="text-xl md:text-2xl text-gray-500 dark:text-neutral-400">
                                {t('contact.subtitle')}
                            </h4>
                        </motion.div>

                        {/* Descripción */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-2xl"
                        >
                            <p className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                                {t('contact.description')}
                            </p>
                        </motion.div>

                        {/* Botones de Contacto */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap justify-center gap-4 pt-4"
                        >
                            <a
                                href="mailto:tu@email.com"
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                            >
                                <MdEmail className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.email')}
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-white dark:bg-neutral-900 hover:border-[#00ec76] hover:text-[#00ec76] font-medium shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                            >
                                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.linkedin')}
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 border rounded-full border-neutral-300 dark:border-neutral-700 px-6 py-3 bg-white dark:bg-neutral-900 hover:border-[#00ec76] hover:text-[#00ec76] font-medium shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                            >
                                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                {t('contact.buttons.github')}
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 md:px-20 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Columna 1: Branding */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 ">
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full bg-neutral-100" />
                                <span className="text-xl font-bold dark:text-white">Juan Ortiz</span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {t('footer.tagline')}
                            </p>
                        </div>

                        {/* Columna 2: Links Rápidos */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                                {t('footer.navigation')}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#inicio" className="text-neutral-600 dark:text-neutral-400 hover:text-[#00ec76] transition-colors">
                                        {t('nav.home')}
                                    </a>
                                </li>
                                <li>
                                    <a href="#proyectos" className="text-neutral-600 dark:text-neutral-400 hover:text-[#00ec76] transition-colors">
                                        {t('nav.projects')}
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-[#00ec76] transition-colors">
                                        {t('nav.services')}
                                    </a>
                                </li>
                                <li>
                                    <a href="#contacto" className="text-neutral-600 dark:text-neutral-400 hover:text-[#00ec76] transition-colors">
                                        {t('nav.contact')}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Columna 3: Redes Sociales */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                                {t('footer.follow')}
                            </h4>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-[#00ec76] dark:hover:bg-[#00ec76] hover:text-black transition-all duration-200"
                                >
                                    <FaGithub className="text-xl" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-[#00ec76] dark:hover:bg-[#00ec76] hover:text-black transition-all duration-200"
                                >
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a
                                    href="https://discord.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-[#00ec76] dark:hover:bg-[#00ec76] hover:text-black transition-all duration-200"
                                >
                                    <FaDiscord className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            © {new Date().getFullYear()} Juan Ortiz. {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;