import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../../Auth";
// const aux = (props) => props.children;
// export default aux;

const header = props => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.style.marginLeft === "-1000px" || mobileNav.style.marginLeft === '') mobileNav.style.marginLeft = '0';
    else {
      mobileNav.style.marginLeft = "-1000px";
    }
  };
  return (
    <header>
      <nav className="mobile-nav">
        <div className="menu-icon--mobile" onClick={toggleMobileNav} />
        {!auth0Client.isAuthenticated() && (
          <button onClick={auth0Client.signIn}>Sign In</button>
        )}
        {auth0Client.isAuthenticated() && (
          <div>
            <button
              className="btn"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
        <ul className="mobile-nav__links">
          <li onClick={toggleMobileNav}>
            <Link to="/">Home</Link>
          </li>
          <li
            className="main-nav__listItem--margin-top"
            onClick={toggleMobileNav}
          >
            <Link to="/products">Products</Link>
          </li>
          <li
            className="main-nav__listItem--margin-top "
            onClick={toggleMobileNav}
          >
            <Link to="/contact">Contact</Link>
          </li>
          {auth0Client.isAuthenticated() ? (
            <li
              className="main-nav__listItem--margin-top "
              onClick={toggleMobileNav}
            >
              <Link to="/admin/products"> Admin</Link>
            </li>
          ) : null}
        </ul>
      </nav>
      <nav className="main-nav">
        <p className="main-nav-logo">Groove</p>

        <ul className="main-nav__links margin-auto">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="main-nav__links--border">
            <Link to="/products">Products</Link>
          </li>
          <li className="main-nav__links--border">
            <Link to="/contact">Contact</Link>
          </li>
          {auth0Client.isAuthenticated() ? (
            <li className="main-nav__links--border">
              <Link to="/admin/products"> Admin</Link>
            </li>
          ) : null}
        </ul>

        {!auth0Client.isAuthenticated() && (
          <button onClick={auth0Client.signIn}>Sign In</button>
        )}
        {auth0Client.isAuthenticated() && (
          <div>
            <button
              className="btn"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}

        <div className="menu-icon" onClick={toggleMobileNav} />
      </nav>
    </header>
  );
};

export default withRouter(header);
