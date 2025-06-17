import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { HomePage } from './pages/home/HomePage.tsx';
import { LoginPage } from './pages/authorization/LoginPage.tsx';
import RegistrationPage from './pages/register/RegistrationPage.tsx';
import { CatalogPage } from './pages/catalog/CatalogPage.tsx';
import { CartPage } from './pages/cart/Cart.tsx';
import { FavoritesPage } from './pages/favorites/Favorites.tsx';
import { OrdersPage } from './pages/orders/OrdersPage.tsx';
import { NotFoundPage } from './pages/pageNotFound/Page404.tsx';
import { AboutUsPage } from './pages/about/AboutPage.tsx';
import { getTokenFromCookie, ProfilePage } from './pages/profile/ProfilePage.tsx';
import { Navigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddressesPage from './pages/addresses/AddressesPage.tsx';
import { ProductDetailsPage } from './pages/product/Product.tsx';
import { initializeCatalog } from './store/slice/catalog-slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store.ts';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    void dispatch(initializeCatalog());
  }, [dispatch]);
  useEffect(() => {
    const currentToken = getTokenFromCookie();
    if (!currentToken) {
      setToken(null);
      return;
    }
    setToken(currentToken);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<>{!token ? <LoginPage /> : <Navigate to="/" />}</>} />
        <Route
          path="registration"
          element={<>{!token ? <RegistrationPage /> : <Navigate to="/" />}</>}
        />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/addresses" element={<AddressesPage />} />
        <Route path="team" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
