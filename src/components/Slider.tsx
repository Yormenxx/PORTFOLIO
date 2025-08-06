import { FaReact, FaPhp, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";

function Slider() {
    return (
        <>

            <div   className="md:px-12 px-1 mx-auto  w-full md:w-[95%] bg-black">
                <Marquee autoFill pauseOnHover >

                    <div className="px-4">

                        <FaReact className="text-5xl text-neutral-500 " />

                    </div>
                    <div className="px-4">
                        <RiTailwindCssFill className="text-5xl text-neutral-500  " />
                    </div>
                    <div className="px-4">
                        <FaPhp className="text-5xl text-neutral-500 " />
                    </div>
                 

                    <div className="px-4">
                        <RiNextjsFill className="text-5xl text-neutral-500  " />
                    </div>
                    <div className="px-4">
                        <SiMysql className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <SiMongodb className="text-5xl text-neutral-500 " />
                    </div>
                    <div className="px-4">
                        <SiJavascript className="text-5xl text-neutral-500  " />
                    </div>

                    <div className="px-4">
                        <FaNodeJs className="text-5xl text-neutral-500 " />
                    </div>

                    <div className="px-4">

                        <SiExpress className="text-5xl text-neutral-500 " />
                    </div>

                </Marquee>

                <Marquee autoFill pauseOnHover direction="right" className="py-5 ">

                    <div className="px-4">

                        <FaReact className="text-5xl text-neutral-500 " />

                    </div>
                    <div className="px-4">
                        <RiTailwindCssFill className="text-5xl text-neutral-500 " />
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

                </Marquee>
            </div>

        </>
    )
}

export default Slider