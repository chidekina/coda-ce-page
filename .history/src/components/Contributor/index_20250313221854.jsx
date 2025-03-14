const Contributor = ({ pic, name, description, github, linkedin }) => {
    return (
        <div>
            <img src={pic} />
            <h2>{name}</h2>
            <h3>{description}</h3>
            <a href={github}>
            </a>
            <a href={linkedin}>
            </a>
        </div>
    );
}

export default Contributor;