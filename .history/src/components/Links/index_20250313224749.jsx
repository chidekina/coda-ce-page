import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul></ul>
        links.map(link => (
            <a className="w-16"
            key={link.id} 
            href={link.path}>
               {Icon(link.id)}
                {link.name}
            </a>
        ))
      );
}
 
export default Links;