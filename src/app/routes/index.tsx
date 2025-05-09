import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/HomePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/catalog" element={<CatalogPage />} /> */}
      {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
      {/* <Route path="/cart" element={<CartPage />} /> */}
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}
