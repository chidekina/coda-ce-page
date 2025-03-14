import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <>
            <h1>
                O site da comunidade
            </h1>
            <img src={logo} />
            <h2>
                Feito especialmente para <strong>você, dev.
            </h2>
        </>
      );
}
 
export default Banner;