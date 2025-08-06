
import { PROJECTS_ITEMS, OTHER_PROJECTS } from "../constants"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { PointerHighlight } from "@/components/ui/pointer-highlight";



function Projects() {

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




    return (
        <section className="mx-4  rounded-2xl  transition-colors duration-500  " >
            <span id="proyectos"></span>
            <div className="w-full m-auto px-4  ">

                {/* <div className="max-w-7xl mx-auto px-4 py-10 text-center ">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <motion.h2 initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeInOut" }} className=" text-4xl md:text-6xl font-extrabold tracking-wider bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text py-2  ">Proyectos</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeInOut" }}  className="md:w-[60%] leading-relaxed tracking-wide text-lg py-4">Proyectos destacados desarrollados con React, Framer Motion, React Router y Node.js.
                        Cada aplicación combina interfaces dinámicas, animaciones fluidas y un backend robusto con Express</motion.p>
                    </div>
                </div> */}


                {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start sm:px-2 md:space-y-6 md:px-4 gap-2">

                    {

                        PROJECTS_ITEMS.map((item, index) => (

                            <motion.div initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeInOut" }}  key={index} className="relative flex flex-col h-fit  justify-center sm:items-start   w-full transition-all hover:hover:scale-95  rounded-xl">

                                <figure className=" overflow-hidden rounded-xl h-[250px]">
                                    <img src={item.img} alt="project" className="w-full object-cover" />
                                </figure>



                                <div className="flex flex-col items-center sm:items-start space-y-2 px-3 ">
                                    <h2 className="font-bold text-3xl ">{item.title}</h2>

                                    <div className="flex flex-wrap items-center gap-1">
                                        {item.skills.map((icon, index) => (

                                            <div key={index} className="flex font-mono items-center text-xl text-neutral-500  p-0.5">

                                                <span>{icon.icon}</span>

                                            </div>

                                        ))}


                                    </div>

                                    <p className="text-sm w-full text-center sm:text-left line-clamp-3">{item.description}</p>


                                    <div className="flex items-center text-sm pb-4">
                                        <a href={item.github.link} target="_blank" className="relative flex items-center gap-1  after:content-[''] after:absolute after:bg-[#00ec76] after:h-[2px] after:w-0 after:left-0 after:-bottom-2.5 after:transition-all after:duration-300 z-50 hover:after:w-full hover:text-[#00ec76] text-lg ">Codigo{item.github.git}</a>

                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div> */}


                <div>

                    <div className="max-w-7xl p-4 text-center pt-5 ">
                        <motion.div initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeInOut" }} className="flex flex-col text-left">
                            <div className="mx-auto  ml-20 text-2xl font-bold tracking-tight md:text-5xl text-white">

                                <PointerHighlight
                                    rectangleClassName="bg-yellow-700 "
                                    pointerClassName="text-blue-500"
                                >
                                    <span className="relative z-10 text-white">Proyectos de software</span>
                                </PointerHighlight>
                                realizados
                            </div>
                            <p className="md:w-[60%] leading-relaxed ml-20 tracking-wide text-lg py-4 text-neutral-400">Estos mini proyectos se realizarón con el fin de integrar, probar o simplemente usar una tecnologia en concreto para poder identificar su funcionamiento.</p>
                        </motion.div>
                    </div>





                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeInOut" }} className="flex items-center justify-start gap-3  ml-22 ">
                        <button

                            className="buttonFilter"
                            onClick={() => handleFilterChange('TODOS')}>
                            Todos</button>
                        <button className="buttonFilter" onClick={() => handleFilterChange('front')}>front</button>
                        <button className="buttonFilter" onClick={() => handleFilterChange('back')}>backend</button>
                        <button className="buttonFilter" onClick={() => handleFilterChange('otro')}>otro</button>
                    </motion.div>



                    <div className="mt-10">

                        <div className="px-5 md:px-10 lg:px-20 ">

                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeInOut" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center pt-6 space-x-2 space-y-2 overflow-hidden">

                                <AnimatePresence>


                                    {

                                        filteredProjects.map((item) => (
                                            <motion.div layout
                                                key={item.id}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: "easeInOut",
                                                    delay: 0.1,
                                                }} className=" border  border-neutral-800 px-5 py-1 rounded-sm project transition-transform duration-300 ease-out 
               hover:-translate-y-2 hover:translate-x-2  
               ">

                                                {/* <div className="py-3 flex  items-center justify-between">
                                                    <CiFolderOn className="text-3xl text-[#00ec76] " />
                                                    <a href={item.link}><FaGithub className="text-xl" /></a>
                                                </div> */}
                                                <h3 className="text-lg font-bold capitalize bg-gradient-to-r
from-[#4ade80]
via-[#14b8a6]
to-[#0891b2] text-transparent bg-clip-text line-clamp-1">{item.name}</h3>
                                               
                                                <p className="text- tracking-tighter line-clamp-1 text-neutral-400">{item.description}</p>
                                                 <div>
                                                    {
                                                        item.skill.map((skill, index) => (
                                                            <span key={index} className="mr-1 text-neutral-600  capitalize   py-1">{skill.name}</span>
                                                        ))
                                                    }
                                                </div>
                                                {/* <a href={item.link} target="_blank">{item.src}</a> */}

                                            </motion.div>
                                        ))
                                    }

                                </AnimatePresence>



                            </motion.div>
                        </div>
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