import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        links.map(link => (
            <a className="w-"
            key={link.id} 
            href={link.path}>
               {Icon(link.id)}
                {link.name}
            </a>
        ))
      );
}
 
export default Links;