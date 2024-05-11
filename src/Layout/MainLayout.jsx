import { Outlet } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
