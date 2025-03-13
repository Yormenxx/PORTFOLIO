import { FaReact, FaPhp, FaLaravel, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { FadeUp } from "./Hero"
import { animate, motion } from "framer-motion"
function Slider() {
    return (
        <>

            <motion.div variants={FadeUp(0.8)}
    initial="initial"
    animate="animate" transition={{duration:1}}  className="md:px-12 px-1 mx-auto  w-full md:w-[90%]">
                <Marquee autoFill pauseOnHover className="py-5">

                    <div className="px-4">

                        <FaReact className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out " />

                    </div>
                    <div className="px-4">
                        <RiTailwindCssFill className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out " />
                    </div>
                    <div className="px-4">
                        <FaPhp className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out " />
                    </div>
                    <div className="px-4">
                        <FaLaravel className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out " />
                    </div>

                    <div className="px-4">
                        <RiNextjsFill className="text-7xl text-neutral-500  hover:text-[#00ec76] duration-200 ease-in-out" />
                    </div>
                    <div className="px-4">
                        <SiMysql className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out " />
                    </div>
                    <div className="px-4">
                        <SiMongodb className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out" />
                    </div>
                    <div className="px-4">
                        <SiJavascript className="text-7xl text-neutral-500  hover:text-[#00ec76] duration-200 ease-in-out" />
                    </div>

                    <div className="px-4">
                        <FaNodeJs className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out" />
                    </div>

                    <div className="px-4">

                        <SiExpress className="text-7xl text-neutral-500 hover:text-[#00ec76] duration-200 ease-in-out" />
                    </div>

                </Marquee>

                {/* <Marquee autoFill pauseOnHover direction="right" className="py-5 ">

                    <div className="px-4">

                        <FaReact className="text-5xl text-neutral-500 " />

                    </div>
                    <div className="px-4">
                        <RiTailwindCssFill className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <FaPhp className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <FaLaravel className="text-5xl text-neutral-500 " />
                    </div>

                    <div className="px-4">
                        <RiNextjsFill className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <SiMysql className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <SiMongodb className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <SiJavascript className="text-5xl text-neutral-500 " />
                    </div>

                    <div className="px-4">
                        <FaNodeJs className="text-5xl text-neutral-500 " />
                    </div>

                    <div className="px-4">

                        <SiExpress className="text-5xl text-neutral-500 " />
                    </div>

                </Marquee> */}
            </motion.div>

        </>
    )
}

export default Slider