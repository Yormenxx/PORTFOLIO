import { useTranslation } from 'react-i18next';
import { getProjectsItems } from "../constants";
import { motion,Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

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

    return (
        <section className="md:mx-2 md:px-20 rounded-2xl transition-colors duration-500 overflow-hidden">
            <span id="proyectos"></span>

            <motion.div 
                className="w-full m-auto px-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >

                <div className="py-6">
                    <motion.h2 
                        variants={itemFadeUp}
                        className="text-4xl text-neutral-500 dark:text-neutral-100 md:text-7xl font-bold text-center"
                    >
                        {t("projects.title")}
                    </motion.h2>
                </div>


                <motion.div 
                    variants={itemFadeUp}
                    className="relative w-full px-4 md:px-8"
                >

                
                    <motion.button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-neutral-800 shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
                    </motion.button>

                    
                    <div className="overflow-hidden py-4" ref={carouselRef}>
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-2"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsShown)}%)`
                            }}
                        >
                            {PROJECT_ITEMS.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0"
                                    style={{
                                        width: `calc(${100 / itemsShown}% - ${(itemsShown - 1) * 16 / itemsShown}px)`
                                    }}
                                    
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative flex flex-col h-full justify-between w-full p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 transition-all shadow-sm">
                                        
                                   
                                        <div>
                                            <figure className="overflow-hidden rounded-xl h-[200px] w-full">
                                                <img
                                                    src={item?.img}
                                                    alt={item?.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                />
                                            </figure>

                                            <div className="flex flex-col items-center sm:items-start px-3 pt-4">
                                                <div className="w-full flex items-center justify-between mb-3">
                                                    <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 truncate pr-2">
                                                        {item?.title}
                                                    </h2>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        {item?.skills.map((icon, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center text-lg text-neutral-600 dark:text-neutral-400"
                                                                title="Tech Stack"
                                                            >
                                                                <span>{icon.icon}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-[13px] text-neutral-600 dark:text-neutral-400 w-full text-center sm:text-left line-clamp-3 leading-relaxed mb-4">
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </div>

                                
                                        <div className="px-3 pb-2 flex gap-3 mt-auto">
                                            {item?.github?.link && (
                                                <motion.a 
                                                    href={item?.github.link} 
                                                    target='_blank'
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    GitHub
                                                </motion.a>
                                            )}
                                            {item?.preview?.prevLink && (
                                                <motion.a 
                                                    href={item?.preview.prevLink} 
                                                    target="_blank"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Preview
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

             
                    <motion.button
                        onClick={goToNext}
                        disabled={currentIndex === maxIndex}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-neutral-800 shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
                    </motion.button>

                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'w-8 bg-neutral-700 dark:bg-neutral-200'
                                    : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
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