import {  FaFilePdf, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { LuMessageSquareShare } from "react-icons/lu";
function Contact() {


    return (
        <>

            <section className="mx-auto px-14 py-10 ">

                <div className="containerMain flex flex-col justify-center items-center text-white px-10 py-20 rounded-2xl h-[500px] text-center">

                    <div className="mx-auto md:mx-0 flex items-center justify-start w-[300px] bg-neutral-700 text-[#00ec76] rounded-lg px-2 my-5">
                        <div className="w-[10px] h-[10px] rounded-full border border-[#00ec76] bg-[#00ec76] mr-3  dot"></div>
                        Disponible para nuevos proyectos
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold ">Construyamos algo increible,juntos.</h2>
                    <p className="pt-2.5 font-bold leading-relaxed tracking-wider text-neutral-400 w-[70%] ">Puedes comunicarte conmigo en cualquier momento , de acuerdo a los siguientes enlaces, además puedes ver mi hoja de vida si te interesa.</p>

              



                    <div className="space-y-6 py-3">

                        <div className="flex items-center justify-center space-x-4">

                            <a href=""><FaGithub className="text-4xl text-neutral-200 hover:text-[#00ec76] duration-150 ease-in-out" /></a>
                            <a href=""> <FaLinkedin className="text-4xl text-neutral-200 hover:text-[#00ec76] duration-150 ease-in-out" /></a>
                            <a href=""><FaDiscord className="text-4xl text-neutral-200 hover:text-[#00ec76] duration-150 ease-in-out" /></a>

                        </div>
                        <div className=" flex items-center justify-center space-x-4">

                            <a href="" className="flex items-center px-4 py-2 bg-[#00ec76] rounded-xl capitalize text-white hover:opacity-60 ease-in-out duration-200  ">Descargar cv <FaFilePdf className="text-xl text-white ml-2" /></a>


                            <a href="" className="flex items-center px-4 py-2 bg-white border border-[#00ec76] rounded-xl capaitalize hover:opacity-60 ease-in-out duration-200 text-neutral-700 " >Enviar un mensaje <LuMessageSquareShare className="text-xl text-neutral-700 ml-2" /></a>
                        </div>

                    </div>


                </div>

            </section>



        </>
    )
}

export default Contact