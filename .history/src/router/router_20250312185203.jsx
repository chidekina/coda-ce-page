import { BrowserRouter, Route, Routes } from "react-router";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home /></>
            </Routes>
        </BrowserRouter>
        </>
      );
}
 
export default Paths;