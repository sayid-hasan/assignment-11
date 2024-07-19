import { Outlet } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-font-merriweather">
      <div className="max-w-[1250px] mx-auto ">
        <Nav></Nav>
        <div className="min-h-[400px]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
