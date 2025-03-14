const Contributor = ({ pic, name, description, github, linkedin }) => {
    return (
        <div>
            <img src={pic} />
                <h2>{name}</h2>
                <h3>{description}</h3>
                <a href={github}>
                <i className="devicon-github-original"></i>
                </a>
                <a href={linkedin}>
                <i className="devicon-linkedin-plain"></i>
                </a>

        </div>
      );
}
 
export default Contributor;