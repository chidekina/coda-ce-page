const Contributor = (pic, name, description, github) => {
    return (
        <div>
            <img src={pic} />
                <h2>{name}</h2>
                <h3>{description}</h3>
                <a href={github}>
                <i className="devicon-github-original"></i>
                </a>

        </div>
      );
}
 
export default Contributor;