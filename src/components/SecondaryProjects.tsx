import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from "react-icons/md";
import { Highlighter } from "./ui/highlighter"; 
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { otherProjects } from "../constants"

const SecondaryProjects = () => {
    const { t } = useTranslation();

    
    const OTHER_PROJECTS = otherProjects(t);

    const [filter, setFilter] = useState('TODOS');

    const handleFilterChange = (newFilter:any) => {
        setFilter(newFilter);
    };

    const filteredProjects = OTHER_PROJECTS.filter((project) => {
        if (filter === 'TODOS') return true;
        return project.type === filter;
    });

    return (
        <section className="mx-2 md:px-20 rounded-2xl transition-colors duration-500">
            <div className="md:px-5 py-4">
                <p className="pl-4 ml-3 mb-2 text-xl text-neutral-600 dark:text-white">
                    <Highlighter action="underline" color="#00ec76">
               
                        Otros proyectos
                    </Highlighter>
                </p>

               
                <div className="flex items-center justify-start gap-3 ml-4 py-4 flex-wrap">
                    {['TODOS', 'front', 'back', 'otro'].map((f) => (
                        <button
                            key={f}
                            className={`px-6 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${filter === f
                                    ? 'border-[#00ec76] bg-[#00ec76] text-black'
                                    : 'border-neutral-300 dark:border-neutral-700 hover:border-[#00ec76] hover:text-[#00ec76]'
                                }`}
                            onClick={() => handleFilterChange(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

              
                <div className="mt-6 md:px-5">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((item, index) => (
                                <motion.a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#00ec76]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ec76]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative space-y-3">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="text-lg font-semibold capitalize dark:text-neutral-50 line-clamp-2 group-hover:text-[#00ec76] transition-colors">
                                                {item.name}
                                            </h3>
                                            <MdArrowOutward className="text-xl flex-shrink-0 dark:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>

                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                          
                                            {item.description}
                                        </p>

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
            </div>
        </section>
    );
}

export default SecondaryProjects;