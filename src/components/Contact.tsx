import ElectricLogo from './ElectricLogo';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/images/mjbg.png';

function Contact() {
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

    const FOOTER_LINKS = [
        { name: 'Inicio', link: '#inicio' },
        { name: 'Proyectos', link: '#proyectos' },
        { name: 'Servicios', link: '#services' },
        { name: 'Contacto', link: '#contacto' }
    ];

    return (
        <>
            <span id="contacto"></span>

            <section className="relative w-full mx-auto px-4 md:px-20 py-16 flex justify-center">
                <motion.div
                    className="w-full flex justify-center rounded-3xl bg-neutral-950 py-12 md:py-16 px-6 md:px-8 text-center border border-neutral-800"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    <div className="flex flex-col items-center justify-start space-y-8 w-full max-w-2xl">

                        <motion.div
                            variants={itemVariants}
                            className="mx-auto md:mx-0 flex items-center justify-center border border-neutral-700 rounded-full px-4 py-2"
                        >
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c96b] opacity-60"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c96b]"></span>
                            </span>
                            <p className="text-xs text-neutral-300 font-semibold uppercase tracking-[0.12em]">
                                Disponible para proyectos
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemScale}
                            className="flex flex-col md:flex-row items-center gap-4"
                        >
                            <div style={{ position: 'relative', width: '60px', height: '60px', flexShrink: 0, overflow: 'visible' }}>
                                <div style={{ position: 'absolute', left: '-20px', top: '-20px', width: '100px', height: '100px' }}>
                                    <ElectricLogo
                                        src={logo}
                                        color="#ecc7ff"
                                        glowColor="#ad6dff"
                                        scale={0.6}
                                        strands={2}
                                        bend={0.6}
                                        crackle={1.5}
                                        arcs={1}
                                        speed={2.5}
                                        interactive
                                        intensity={0.6}
                                        glow={0.25}
                                        thickness={1.2}
                                        flicker={0.6}
                                        fill={0}
                                        cursorIntensity={0.75}
                                        cursorRadius={100}
                                    />
                                </div>
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white">Juan Ortiz</h3>
                                <p className="text-sm text-neutral-400">
                                    Analista de sistemas - Desarrollo Backend
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemFadeUp}
                            className="flex flex-col space-y-2 font-cormorant text-3xl md:text-7xl"
                        >
                            <h3 className="text-white capitalize font-light leading-tight">
                                ¿Estas buscando a alguien para construir algo <span className="italic font-medium">increíble?</span>
                            </h3>
                            <h4 className="md:text-2xl text-neutral-400">
                                Escríbeme
                            </h4>
                        </motion.div>

                        <motion.div variants={itemFadeUp}>
                            <p className="text-neutral-300 md:w-full w-[330px] mx-auto leading-relaxed">
                                Software developer enfocado en Back-end capaz de llevar proyectos que permitan la entrega optimizada y continua a los usuarios.
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
                                className="group flex items-center gap-2 rounded-full px-6 py-3 bg-white text-neutral-950 text-sm font-medium transition-all duration-200"
                            >
                                <MdEmail className="text-lg group-hover:scale-110 transition-transform" />
                                Email
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white hover:text-white transition-all duration-200"
                            >
                                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                                LinkedIn
                            </motion.a>

                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 hover:border-white hover:text-white transition-all duration-200"
                            >
                                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                                GitHub
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <footer className="w-full bg-neutral-950 border-t border-neutral-800">
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
                                <img src={logo} width={40} height={40} alt="logo" className="rounded-full bg-neutral-900" />
                                <span className="text-xl font-bold text-white">Juan Ortiz</span>
                            </div>
                            <p className="text-sm text-neutral-400">
                                Construyendo soluciones backend robustas y escalables.
                            </p>
                        </motion.div>

                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                Navegación
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {FOOTER_LINKS.map((item) => (
                                    <li key={item.link}>
                                        <a
                                            href={item.link}
                                            className="text-neutral-400 border-b border-transparent hover:border-white hover:text-white transition-colors pb-0.5"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                Sígueme
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
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:border-white hover:text-white transition-colors duration-200"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemFadeUp}
                        className="mt-12 pt-8 border-t border-neutral-800 text-center"
                    >
                        <p className="text-sm text-neutral-400">
                            © {new Date().getFullYear()} Juan Ortiz. Todos los derechos reservados.
                        </p>
                    </motion.div>
                </motion.div>
            </footer>
        </>
    );
}

export default Contact;