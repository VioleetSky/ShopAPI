import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import EmptyLayout from '../templates/EmptyLayout';
import Catalog from '../pages/Catalog/Catalog.jsx';
import Order from '../pages/Order/Order.jsx';
import Goods from '../pages/Goods/Goods.jsx';
import DeliveryAndPayment from "../pages/DeliveryAndPayment/DeliveryAndPayment.jsx";
import Main from "../pages/Main/Main.jsx";
import Contacts from "../pages/Contacts/Contacts.jsx";
import Category from "../pages/Categories/Category.jsx";
import FavoriteList from "../pages/FavoriteList/FavoriteList.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Search from "../pages/Search/Search.jsx";
import NeedConsultation from "../pages/Consultation/NeedConsultation.jsx";

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop/>

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/goods/:id" element={<Goods />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route path="/delivery" element={<DeliveryAndPayment />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/favoriteList" element={<FavoriteList />} />
                    <Route path="/needConsultation" element={<NeedConsultation />} />
                </Route>

                <Route element={<EmptyLayout />}>
                    <Route path="/search" element={<Search />} />
                </Route>

            </Routes>
        </Router>

    );
};

export default AppRouter;