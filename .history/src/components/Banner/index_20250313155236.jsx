import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col gap-12">
            <h1 className="">
                O site da comunidade
            </h1>
            <img src={logo} />
            <div className="flex justify-end">
                <h2>
                    Feito especialmente para <strong>você</strong>, dev.
                </h2>
            </div>
        </div>
    );
}

export default Banner;