import { SERVICES_ITEMS } from "../constants"
import { motion } from "framer-motion";




function Services() {



    return (
        <>
            <span id="services"></span>
            <section >



                <div className="pt-18 px-4 md:px-15 ">



                    <div className="  grid grid-cols-1 py-14 px-6 rounded-2xl" >


                        <div className="flex flex-col items-center justify-center mx-auto w-[80%] text-center " >

                            <motion.h2 initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }}
                                className="text-6xl font-extrabold tracking-wider bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text py-3">¿Cómo te puedo ayudar en tu siguiente proyecto?</motion.h2>
                            <motion.p initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="leading-relaxed tracking-wide text-lg py-4">Gracias por visualizar mi portafolio además de mis proyectos. Estos son algunos servicios en los que te puedo ayudar en tu proceso de formación.</motion.p>


                        </div>



                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start place-items-center py-8  space-y-4 space-x-3 md:gap-y-3">

                            {
                                SERVICES_ITEMS.map((service, index) => (
                                    <motion.div initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} key={index} className="w-[70%] relative flex flex-col justify-center  group space-y-3  text-neutral-900   px-3 py-2 rounded-xl ">
                                        <span className="absolute top-2.5 right-5 text-5xl font-bold text-neutral-300  group-hover:text-[#00ec76] duration-200 ease-in-out">{service.number}</span>

                                        <div className="flex items-center gap-1">
                                            <div className="text-4xl text-[#00ec76] ">{service.icon}</div>
                                            <h2 className="text-3xl font-bold  capitalize tracking-tighter group-hover:text-[#00ec76] duration-200 ease-in-out">{service.name}</h2>
                                        </div>

                                        <p className="tracking-wide leading-relaxed" >{service.description}</p>
                                    </motion.div>
                                ))
                            }


                        </div>


                    </div>




                </div>



            </section >
        </>


    )
}

export default Services