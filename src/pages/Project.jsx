import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"


import Scroll from "../Scroll"
import { CiFolderOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"


function Project() {


   
    return (
        <>
            <Scroll />

            <Navbar />
            <section className="pt-26  px-2 md:px-15">




                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="text-center  border-t border-neutral-300">
                        <h2 className="text-left text-6xl font-bold text-[#00ec76] py-2">Proyectos</h2>
                    </div>

                    <p className="mb-12">Estos son algunos de los proyectos más representativos de mi programación.</p>
                </div>



                <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 space-y-6">

                    {

                        PROJECTS_ITEMS.map((item, index) => (

                            <div key={index} className="relative flex flex-col items-center sm:items-start sm sm:flex-row  space-x-2 md:h-[200px] transition-transform duration-300 ease-out 
               hover:-translate-y-2 hover:translate-x-2">

                                <img src={item.img} alt="project" className="w-[150px] sm:w-[250px] object-cover rounded-lg" />

                                <div className="flex flex-col items-center sm:items-start space-y-2 ">

                                    <h2 className="font-bold text-xl">{item.title}</h2>

                                    <div className="flex gap-1">
                                        {item.skills.map((icon, index) => (
                                            <div key={index} className="flex items-center text-sm text-white bg-[#00ec76] rounded-lg p-0.5">
                                                <span>{icon.icon}</span>
                                                <span className="ml-1">{icon.name}</span>
                                            </div>

                                        ))}
                                    </div>

                                    <p className="text-sm w-full text-center sm:text-left">{item.description}</p>

                                    <div className="flex items-center text-sm ">
                                        <a href={item.github.link} className="flex items-center ">Codigo{item.github.git}</a>
                                        <a href={item.preview.prevLink} className="flex items-center ml-1">Preview{item.preview.prev} </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <Link to="/" className=" px-4 py-2 bg-[#00ec76] rounded-xl capitalize text-white hover:opacity-60 ease-in-out duration-200  ">Regresar</Link> */}

              

              



            </section>

        </>

    )
}

export default Project