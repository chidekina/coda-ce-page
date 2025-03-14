import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul>
        {links.map(link => (
            <li></li>
            <a
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