import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-5xl">
                O site da comunidade
            </h1>
            <div>
            <img src={logo} className="w-104" />
            </div>
            <div className="flex justify-end">
                <h2 className="text-3xl">
                    Feito especialmente para <strong>você</strong>, dev.
                </h2>
            </div>
        </div>
    );
}

export default Banner;