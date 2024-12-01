import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Overview from '@/pages/Overview';
import Drop from '@/pages/Drop';
import Play from '@/pages/Play';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Overview />} />
                    <Route path="/drop" element={<Drop />} />
                    <Route path="/play" element={<Play />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
