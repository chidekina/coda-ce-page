import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Icon = ({ id }) => {
    return (
        id === 1 ? <CiLinkedin />
        :  id === 2 ? <FaWhatsapp />
        : <FaGithub />
    );
}

export default Icon;