import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Icon = ({ id }) => {
    return (
        id === 1 ? <CiLinkedin />
        :  id === 2 ? <FaWhatsappatsapp />
        : <FaGithub />

    );
}

export default Icon;