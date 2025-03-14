import { InstagramFilled } from "@ant-design/icons";

const Links = ({ links }) => {
    return (
        <ul className="flex gap-2">
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled className="text-7xl"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled className="text-7xl"/>
                </a>
            </li>
        </ul>
    );
}

export default Links;