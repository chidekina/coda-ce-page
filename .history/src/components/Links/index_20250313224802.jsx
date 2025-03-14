import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul>
        {links.map(link => (
            <a className="w-16"
            key={link.id} 
            href={link.path}>
               {Icon(link.id)}
                {link.name}
            </a>
        ))}
                </ul>
      );
}
 
export default Links;