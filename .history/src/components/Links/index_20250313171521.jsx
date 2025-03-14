const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
                {link.name}
            </a>
        ))
      );
}
 
export default Links;