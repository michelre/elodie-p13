import "./layout.css";
import {NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../reducers/user";

const Layout = () => {

  const firstName = useSelector(state => state.user.firstName)
  const lastName = useSelector(state => state.user.lastName)
  const token = useSelector(state => state.user.token)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClickSignout = () => {
    dispatch(setToken({token: null}))
    localStorage.removeItem('token')
    navigate('/signin')
  }

  return (
    <>
      <header>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            {
                !token ? <>
                  <Link className="main-nav-item" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In            
                  </Link>
                </> : <>
                  <i className="fa fa-user-circle"></i> {firstName} {lastName} 
                  <button onClick={onClickSignout}>
                    <i className="fa fa-logout"></i> Sign Out
                  </button>
                </>


            }
          </div>
        </nav>
      </header>

      <main className="main bg-dark">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default Layout;
