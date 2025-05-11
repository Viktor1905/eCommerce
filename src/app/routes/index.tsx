import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { HomePage } from '../../pages/home/HomePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registration" element={<Registration />} /> */}
        {/* <Route path="/catalog" element={<CatalogPage />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} />  */}
      </Route>
    </Routes>
  );
}
