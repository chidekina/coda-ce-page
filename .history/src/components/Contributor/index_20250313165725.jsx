const Contributor = (pic, name, description) => {
    return (
        <div>
            <img src={pic} />
                <h2>{name}</h2>
                <h3>{description}</h3>
                <a href>
                <i className="devicon-github-original"></i>
                </a>

        </div>
      );
}
 
export default Contributor;