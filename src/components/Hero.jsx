import Type from "./Type"
import video from "../assets/vrvideopti.webm"
import { FaReact, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion"


export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay,
                ease: "easeInOut"
            }
        }
    }
}



function Hero() {
    return (
        <section className="relative px-2 md:px-10 pt-34 md:pt-20">

<span id="about"></span>

            <div className="m-2  ">
                <div className=" grid grid-cols-1 md:grid-cols-2  text-center md:text-left mx-auto place-items-center ">

                    <div className="flex flex-col space-y-3 md:pl-7 pl-1 ">
                        <motion.p variants={FadeUp(0.4)}
                            initial="initial"
                            animate="animate" className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">¡Hola extraño!</motion.p>
                        <motion.p variants={FadeUp(0.5)}
                            initial="initial"
                            animate="animate" className="text-5xl md:text-6xl font-bold text-neutral-700">Mi nombre es Juan</motion.p>
                        <motion.p variants={FadeUp(0.6)}
                            initial="initial"
                            animate="animate" className="font-bold text-[25px] md:text-3xl typed "><Type /></motion.p>
                        <motion.p variants={FadeUp(0.7)}
                            initial="initial"
                            animate="animate" className="text-xl font-bold text-neutral-700">Programador back-end capaz de llevar proyectos que permitan la entrega optimizada y continua al usuario.</motion.p>
                        <motion.p variants={FadeUp(0.8)}
                            initial="initial"
                            animate="animate" className=" tracking-tighter t">
                            El desarrollo que he realizado en diversos proyectos personales me permiten cada vez más mejorar como desarrollador.Me gusta la manera como los productos surgen casi de la nada, solo con la disciplina y creatividad.
                        </motion.p>

                        <div>

                            <motion.div variants={FadeUp(0.8)}
                                initial="initial"
                                animate="animate" className="flex space-x-3 items-center justify-center md:justify-start">
                                <FaReact className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiNextdotjs className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <FaPhp className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiMysql className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiMongodb className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            </motion.div>
                        </div>
                        <motion.div variants={FadeUp(0.8)}
                        initial="initial"
                        animate="animate"  className="mx-auto md:mx-0 flex items-center justify-start w-[300px] bg-neutral-700 text-white rounded-lg px-2 my-5">
                            <div className="w-[10px] h-[10px] rounded-full border border-[#00ec76] bg-[#00ec76] mr-3  dot"></div>
                            Disponible para nuevos proyectos
                        </motion.div>
                    </div>
                    {/*                 
                <ReactPlayer url={video}  autoPlay={true} playing={true} loop muted style={{overflow:"hidden", width:"300"}}   /> */}

                    <motion.video initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }} width={550} height={550} loop autoPlay={true} muted className="overflow-hidden "  >
                        <source src={video} type="video/mp4" />
                    </motion.video>


                </div>
            </div>






        </section>
    )
}

export default Hero