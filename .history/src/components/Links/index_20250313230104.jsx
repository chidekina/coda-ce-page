const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8">
            {links.map(link => (
                <li 
                key={link.id}
                className=" flex border-2 w-164 rounded-4xl box-content p"
                >
                    <a
                        className="flex text-2xl font-semibold gap-4" 
                        href={link.path}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;