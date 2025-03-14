import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col">
            <h1> 
                O site da comunidade
            </h1>
            <img src={logo} />
            <div></div><
            <h2>
                Feito especialmente para <strong>você</strong>, dev.
            </h2>
        </div>
      );
}
 
export default Banner;