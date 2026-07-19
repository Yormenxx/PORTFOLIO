import { useTranslation } from 'react-i18next';
import { getProjectsItems } from "../constants";
import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from 'lucide-react';

function Projects() {
    const { t } = useTranslation();
    const PROJECT_ITEMS = getProjectsItems(t);

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const itemsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 3
    };

    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return itemsPerView.desktop;
            if (window.innerWidth >= 768) return itemsPerView.tablet;
        }
        return itemsPerView.mobile;
    };

    const [itemsShown, setItemsShown] = useState(getItemsPerView());

    useEffect(() => {
        const handleResize = () => {
            setItemsShown(getItemsPerView());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, PROJECT_ITEMS.length - itemsShown);

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

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

    return (
        <section className="md:mx-2 md:px-20 py-16 transition-colors duration-500 overflow-hidden">
            <span id="proyectos"></span>

            <motion.div
                className="w-full m-auto px-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >

                {/* Header */}
                <div className="px-8 mb-10 md:mb-14">
                    <div className="flex items-center gap-4 mb-4">
                        <motion.span variants={itemFadeUp} className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />
                        <motion.span
                            variants={itemFadeUp}
                            className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
                        >
                            {t("projects.title")}
                        </motion.span>
                    </div>

                    <motion.h2
                        variants={itemFadeUp}
                        className="font-cormorant text-neutral-800 dark:text-neutral-100 text-5xl md:text-7xl leading-none"
                    >
                        {t("projects.subtitle")}
                    </motion.h2>

                    <motion.p
                        variants={itemFadeUp}
                        className="mt-4 max-w-lg text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
                    >
                        {t("projects.description")}
                    </motion.p>
                </div>

                {/* Carousel */}
                <motion.div
                    variants={itemFadeUp}
                    className="relative w-full px-10 md:px-8"
                >

                    <motion.button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute left-0 top-[38%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 disabled:opacity-20 disabled:cursor-not-allowed hover:border-neutral-900 dark:hover:border-white transition-colors"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    </motion.button>

                    <div className="overflow-hidden py-4" ref={carouselRef}>
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsShown)}%)`
                            }}
                        >
                            {PROJECT_ITEMS.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 group px-3"
                                    style={{
                                        width: `${100 / itemsShown}%`
                                    }}
                                >
                                    <div className="flex flex-col h-full w-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300">

                                        <figure className="overflow-hidden h-[200px] w-full">
                                            <img
                                                src={item?.img}
                                                alt={item?.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </figure>

                                        <div className="flex flex-col flex-1 px-5 pt-5 pb-4">
                                            <div className="flex items-start justify-between gap-3 mb-3">
                                                <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
                                                    {item?.title}
                                                </h3>
                                                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                                                    {item?.skills.map((icon, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-base text-neutral-400 dark:text-neutral-500"
                                                            title="Tech Stack"
                                                        >
                                                            {icon.icon}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-5">
                                                {item?.description}
                                            </p>

                                            <div className="flex gap-5 mt-auto pt-3 border-t border-neutral-200 dark:border-neutral-800">
                                                {item?.github?.link && (
                                                    <a
                                                        href={item?.github.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 border-b border-transparent hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors pb-0.5"
                                                    >
                                                        <Github className="w-3.5 h-3.5" />
                                                        GitHub
                                                    </a>
                                                )}
                                                {item?.preview?.prevLink && (
                                                    <a
                                                        href={item?.preview.prevLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 border-b border-transparent hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white transition-colors pb-0.5"
                                                    >
                                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                                        Preview
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        onClick={goToNext}
                        disabled={currentIndex === maxIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute right-0 top-[38%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 disabled:opacity-20 disabled:cursor-not-allowed hover:border-neutral-900 dark:hover:border-white transition-colors"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    </motion.button>

                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-px transition-all duration-300 ${idx === currentIndex
                                    ? 'w-8 bg-neutral-900 dark:bg-white'
                                    : 'w-4 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500 dark:hover:bg-neutral-500'
                                    }`}
                                aria-label={`Ir a página ${idx + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Projects;