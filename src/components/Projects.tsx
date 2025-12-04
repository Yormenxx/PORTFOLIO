import { useTranslation } from 'react-i18next';

import { getProjectsItems, OTHER_PROJECTS } from "../constants"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MdArrowOutward } from "react-icons/md";
import { Highlighter } from "./ui/highlighter";


function Projects() {
    const { t } = useTranslation();
    const PROJECT_ITEMS = getProjectsItems(t);

    const [filter, setFilter] = useState('TODOS');

    const handleFilterChange = (newFilter: any) => {
        setFilter(newFilter);
    };

    const filteredProjects = OTHER_PROJECTS.filter((project) => {
        if (filter === 'TODOS') {
            return true;
        }
        return project.type === filter;
    });

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

    React.useEffect(() => {
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



    return (
        <section className="mx-2 md:px-20 rounded-2xl  transition-colors duration-500  " >
            <span id="proyectos"></span>

            <div className="w-full m-auto px-4  ">

                <div className="py-6">
                    <h2 className="text-4xl text-neutral-500 dark:text-neutral-100 md:text-7xl font-bold text-center">{t("projects.title")}</h2>
                </div>


                <div className="relative w-full px-4 md:px-8 ">

                    {/* Botón Anterior */}
                    <button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-all"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-700 cursor-pointer" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={carouselRef}>
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsShown)}%)`
                            }}
                        >
                            {PROJECT_ITEMS.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0"
                                    style={{
                                        width: `calc(${100 / itemsShown}% - ${(itemsShown - 1) * 16 / itemsShown}px)`
                                    }}
                                >
                                    <a
                                        href={item.github.link}
                                        className="relative flex flex-col h-full justify-center w-full p-3 transition-all hover:scale-95 rounded-xl bg-neutral-100 dark:bg-neutral-900 "
                                    >
                                        <figure className="overflow-hidden rounded-xl h-[200px]">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </figure>

                                        <div className="flex flex-col items-center sm:items-start px-3 pt-3">
                                            <div className="w-full flex items-center justify-between mb-2">
                                                <h2 className="font-bold  text-lg text-neutral-700 dark:text-neutral-200">
                                                    {item.title}
                                                </h2>
                                                <div className="flex flex-wrap items-center gap-1">
                                                    {item.skills.map((icon, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex font-mono items-center text-xl text-neutral-500 dark:text-neutral-400"
                                                        >
                                                            <span>{icon.icon}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="text-[13px] text-neutral-800 dark:text-neutral-400 w-full text-center sm:text-left line-clamp-3 ">
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón Siguiente */}
                    <button
                        onClick={goToNext}
                        disabled={currentIndex === maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-all"
                        aria-label="Proyecto siguiente"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-700 cursor-pointer" />
                    </button>

                    {/* Indicadores de posición */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all ${idx === currentIndex
                                    ? 'w-8 bg-neutral-700'
                                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                aria-label={`Ir a página ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="md:px-5 py-4">

                    <p className="pl-4 ml-3 mb-2 text-xl  text-neutral-600 dark:text-white">
                        <Highlighter action="underline" color="#00ec76">
                            Otros proyectos
                        </Highlighter>
                    </p>





                    <div className="flex items-center justify-start gap-3 ml-4 py-4">
                        <button
                            className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${filter === 'TODOS'
                                ? 'border-[#00ec76] bg-[#00ec76] text-black'
                                : 'border-neutral-300 dark:border-neutral-700 hover:border-[#00ec76] hover:text-[#00ec76]'
                                }`}
                            onClick={() => handleFilterChange('TODOS')}
                        >
                            Todos
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${filter === 'front'
                                ? 'border-[#00ec76] bg-[#00ec76] text-black'
                                : 'border-neutral-300 dark:border-neutral-700 hover:border-[#00ec76] hover:text-[#00ec76]'
                                }`}
                            onClick={() => handleFilterChange('front')}
                        >
                            Front
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${filter === 'back'
                                ? 'border-[#00ec76] bg-[#00ec76] text-black'
                                : 'border-neutral-300 dark:border-neutral-700 hover:border-[#00ec76] hover:text-[#00ec76]'
                                }`}
                            onClick={() => handleFilterChange('back')}
                        >
                            Backend
                        </button>
                        <button
                            className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${filter === 'otro'
                                ? 'border-[#00ec76] bg-[#00ec76] text-black'
                                : 'border-neutral-300 dark:border-neutral-700 hover:border-[#00ec76] hover:text-[#00ec76]'
                                }`}
                            onClick={() => handleFilterChange('otro')}
                        >
                            Otro
                        </button>
                    </div>



                    <div className="mt-6 md:px-5">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((item, index) => (
                                    <motion.a
                                        href={item.link}
                                        target="_blank"
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                            delay: index * 0.05,
                                        }}
                                        className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#00ec76]"
                                    >
                                        {/* Efecto de gradiente en hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ec76]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative space-y-3">
                                            {/* Header con título e icono */}
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="text-lg font-semibold capitalize dark:text-neutral-50 line-clamp-2 group-hover:text-[#00ec76] transition-colors">
                                                    {item.name}
                                                </h3>
                                                <MdArrowOutward className="text-xl flex-shrink-0 dark:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>

                                            {/* Descripción */}
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                                {item.description}
                                            </p>

                                            {/* Tags de tecnologías (opcional) */}
                                            {item.skill && item.skill.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {item.skill.slice(0, 3).map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                                                        >
                                                            {skill.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.a>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>



                    {/* <div className="w-full flex justify-center my-4">

                    <Link to="projects" className=" px-4 py-2 bg-[#00ec76] rounded-xl capitalize text-white hover:opacity-60 ease-in-out duration-200  ">Ver más proyectos</Link>
                </div> */}

                </div>


            </div>
        </section>
    )
}

export default Projects