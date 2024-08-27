import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import ProductDetails from "../pages/productDetails";
import Cart from "../pages/cart";
import Chekout from "../pages/chekout";
import Login from "../components/Login/Login";
import Error from "../pages/error";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../services/Firebase/FirebaseAuth";
import LoginCheckout from "../components/Login/LoginCheckout";

export function Router() {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
        {user ? (
          <Route path="/checkout" element={<Chekout />} />
        ) : (
          <Route path="/checkout" element={<Navigate to="/loginCheckout" />} />
        )}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/products/:sku" element={<ProductDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/loginCheckout" element={<LoginCheckout />} />
    </Routes>
  );
}
