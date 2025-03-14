import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul className="flex justify-around">
            {links.map(link => (
                <li 
                key={link.id}
                className=" flex border-2 w-60 rounded-4xl box"
                >
                    <a
                        className="flex text-2xl font-semibold gap-4" 
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