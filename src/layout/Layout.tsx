import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/Footer";
/*import { AuthRouter } from "../components/Rotas/AuthRouter"; -> lembrar de cobrir o component*/

export function Layout() {
  return (
    <span>
      <Header />
      <Outlet />
      <Footer />
    </span>
  );
}
