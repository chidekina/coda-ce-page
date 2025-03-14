import { CiLinkedin } from "react-icons/ci";

const Icon = ({ id }) => {
    return (
        id === 1 ? <CiLinkedin />
        :  id === 2 ? <FaWhatsapp />
        : 
    );
}

export default Icon;