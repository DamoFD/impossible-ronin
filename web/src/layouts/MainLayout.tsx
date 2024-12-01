import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div className="bg-brand-gray w-full h-screen p-8 flex">
            <Sidebar />
            <div className="flex flex-col w-full">
            <Header />
            <div className="p-6">
                <Outlet />
            </div>
            </div>
        </div>
    );
}

export default MainLayout;
