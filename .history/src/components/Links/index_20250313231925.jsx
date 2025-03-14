import { InstagramFilled } from "@ant-design/icons";

const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8 ">
            <li className="w-102">
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled style={{ color: "white" , width: "124px"}} />
                </a>
            </li>
        </ul>
    );
}

export default Links;