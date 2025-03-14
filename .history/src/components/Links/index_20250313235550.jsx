import { InstagramOutlined, WhatsAppOutlined, GithubOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <div className="flex px-32 justify-center">
            <ul className="flex flex-col gap-10">
                <li className="border-4 rounded-3xl w-228 px-12 py-8 :hover:trans">
                    <a
                        className="flex items-end gap-6"
                        target="_blank"
                        href="https://www.instagram.com/coda.ce">
                        <InstagramOutlined className="text-5xl" />
                        <h1 className="text-4xl">
                            Siga nosso <strong className="text-(--primary-color)">Instagram</strong>
                        </h1>
                    </a>
                </li>
                <li className="border-4 rounded-3xl w-228 px-12 py-8 :hover:trans">
                    <a 
                    className="flex items-end gap-6"
                    target="_blank" 
                    href="https://www.instagram.com/coda.ce">
                        <WhatsAppOutlined className="text-5xl" />
                        <h1 className="text-4xl">
                            Faça parte da <strong className="text-(--primary-color)">Comunidade</strong>
                        </h1>
                    </a>
                </li>
                <li className="border-4 rounded-3xl w-228 px-12 py-8 :hover:trans">
                    <a 
                    className="flex items-end gap-6"
                    target="_blank" 
                    href="https://www.instagram.com/coda.ce">
                        <GithubOutlined className="text-5xl" />
                        <h1 className="text-4xl">
                            Trilha do Aprendizado - <strong className="text-(--primary-color)">FullStack</strong>
                        </h1>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;