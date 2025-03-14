const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
               {renderLinkContent(link.id)}
                {link.name}
            </a>
        ))
      );
}
 
export default Links;