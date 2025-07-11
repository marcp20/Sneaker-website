import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LoadingSpinner from './Components/LoadingSpinner'; // Create this component

// Lazy-loaded pages
const Shop = React.lazy(() => import('./Pages/Shop'));
const Cart = React.lazy(() => import('./Pages/Cart'));
const Product = React.lazy(() => import('./Pages/Product'));
const ShopCategory = React.lazy(() => import('./Pages/ShopCategory'));
const LoginSignup = React.lazy(() => import('./Pages/LoginSignup'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));

// Assets
import women_banner from "./Components/Assets/ban3.jpeg";
import men_banner from "./Components/Assets/ban3.jpeg";
import kid_banner from "./Components/Assets/ban3.jpeg";

export const backend_url = process.env.REACT_APP_BACKEND_URL || 'https://sneaker-website-1.onrender.com';
export const currency = '$';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index element={<Shop gender="all" />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollRestoration />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
