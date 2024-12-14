import React from "react";

function Header() {
  return (
    <>
      <div
        className="tourist-main-menu one_page hidden-xs hidden-sm"
        style={{ zIndex: 1000 }}
      >
        <div className="tourist_nav_area scroll_fixed">
          <div className="container">
            <div className="row logo-left">
              {/* LOGO */}
              <div className="col-md-3 col-sm-3 col-xs-4">
                <div className="logo">
                  <a
                    className="main_sticky_main_l"
                    href="index.html"
                    title="tourist"
                  >
                    <img src="assets/images/1.png" alt="tourist" />
                  </a>
                  <a
                    className="main_sticky_l"
                    href="index.html"
                    title="tourist"
                  >
                    <img src="assets/images/logo-tr.png" alt="astute" />
                  </a>
                </div>
              </div>
              {/* MAIN MENU */}
              <div className="col-md-9 col-sm-9 col-xs-8">
                <nav className="tourist_menu main-search-menu">
                  <ul className="sub-menu nav_scroll">
                    <li className="current">
                      <a href="#home">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home Version One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Verion Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Verion Three</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Verion Four</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home Particle</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home OnePage Version</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#package">Package</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="package-1.html">Package One</a>
                        </li>
                        <li>
                          <a href="single-package.html">Single Package</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="hotel.html">Hotels</a>
                    </li>
                    <li>
                      <a href="flight.html">Flight</a>
                    </li>
                    <li>
                      <a href="#blog">BLog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar-2column.html">
                            Blog Left 2Column
                          </a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar-2column.html">
                            Blog Right 2Column
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <div className="donate-btn-header">
                    <a className="dtbtn" href="#">
                      Book Now
                    </a>
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
