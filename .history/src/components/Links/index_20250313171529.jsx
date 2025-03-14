const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
                <img />
                {link.name}
            </a>
        ))
      );
}
 
export default Links;