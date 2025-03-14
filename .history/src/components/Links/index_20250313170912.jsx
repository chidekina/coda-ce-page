const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id href={link.path}>

            </a>
        ))
      );
}
 
export default Links;