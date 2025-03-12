import Type from "./Type"
import video from "../assets/vrvideopti.webm"
import { FaReact, FaPhp, FaFilePdf, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { LuMessageSquareShare } from "react-icons/lu";
import logo from "../assets/juma-bw.webp"

import { SiNextdotjs, SiMysql, SiMongodb } from "react-icons/si";
// import ReactPlayer from 'react-player'

function Hero() {
    return (
        <section className="relative px-2 md:px-10 pt-34 md:pt-20">



            <div className="m-2  ">
                <div className=" grid grid-cols-1 md:grid-cols-2  text-center md:text-left mx-auto place-items-center ">

                    <div className="flex flex-col space-y-3 md:pl-7 pl-1 ">
                        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">¡Hola extraño!</p>
                        <p className="text-5xl md:text-6xl font-bold text-neutral-700">Mi nombre es Juan</p>
                        <p className="font-bold text-[25px] md:text-3xl typed "><Type /></p>
                        <p className="text-xl font-bold text-neutral-700">Programador back-end capaz de llevar proyectos que permitan la entrega optimizada y continua al usuario.</p>
                        <p className=" tracking-tighter bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
                            El desarrollo que he realizado en diversos proyectos personales me permiten cada vez más mejorar como desarrollador.Me gusta la manera como los productos surgen casi de la nada, solo con la disciplina y creatividad.
                        </p>

                        <div>

                            <div className="flex space-x-3 items-center justify-start">
                                <FaReact className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiNextdotjs className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <FaPhp className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiMysql className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                                <SiMongodb className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="mx-auto md:mx-0 flex items-center justify-start w-[300px] bg-neutral-700 text-white rounded-lg px-2 my-5">
                            <div className="w-[10px] h-[10px] rounded-full border border-[#00ec76] bg-[#00ec76] mr-3  dot"></div>
                            Disponible para nuevos proyectos
                        </div>
                    </div>
                    {/*                 
                <ReactPlayer url={video}  autoPlay={true} playing={true} loop muted style={{overflow:"hidden", width:"300"}}   /> */}

                    <video width={550} height={550} loop autoPlay={true} muted className="overflow-hidden "  >
                        <source src={video} type="video/mp4" />
                    </video>


                </div>
            </div>



        


        </section>
    )
}

export default Hero