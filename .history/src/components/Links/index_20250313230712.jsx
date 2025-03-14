import { FaInstagram } from "react-icons/fa";

const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8 ">
            <li className="w-32">
                <a href="https://www.instagram.com/coda.ce">
                <FaInstagram className="w-32" />
                </a>
            </li>
        </ul>
    );
}

export default Links;