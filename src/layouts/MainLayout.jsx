import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import NavBar from "../shared/footer/navBar/NavBar";


const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;