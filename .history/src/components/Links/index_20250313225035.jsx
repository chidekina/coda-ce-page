import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul className="flex justify-around">
            {links.map(link => (
                <li 
                key={link.id}
                className="border-2 w-60"
                >
                    <a
                        className="text-" 
                        href={link.path}>
                        {Icon(link.id)}
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;