import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/Footer";
import { AuthRouter } from "../components/Rotas/AuthRouter";


export function Layout() {
  return (
    <AuthRouter>
      <Header />
      <Outlet />
      <Footer />
    </AuthRouter>
  );
}
