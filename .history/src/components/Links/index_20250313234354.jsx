import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <div className="px-32">
            <ul className="flex flex-col gap-12">
                <li className="border-4 rounded-3xl w-124 px-4 py-4">
                    <a
                        className="flex items-end gap-4"
                        target="_blank"
                        href="https://www.instagram.com/coda.ce">
                        <InstagramOutlined className="text-6xl hover:text-(--primary-color)" />
                        <h1 className="text-4xl">
                            Siga Nosso Instagram!
                        </h1>
                    </a>
                </li>
                <li className="border-4 rounded-3xl w-124 px-4 py-4">
                    <a 
                    className="flex items-end gap-4"
                    target="_blank" 
                    href="https://www.instagram.com/coda.ce">
                        <WhatsAppOutlined className="text-6xl" />
                        <h1 className="text-4xl">
                            Faça parte da comunidade
                        </h1>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;