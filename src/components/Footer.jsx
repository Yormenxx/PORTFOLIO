import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { NAV_ITEMS } from "../constants"
function Footer() {
    return (
        <>

            <footer className="mt-24">

                <div className="max-w-7xl mx-auto px-4 ">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 w-[70%] mx-auto">

                        <div >

                            <h2 className="text-2xl text-[#00ec76] font-bold">Juan Ortiz</h2>
                            <p>
                                Desarrollador web con enfasis en el back-end capaz de llevar proyectos que permitan la entrega optimizada y continua al usuario.
                            </p>
                            <div className="flex items-center justify-start space-x-1">

                                <a href=""><FaGithub className="text-3xl   text-neutral-700 hover:text-[#00ec76] duration-150 ease-in-out" /></a>
                                <a href=""> <FaLinkedin className="text-3xl   text-neutral-700  hover:text-[#00ec76] duration-150 ease-in-out" /></a>
                                <a href=""><FaDiscord className="text-3xl   text-neutral-700  hover:text-[#00ec76] duration-150 ease-in-out" /></a>

                            </div>


                        </div>

                        <div>
                            <h2 className="text-2xl text-[#00ec76] font-bold">Navegación</h2>

                            <ul className="space-y-1.5 " >
                                {
                                    NAV_ITEMS.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} className="relative px-3  hover:text-[#00ec76] duration-200 ease-in-out ">{item.name}</a>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl text-[#00ec76] font-bold">Tecnologias</h2>
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>Php</li>
                                <li>Xampp</li>
                                <li>Mongodb y Mysql</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl text-[#00ec76] font-bold">Estadisticas</h2>
                            <a href="">Dashboard</a>
                        </div>



                    </div>


                </div>


                <div className=" max-w-6xl mx-auto border-t mt-10 border-neutral-400">

                                <div className="flex justify-center items-center py-5">
                                    <p>© 2025 Juan Ortiz Todos los derechos reservados</p>
                                    <p>v:3.0.1</p>
                                </div>

                </div>



            </footer>



        </>
    )
}

export default Footer