import { Link } from 'react-router-dom'
import { useLogout } from '../../../../../../hooks/auth/useLogout';
import { useState } from 'react';
import CartButton from './cartButton/CartButton';
import WelcomeSection from './welcome-section/WelcomeSection';
import { useMenu } from '../../../../../../context/MobileMenuContext';


const AuthSectionNavBar = () => {

    const {logout,userContext} = useLogout();
    const {closeMenu} = useMenu();

    const [dropdownState,setDropDownState] = useState<boolean>(false);


    const handleLogout = () => {
      logout();
      setDropDownState(false);
    }


  return (
    <div className="auth-navbar">
      <ul>
        {!userContext.user && (
          <>
            <li  onClick={closeMenu}>
              <Link className="auth-navbar-items" onClick={handleLogout} to="/login">
                Login
              </Link>
            </li>
            <li  onClick={closeMenu}>
              <Link className="auth-navbar-items" to="/register">
                Register
              </Link>
            </li>{" "}
          </>
        )}
        <li className="auth-navbar-items">
          {userContext.user && (
            <>
              <WelcomeSection
                handleDropDownState={() => setDropDownState(!dropdownState)}
                state={dropdownState}
                name={userContext.user ? userContext.user?.username : null}
              >
                <Link
                  className="logout-navbar-items"
                  onClick={handleLogout}
                  to={"/home"}
                >
                  Logout
                </Link>
              </WelcomeSection>
            </>
          )}
        </li>
        <li onClick={closeMenu}>
        <CartButton />
        </li>
      </ul>
    </div>
  );
};

export default AuthSectionNavBar;