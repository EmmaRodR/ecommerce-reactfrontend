import { useMenu } from "../../../../context/MobileMenuContext";
import AuthSectionNavBar from "./navbars/authnavbar/AuthSectionNavBar";
import ProductsSectionNavBar from "./navbars/productsnavbar/ProductsSectionNavBar";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {

    const {isMenuOpen,toogleMenu} = useMenu();

  return (
    <>
      <div>
        <button onClick={toogleMenu} className="open-menu">
          {!isMenuOpen && <CiMenuBurger />}
        </button>
      </div>
      <div className={`${"containers-navbar"} ${isMenuOpen ? "visible" : ""}`}>
        <button className="close-menu" onClick={toogleMenu}>
          <IoIosClose />
        </button>
        <ProductsSectionNavBar/>
        <AuthSectionNavBar/>
      </div>
    </>
  );
};

export default NavBar;
