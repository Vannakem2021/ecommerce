// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserProfile from "./components/UserProfile";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Wishlist from "./pages/Wishlist";
import { MainProvider } from "./contexts/MainContext";
import { SearchProvider } from "./contexts/SearchContext";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainProvider>
        <AuthProvider>
          <CartProvider>
            <SearchProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="product/:id" element={<Product />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="success" element={<Success />} />
                  <Route path="cancel" element={<Cancel />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="signin" element={<Signin />} />
                  <Route
                    path="profile"
                    element={
                      <ProtectedRoute>
                        <UserProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="favourites"
                    element={
                      <ProtectedRoute>
                        <Wishlist />
                      </ProtectedRoute>
                    }
                  />
                </Route>
              </Routes>
            </SearchProvider>
          </CartProvider>
        </AuthProvider>
      </MainProvider>
    </Router>
  );
};

export default App;
