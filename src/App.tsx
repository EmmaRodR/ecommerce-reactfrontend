import {Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./App.css";
import Products from "./pages/Products/Products";
import Header from "./components/layout/header/Header";
import { UserContextProvider } from "./context/UserContext";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import ManageCategories from "./pages/ManageCategories/ManageCategories";
import { ShowTableContextProvider } from "./context/ShowTableContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import ProtectedRouter from "./utils/ProtectedRoute";
import "./styles/container-page.css";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Order from "./pages/Order/Order";
import { AlertProvider } from "./context/AlertContext";
import OrderAuth from "./components/orders/OrderAuth/OrderAuth";
import { MobileMenuProvider } from "./context/MobileMenuContext";
import { AlertContainer } from "./components/common/alerts/toastAlert/AlertContainer";
import KeepAlive from "./utils/KeepAliveServer";

function App() {


    KeepAlive();


  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <MobileMenuProvider>
        <AlertProvider>
          <ShowTableContextProvider>
            <CartContextProvider>
              <HashRouter>
                <Header></Header>
                <Cart />
                <AlertContainer position="bottom" />
                <div>
                  <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route
                      path="/unauthorized"
                      element={<Unauthorized></Unauthorized>}
                    ></Route>
                    <Route
                      path="/register"
                      element={<Register></Register>}
                    ></Route>
                    <Route
                      path="/orderauth"
                      element={<OrderAuth></OrderAuth>}
                    ></Route>
                     <Route
                      path="/order"
                      element={<Order></Order>}
                    ></Route>
                    <Route
                      path="/products"
                      element={<Products></Products>}
                    ></Route>
                    <Route
                      path="/manageProducts"
                      element={
                        <ProtectedRouter isAdmin>
                          <ManageProducts />
                        </ProtectedRouter>
                      }
                    ></Route>
                    <Route
                      path="/manageCategories"
                      element={
                        <ProtectedRouter isAdmin>
                          <ManageCategories />
                        </ProtectedRouter>
                      }
                    ></Route>
                  </Routes>
                </div>
              </HashRouter>
            </CartContextProvider>
          </ShowTableContextProvider>
          </AlertProvider>
          </MobileMenuProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

