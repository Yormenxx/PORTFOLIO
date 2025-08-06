import Type from "./Type"
import { FaReact, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiMongodb } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import col from "../assets/images/col.png"
import ger from "../assets/images/germany.png"
import usa from "../assets/images/usa.png"


function Hero() {


    return (
        <section >

            <div className="min-h-screen w-full relative bg-black pt-10">

                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                    }}
                />

                <div className="pt-24 grid grid-cols-1  text-center md:text-left mx-auto place-items-center relative z-10 ">


                    <div className="mx-auto md:mx-0 flex items-center justify-start w-[300px] !backdrop-blur-xl  text-white border border-neutral-600 rounded-lg px-2 py-1 my-5">
                        <div className="w-[10px] h-[10px] rounded-full  border border-[#00ec76] bg-[#00ec76] mr-3  dot"></div>
                        Disponible para nuevos proyectos
                    </div>

                    <div className="text-white  mb-4 mx-auto max-w-6xl relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
                            <span className="font-medium transition-colors duration-300 text-white">
                                <Type />

                            </span>

                        </h2>
                        <p className="text-base text-center sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 text-gray-200">El desarrollo que he realizado en diversos proyectos personales me permiten cada vez más mejorar como desarrollador.Me gusta la manera como los productos surgen casi de la nada, solo con la disciplina y creatividad.</p>
                    </div>


                    <div>

                        <div className="flex items-center space-x-3" >



                            <FaReact className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            <SiNextdotjs className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            <FaPhp className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            <SiMysql className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                            <SiMongodb className="text-4xl text-neutral-600 hover:text-[#00ec76] duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6  max-w-4xl mx-auto px-4 sm:px-0">

                        <a href="/hv-juan.pdf" target="_blank" className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-black/30 border-white/10 hover:bg-black/40 text-neutral-300">

                            <div className="p-2 rounded-lg transition-colors duration-300 bg-blue-500/20">
                                <FaFilePdf />
                            </div>
                            <div>
                                <p>Descargar CV</p>
                            </div>

                        </a>
                    
                        <a href="#" target="_blank" className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-black/30 border-white/10 hover:bg-black/40 text-neutral-300">

                            <div className="p-2 rounded-lg transition-colors duration-300 bg-red-500/20">
                                <MdEmail />
                            </div>
                            <div>
                                <p>Enviar un mensaje</p>
                            </div>

                        </a>


                    </div>

                    <div className="flex flex-items-center justify-center my-8 ">
                        <div className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md text-white">
                            <img src={col} alt="colombia" width={30} />
                            <div className="text-xs ">
                                <p className="font-bold" >Español</p>
                                <p className="text-neutral-500">Nativo</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md text-white" >
                            <img src={usa} alt="usa" width={30} />
                            <div className="text-xs ">
                                <p className="font-bold">Inglés</p>
                                <p className="text-neutral-500">Intermedio</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md text-white">
                            <img src={ger} alt="germany" width={30} />
                            <div className="text-xs ">
                                <p className="font-bold">Aleman</p>
                                <p className="text-neutral-500">Aprendiendo</p>
                            </div>
                        </div>
                    </div>





                </div>

            </div>









        </section>
    )
}

export default Hero