import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { HomePage } from './pages/home/HomePage.tsx';
import { LoginPage } from './pages/authorization/Login-page.tsx';
import RegistrationPage from './pages/register/RegistrationPage.tsx';
import { CatalogPage } from './pages/catalog/CatalogPage.tsx';
import { CartPage } from './pages/cart/Cart.tsx';
import { FavoritesPage } from './pages/favorites/Favorites.tsx';
import { OrdersPage } from './pages/orders/OrdersPage.tsx';
import { NotFoundPage } from './pages/PageNotFound/Page404.tsx';

function App() {
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

export default App;
