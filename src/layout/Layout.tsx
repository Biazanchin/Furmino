import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/Footer";


export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
