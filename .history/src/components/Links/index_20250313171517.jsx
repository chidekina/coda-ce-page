const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
                <i className=""></i>
                {link.name}
            </a>
        ))
      );
}
 
export default Links;