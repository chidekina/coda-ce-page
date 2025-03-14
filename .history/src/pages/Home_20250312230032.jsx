import logo from "../assets/logo.png";

const Home = () => {
    return (
        <div className="h-10">
            <div className="flex justify-center items-center">
                <img src={logo} className="w-96" />
            </div>
        </div>
    );
}

export default Home;