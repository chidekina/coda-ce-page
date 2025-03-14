import { CiLinkedin } from "react-icons/ci";

const Icon = ({ id }) => {
    return (
        id === 1 ? <CiLinkedin />
        : null
    );
}

export default Icon;