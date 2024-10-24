import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../../../context/UserContext";
import { ShowTableContext } from "../../../../../../context/ShowTableContext";
import { PagesEnum } from "../../../../../../types/pagesEnum";
import SwitchButton from "./switch-btn/SwitchButton";
import { useMenu } from "../../../../../../context/MobileMenuContext";


const ProductsSectionNavBar = () => {
  
  const showTableContext = useContext(ShowTableContext);
  const {closeMenu} = useMenu();
  const userContext = useContext(UserContext);

  return (
    <div className="products-navbar">
      <ul>
        <div className="">
          <SwitchButton />
        </div>
        <></>
        <li onClick={closeMenu}>
          <Link className="products-navbar-items" to="/home">
            Home
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link
            onClick={() => showTableContext.setShowTable(PagesEnum.products)}
            className="products-navbar-items"
            to="/products"
          >
            Products
          </Link>
        </li>
        {userContext.user?.role === "ADMIN" && (
          <>
            <li onClick={closeMenu}>
              <Link
                onClick={() =>
                  showTableContext.setShowTable(PagesEnum.productTable)
                }
                className="products-navbar-items"
                to="/manageProducts"
              >
                Manage Products
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                onClick={() =>
                  showTableContext.setShowTable(PagesEnum.categoryTable)
                }
                className="products-navbar-items"
                to="/manageCategories"
              >
                Manage Categories
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProductsSectionNavBar;
