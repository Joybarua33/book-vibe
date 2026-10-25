import { Outlet } from "react-router";
import Navbar from "../componets/shared/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;