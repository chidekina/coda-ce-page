const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
               {link.id === 1 ? (
                    // Add your case 1 content here
                    <span>Case 1 content</span>
                ) : (
                    // Add your default content here
                    <span>Default content</span>
                )}
                {link.name}
            </a>
        ))
      );
}
 
export default Links;