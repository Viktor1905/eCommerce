import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { HomePage } from '../../pages/home/HomePage';
import { CartPage } from '../../pages/cart/Cart';
import { FavoritesPage } from '../../pages/favorites/Favorites';
import { OrdersPage } from '../../pages/orders/OrdersPage';
import { CatalogPage } from '../../pages/catalog/CatalogPage';
import { LoginPage } from '../../pages/authorization/Login-page.tsx';
import RegistrationPage from '../../pages/register/RegistrationPage.tsx';
import { NotFoundPage } from '../../pages/PageNotFound/Page404.tsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="orders" element={<OrdersPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
