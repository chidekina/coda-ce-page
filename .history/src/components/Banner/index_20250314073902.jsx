import { motion } from "motion/react"
import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col gap-12 px-32 pt-12 mb-16 max-lg:px-4 max-lg:mb-12 max-lg:gap-8">
            <h1>
                O site da comunidade
            </h1>
            <div className="flex justify-center max-lg:">
                <img src={logo} className="w-232 max-lg:w-100" />
            </div>
            <div className="flex justify-end">
                <h2 className="text-4xl max-lg:text-center max-lg:text-2xl">
                    Feito especialmente para <strong className="text-(--secondary-color) font-bold">você</strong>, dev.
                </h2>
            </div>
        </div>
    );
}

export default Banner;