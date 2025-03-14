import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <ul className="flex gap-12 px-86">
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <InstagramOutlined 
                className="text-7xl" 
                style={{ color: 'var(--primary-color)' }}/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <WhatsAppOutlined className="text-7xl" style={{ color: 'var(--primary-color)' }}/>
                </a>
            </li>
        </ul>
    );
}

export default Links;