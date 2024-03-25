import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = ({ head, description }) => {
  const handleBookNowClick = () => {
    // navigate("/booking");
    window.location.href = "/booking";
  };
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <>
      <header
        id="masthead"
        className="site-header header-primary"
        // style={{ visibility: "hidden" }}
        style={{ display: "none" }}
      >
        {/* <!-- header html start --> */}
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <div className="header-contact-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-phone-alt"></i> +01 (977) 2599 12
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@Travel.com">
                        <i className="fas fa-envelope"></i> company@domain.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> 3146 Koontz
                      Lane, California
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                <div className="header-social social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-search-icon">
                  <button className="search-icon">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="site-identity">
              <h1 className="site-title">
                <a href="index.html">
                  <img
                    className="white-logo"
                    src="./images/logo (2).png"
                    alt="logo"
                  />
                  <img
                    className="black-logo"
                    src="./images/GLOOVE_marca_negro.png"
                    alt="logo"
                  />
                </a>
              </h1>
            </div>
            <div className="main-navigation d-none d-lg-block">
              <nav id="navigation" className="navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="index.html">Inicio</a>
                    <ul>
                      <li>
                        <a href="index-v2.html">Home 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Tour</a>
                    <ul>
                      <li>
                        <a href="destination.html">Destination</a>
                      </li>
                      <li>
                        <a href="tour-packages.html">Tour Packages</a>
                      </li>
                      <li>
                        <a href="package-offer.html">Package Offer</a>
                      </li>
                      <li>
                        <a href="package-detail.html">Package Detail</a>
                      </li>
                      <li>
                        <a href="tour-cart.html">Tour Cart</a>
                      </li>
                      <li>
                        <a href="booking.html">Package Booking</a>
                      </li>
                      <li>
                        <a href="confirmation.html">Confirmation</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="career.html">Career</a>
                      </li>
                      <li>
                        <a href="career-detail.html">Career Detail</a>
                      </li>
                      <li>
                        <a href="tour-guide.html">Tour Guide</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="single-page.html">Single Page</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ Page</a>
                      </li>
                      <li>
                        <a href="testimonial-page.html">Testimonial Page</a>
                      </li>
                      <li>
                        <a href="popup.html">Popup</a>
                      </li>
                      <li>
                        <a href="search-page.html">Search Page</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                      <li>
                        <a href="comming-soon.html">Comming Soon</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="wishlist-page.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="single-page.html">Shop</a>
                    <ul>
                      <li>
                        <a href="product-right.html">Shop Archive</a>
                      </li>
                      <li>
                        <a href="product-detail.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="product-cart.html">Shop Cart</a>
                      </li>
                      <li>
                        <a href="product-checkout.html">Shop Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul>
                      <li>
                        <a href="blog-archive.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-archive-left.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-archive-both.html">Blog Both Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Dashboard</a>
                    <ul>
                      <li>
                        <a href="admin/dashboard.html">Dashboard</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">User</a>
                        <ul>
                          <li>
                            <a href="admin/user.html">User List</a>
                          </li>
                          <li>
                            <a href="admin/user-edit.html">User Edit</a>
                          </li>
                          <li>
                            <a href="admin/new-user.html">New User</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="admin/db-booking.html">Booking</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="admin/db-package.html">Package</a>
                        <ul>
                          <li>
                            <a href="admin/db-package-active.html">
                              Package Active
                            </a>
                          </li>
                          <li>
                            <a href="admin/db-package-pending.html">
                              Package Pending
                            </a>
                          </li>
                          <li>
                            <a href="admin/db-package-expired.html">
                              Package Expired
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="admin/db-comment.html">Comments</a>
                      </li>
                      <li>
                        <a href="admin/db-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="admin/login.html">Login</a>
                      </li>
                      <li>
                        <a href="admin/forgot.html">Forget Password</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn">
              <button className="button-primary">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="mobile-menu-container"></div>
      </header>
      {/* <div id="de-preloader" /> */}
      {/* page preloader close */}
      {/* header begin */}
      <header
        className="transparent scroll-light has-topbar"
        style={{ backgroundColor: "#156B7A" }}
      >
        {/* <div id="topbar" className="topbar-dark text-light">
      <div className="container">
        <div className="topbar-left xs-hide">
          <div className="topbar-widget">
            <div className="topbar-widget">
              <a href="#">
                <i className="fa fa-phone" />
                +208 333 9296
              </a>
            </div>
            <div className="topbar-widget">
              <a href="#">
                <i className="fa fa-envelope" />
                contact@rentaly.com
              </a>
            </div>
            <div className="topbar-widget">
              <a href="#">
                <i className="fa fa-clock-o" />
                Mon - Fri 08.00 - 18.00
              </a>
            </div>
          </div>
        </div>
        <div className="topbar-right">
          <div className="social-icons">
            <a href="#">
              <i className="fa fa-facebook fa-lg" />
            </a>
            <a href="#">
              <i className="fa fa-twitter fa-lg" />
            </a>
            <a href="#">
              <i className="fa fa-youtube fa-lg" />
            </a>
            <a href="#">
              <i className="fa fa-pinterest fa-lg" />
            </a>
            <a href="#">
              <i className="fa fa-instagram fa-lg" />
            </a>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    {/* logo begin */}
                    <div id="logo" style={{ cursor: "pointer" }}>
                      {/* <a href="index.html"> */}
                      <img
                        className="logo-1"
                        src="images/GLOOVE_marca_tagline_blanco.png"
                        alt=""
                        onClick={handleLogoClick}
                        style={{ width: "150px", height: "60px" }}
                      />
                      <img
                        className="logo-2"
                        src="images/GLOOVE_marca_tagline_blanco.png"
                        alt=""
                        onClick={handleLogoClick}
                        style={{ width: "150px", height: "60px" }}
                      />
                      {/* </a> */}
                    </div>
                    {/* logo close */}
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu" style={{ height: "auto" }}>
                    <li>
                      <a
                        className="menu-item"
                        href="index.html"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Inicio
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="02_dark-index-1.html">
                            New: Homepage 1 Dark
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="02_dark-index-2.html">
                            New: Homepage 2 Dark
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index.html">
                            Homepage Main
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index-2.html">
                            Homepage 2
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index-3.html">
                            Homepage 3
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index-4.html">
                            Homepage 4
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index-5.html">
                            Homepage 5
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="index-6.html">
                            Homepage 6
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="cars.html"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Tour Información
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="/tour">
                            Tour
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/tour-cart">
                            Tour Carrito
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/tour-booking">
                          Tour Reservas
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-item"
                            href="/tour-confirm"
                          >
                            Tour Confirmación
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="booking.html"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Experiencias
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="account-dashboard.html"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Sobre nosotros
                      </a>
                      <ul>
                        <li>
                          <a
                            className="menu-item"
                            href="account-dashboard.html"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="account-profile.html">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="account-booking.html">
                            My Orders
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="account-favorite.html">
                            My Favorite Cars
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="#"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Blog
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="contact.html">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="login.html">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="404.html">
                            Page 404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="#"
                        style={{ color: "white", fontSize: "20px" }}
                      >
                        Contacto
                      </a>
                      <ul>
                        <li>
                          <a
                            className="menu-item"
                            href="news-standart-right-sidebar.html"
                          >
                            News Standard
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="news-standart-right-sidebar.html"
                              >
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="news-standart-left-sidebar.html"
                              >
                                Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="news-standart-no-sidebar.html"
                              >
                                No Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="menu-item"
                            href="news-grid-right-sidebar.html"
                          >
                            News Grid
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="news-grid-right-sidebar.html"
                              >
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="news-grid-left-sidebar.html"
                              >
                                Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="news-grid-no-sidebar.html"
                              >
                                No Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                  <a className="menu-item" href="#">
                    Elements
                  </a>
                  <ul>
                    <li>
                      <a className="menu-item" href="preloader.html">
                        Preloader
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="icon-boxes.html">
                        Icon Boxes
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="badge.html">
                        Badge
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="counters.html">
                        Counters
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="gallery-popup.html">
                        Gallery Popup
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="icons-elegant.html">
                        Icons Elegant
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="icons-etline.html">
                        Icons Etline
                      </a>
                    </li>
                    <li>
                      <a
                        className="menu-item"
                        href="icons-font-awesome.html"
                      >
                        Icons Font Awesome
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="map.html">
                        Map
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="modal.html">
                        Modal
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="popover.html">
                        Popover
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="tabs.html">
                        Tabs
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="tooltips.html">
                        Tooltips
                      </a>
                    </li>
                  </ul>
                </li> */}
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <button
                      className="btn-main"
                      onClick={handleBookNowClick}
                      style={{
                        backgroundColor: "white",
                        color: "#156B7A",
                        fontSize: "20px",
                        padding: "10px 30px",
                        borderRadius: "25px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      {/* <img
                    src="./images/user-img.png"
                    style={{ width: "20px", height: "20px" }}
                  ></img> */}
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: "4px",
                        }}
                      />
                      Login
                    </button>
                    <span id="menu-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
