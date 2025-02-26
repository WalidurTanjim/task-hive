import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto min-h-[calc(100vh-140px)]">         <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;