import { AnimatePresence, motion } from "framer-motion"


const Transition = () => {

    const transitionVariants = {
        initial: {
            x: "100%",
            width: "100%"
        },
        animate: {
            x: "0%",
            width: "0%"
        },
        exit: {
            x: ["0%", "100%"],
            width: ["0%", "100%"]
        }
    }
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div className="fixed top-0 right-full w-screen h-screen z-100 bg-neutral-900"
                    variants={transitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}>

                </motion.div>


                <motion.div className="fixed top-0 right-full w-screen h-screen z-20 bg-neutral-700 opacity-60"
                    variants={transitionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}>

                </motion.div>


            </div>
        </AnimatePresence>
    )
}

export default Transition
