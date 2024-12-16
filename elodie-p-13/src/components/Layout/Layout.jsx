import "./layout.css";
import {NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";

const Layout = () => {
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
            <Link className="main-nav-item" to="/signIn">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
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
