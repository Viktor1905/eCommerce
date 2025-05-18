import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { HomePage } from '../../pages/home/HomePage';
import { CartPage } from '../../pages/cart/Cart';
import { FavoritesPage } from '../../pages/favorites/Favorites';
import { OrdersPage } from '../../pages/orders/OrdersPage';
import { CatalogPage } from '../../pages/catalog/CatalogPage';
import { LoginPage } from '../../pages/authorization/Login-page.tsx';
import RegistrationPage from '../../pages/register/RegistrationPage.tsx';
import { NotFoundPage } from '../../pages/pageNotFound/Page404.tsx';
import { ProfilePage } from '../../pages/profile/ProfilePage.tsx';
import { AboutUsPage } from '../../pages/about/AboutPage.tsx';
import { TeamPage } from '../../pages/team/TeamPage.tsx';
import { Navigate } from 'react-router-dom';

export function AppRoutes() {
  const authStatus = localStorage.getItem('firstName');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={authStatus ? <Navigate to="/" /> : <LoginPage />} />
        <Route
          path="registration"
          element={authStatus ? <Navigate to="/" /> : <RegistrationPage />}
        />
        <Route path="catalog" element={<CatalogPage />} />
        {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}
