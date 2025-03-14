const Links = ({ links }) => {
    return (
        links.map(link => (
            <a href={link.path}>

            </a>
        ))
      );
}
 
export default Links;