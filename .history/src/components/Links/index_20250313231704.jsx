import { InstagramFilled } from "@ant-design/icons";

const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8 ">
            <li className="w-102">
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled style={} />
                </a>
            </li>
        </ul>
    );
}

export default Links;