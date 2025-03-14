const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
               switch (link.id) {
                case 1:
                    
                    break;
               
                default:
                    break;
               }
                {link.name}
            </a>
        ))
      );
}
 
export default Links;