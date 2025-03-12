
import { useEffect } from "react"


function Scroll() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }
    
      useEffect(() => {
        const timerId = setTimeout(() => {
          scrollToTop()
        }, 10)
    
        return () => clearTimeout(timerId)
      }, [])
    
  return (
    <></>
  )
}

export default Scroll