import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        className="tourist-main-menu one_page hidden-xs hidden-sm"
        style={{ zIndex: "auto", position: "static", top: "auto" }}
      >
        <div className="tourist_nav_area scroll_fixed postfix">
          <div className="container">
            <div className="row logo-left">
              {/* LOGO */}
              <div className="col-md-3 col-sm-3 col-xs-4">
                <div className="logo">
                  <Link to="/" title="tourist">
                    <img src="assets/images/1.png" alt="tourist" />
                  </Link>
                  <Link to="/" title="tourist">
                    <img src="assets/images/logo-tr.png" alt="astute" />
                  </Link>
                </div>
              </div>
              {/* MAIN MENU */}
              <div className="col-md-9 col-sm-9 col-xs-8">
                <nav className="tourist_menu main-search-menu">
                  <ul className="sub-menu nav_scroll">
                    <li className="current">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/package">Package</Link>
                    </li>
                    <li>
                      <Link to="/hotels">Hotels</Link>
                    </li>
                    <li>
                      <Link to="/flights">Flight</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                       
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="donate-btn-header">
                    <Link className="dtbtn" to="/book-now">
                      Book Now
                    </Link>
                  </div>
                </nav>
              </div>
              {/* END MAIN MENU */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
