import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <div className="px-32">
            <ul className="flex-col gap-12 pl-102">
                <li>
                    <a
                        className="flex items-center"
                        target="_blank"
                        href="https://www.instagram.com/coda.ce">
                        <InstagramOutlined className="text-7xl hover:text-(--primary-color)" />
                        <h1 className="te">
                            Siga Nosso Instagram!
                        </h1>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/coda.ce">
                        <WhatsAppOutlined className="text-7xl" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;