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

export function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Chekout />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
}