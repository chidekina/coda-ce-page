import { FaInstagram } from "react-icons/fa";

const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8 ">
            <li className="w-102">
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled />
                </a>
            </li>
        </ul>
    );
}

export default Links;