import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul className="flex justify-around">
            {links.map(link => (
                <li 
                key={link.id}
                className=" flex border-2 w-60"
                >
                    <a
                        className="text-2xl font-semibold" 
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