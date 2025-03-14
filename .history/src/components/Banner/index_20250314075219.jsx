import { motion } from "motion/react"
import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col gap-12 px-32 pt-12 mb-16 max-lg:px-4 max-lg:mb-12 max-lg:gap-8">
            <motion.h1
                className="text-5xl max-lg:hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0 }}
            >
                O site da comunidade
            </motion.h1>
            <motion.div className="flex justify-center max-lg:"
                initial={{ opacity: 0, scale: 1, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.5 }} 
                >
                <img src={logo} className="w-232 max-lg:w-100" />
            </motion.div>
            <div className="flex justify-end">
                <h2 
                className="text-4xl max-lg:text-center max-lg:text-2xl">
                    Feito especialmente para <strong className="text-(--secondary-color) font-bold">você</strong>, dev.
                </h2>
            </div>
        </div>
    );
}

export default Banner;