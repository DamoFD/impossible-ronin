import Header from "../components/Header";
import { Foo } from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC = () => {
    return (
        <div className="bg-brand-gray w-full h-screen p-8 flex">
            <Sidebar />
            <Header />
        </div>
    );
}

export default MainLayout;
