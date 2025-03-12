import logo from "../assets/juma-bw.webp"
import { NAV_ITEMS } from "../constants"
import { RiCloseFill, RiGithubFill, RiLinkedinBoxFill, RiMailFill, RiMenu3Line } from "@remixicon/react"
import { useState } from "react"


function Navbar() {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }


  return (
    <nav className='fixed w-full z-40   m-3'>

      <div className='flex justify-between items-center rounded-lg border !backdrop-blur-2xl bg-white/30 border-neutral-200 max-w-[95%] mx-auto px-4 py-2'>

        <div className="flex items-center">
          <img src={logo} width={50} height={24} alt="logo" />
          <span className="font-extrabold ">Juma<span className="text-[#00ec76]">Code</span></span>
        </div>

        

        <div>
          <ul className="hidden md:flex space-x-5">
            {
              NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="relative px-3 after:content-[''] after:absolute after:bg-[#00ec76] after:h-[2px] after:w-0 after:left-0 after:-bottom-2.5 after:transition-all after:duration-300 z-50 hover:after:w-full hover:text-[#00ec76] transition-colors ">{item.name}</a>
                </li>

              ))
            }
          </ul>

        </div>

        <div className=" hidden md:flex items-center justify-center space-x-2">
          <a href=""><RiLinkedinBoxFill className="hover:text-[#00ec76] " /></a>
          <a href=""><RiGithubFill className="hover:text-[#00ec76] " /></a>

          <a href=""><RiMailFill className="hover:text-[#00ec76] " /></a>

        </div>


        <div className="md:hidden">

          <button onClick={toggleMenu} className="text-black cursor-pointer ">
            {mobileDrawerOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>

        </div>



      </div>

      {
        mobileDrawerOpen && (

          <div className="w-[95%] absolute md:hidden mx-auto bg-white/90   border border-neutral-200 p-4 rounded-xl mt-2">
            <ul className="flex flex-col space-y-4">
              {
                NAV_ITEMS.map((item, index) => (
                  <li key={index}>
                    <a className="hover:text-[#00ec76] duration-200 ease-in-out " href={item.link}>{item.name}</a>
                  </li>
                ))
              }


            </ul>

            <div className="flex items-center justify-center space-x-2">
              <a href=""><RiLinkedinBoxFill className="hover:text-[#00ec76] " /></a>
              <a href=""><RiGithubFill className="hover:text-[#00ec76] " /></a>

              <a href=""><RiMailFill className="hover:text-[#00ec76] " /></a>

            </div>

          </div>



        )
      }


    </nav>
  )
}

export default Navbar