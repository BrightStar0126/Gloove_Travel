import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

import { deleteBooking, getAccomodations, getDescriptions, openAllBooking } from "apis/apis";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/vendors/bootstrap/css/bootstrap.min.css";
import "./../assets/vendors/fontawesome/css/all.min.css";
import "./../assets/vendors/jquery-ui/jquery-ui.min.css";
import "./../assets/vendors/modal-video/modal-video.min.css";
import "./../assets/vendors/lightbox/dist/css/lightbox.min.css";
import "./../assets/vendors/slick/slick.css";
import "./../assets/vendors/slick/slick-theme.css";
import "./../style.css";
import Header from "components/Header";
import Footer from "components/Footer";

function TourCart() {
  const navigate = useNavigate();
  const [accommodations, setAccommodations] = useState(null);
  const [filteredIndex, setFilteredIndex] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [criteria, setCriteria] = useState(null);
  const [bookingMenu, setBookingMenu] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const fetch = async () => {
    const [bookingMenu] = await Promise.all([openAllBooking()]);
    setBookingMenu(bookingMenu)
    localStorage.setItem("booking", JSON.stringify(bookingMenu));
  };

  const handleVerificarClick = () => {
    // navigate("/booking");
    window.location.href = "/tour-booking";
  };
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleItemClick = (index) => {
    setBookingMenu((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
    ]);
    deleteBooking(bookingMenu[index].adaptedURI);
    // console.log(bookingMenu[index].adaptedURI);
    localStorage.setItem(
      "booking",
      JSON.stringify([
        ...bookingMenu.slice(0, index),
        ...bookingMenu.slice(index + 1, bookingMenu.length),
      ])
    );
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="home">
      {/* <div id="siteLoader" className="site-loader">
         <div className="preloader-content">
            <img src="./images/loader1.gif" alt="" />
         </div>
      </div> */}
      <div id="page" className="full-page">
        <Header />
        <main id="content" className="site-main" style={{ padding: "0px" }}>
          {/* <!-- Home slider html start brightstar --> */}
          <section
            className="home-slider-section"
            style={{ padding: "0px", position: "relative" }}
          >
            <div className="home-slider">
              <Carousel
                className="home-slider"
                responsive={responsive}
                showDots={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3500}
                dotListClass="custom-dot-list-style"
                slidesToSlide={1}
              >
                <div className="home-banner-items">
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-1.png)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                          style={{ fontSize: "70px" }}
                        >
                          Maximiza el potencial de tu propiedad con Gloove
                        </h2>
                        <p>
                          Gestión experta, ingresos optimizados y tranquilidad
                          total
                        </p>
                        {/* <a href="#" className="button-primary">
                          CONTINUE READING
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="home-banner-items">
                  <div
                    className="banner-inner-wrap"
                    style={{
                      backgroundImage: "url(./images/slider-2.png)",
                      backgroundSize: "cover !important",
                    }}
                  ></div>
                  <div className="banner-content-wrap">
                    <div className="container">
                      <div className="banner-content text-center">
                        <h2
                          className="banner-title"
                          style={{ fontSize: "70px" }}
                        >
                          Maximiza el potencial de tu propiedad con Gloove
                        </h2>
                        <p>
                          Gestión experta, ingresos optimizados y tranquilidad
                          total
                        </p>
                        {/* <a href="#" className="button-primary">
                          CONTINUE READING
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
              </Carousel>
              {/* <img src="./images/happy (9).png" alt="" style={{width: "50px", height: "50px", backgroundColor: "rgb(21, 107, 122)"}}></img> */}
              <div
                className=""
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  right: "0%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a href="#">
                  <img
                    src="./images/happy (9).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (6).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (7).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
                <a href="#">
                  <img
                    src="./images/happy (8).png"
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                    }}
                  ></img>
                </a>
              </div>
            </div>
          </section>
          {/* <!-- slider html start --> */}
          {/* <!-- Home search field html start --> */}
          <div
            className="trip-search-section shape-search-section"
            style={{ padding: "0px" }}
          >
            <div className="slider-shape"></div>
          </div>
          {/* Inner Banner html end*/}
          {/* packages html start */}
          <div
            className="step-section cart-section"
            style={{ marginTop: "50px" }}
          >
            <div className="container">
              <div className="step-link-wrap" style={{ position: "relative" }}>
                <div className="step-item active" id="step-item1">
                  tu carrito
                  <a
                    href="#"
                    className="step-icon"
                    style={{ position: "relative", zIndex: "1" }}
                  ></a>
                </div>
                <div className="step-item" id="step-item2">
                  Tus detalles
                  <a
                    href="#"
                    className="step-icon"
                    style={{ position: "relative", zIndex: "1" }}
                  />
                </div>
                <div className="step-item" id="step-item3">
                  Finalizar
                  <a
                    href="#"
                    className="step-icon"
                    style={{ position: "relative", zIndex: "1" }}
                  />
                </div>
                <div style={{position: "absolute", width: "66%", transform: "translate(-50%, -50%)", top: "80%", left: "50%", display: "flex"}}>
                  <div style={{width: "50%", height: "3px", border: "2px dashed #aa0000"}}></div>
                  <div style={{width: "50%", height: "3px", border: "2px dashed #aa0000"}}></div>
                </div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    right: "-20px",
                    position: "absolute",
                    backgroundColor: "#156B7A",
                    color: "white",
                    width: "120px",
                    height: "50px",
                    padding: "10px 0px",
                    borderRadius: "30px",
                    margin: "40px auto 20px auto",
                    cursor: "pointer",
                  }}
                />
                <div style={{position: "absolute", top: "40px", right: "-3px", color: "white", fontSize: "20px"}}>{bookingMenu.length}</div>
              </div>
              {/* step one form html start */}
              <div className="cart-list-inner">
                <div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th />
                          <th>nombre del producto</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      {bookingMenu.map((item, index) => (
                        <tbody>
                          <tr>
                            <td className="">
                              <button
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                                onClick={() => handleItemClick(index)}
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                              <span className="cartImage">
                                <img src={item.adaptedURI} alt="AdaptedImage" />
                              </span>
                            </td>
                            <td data-column="Product Name">{item.company}</td>
                            <td data-column="Price">$ {item.price}</td>
                            <td data-column="Quantity" className="count-input">
                              <div>
                                <a className="minus-btn" href="#">
                                  <i className="fa fa-minus" />
                                </a>
                                <input
                                  className="quantity"
                                  type="text"
                                  defaultValue={1}
                                />
                                <a className="plus-btn" href="#">
                                  <i className="fa fa-plus" />
                                </a>
                              </div>
                            </td>
                            <td data-column="Sub Total">$ 1150.00</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="updateArea">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="tengo un cupon de desc"
                      />
                      <a href="#" className="outline-primary">
                        Aplicar cupén
                      </a>
                    </div>
                    <a href="#" className="outline-primary update-btn">
                      actualzacién de la compra
                    </a>
                  </div>
                  <div className="totalAmountArea">
                    <ul className="list-unstyled">
                      <li>
                        <strong>Subtotal </strong> <span>$ 3400.00</span>
                      </li>
                      <li>
                        <strong>IVA</strong> <span>$ 18.00</span>
                      </li>
                      <li>
                        <strong>Gran total</strong>{" "}
                        <span className="grandTotal">$ 4012.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="checkBtnArea text-right">
                    <button className="button-primary" onClick={handleVerificarClick}>
                      Verificar
                    </button>
                  </div>
                </div>
              </div>
              {/* step one form html end */}
            </div>
          </div>
        </main>
        <Footer />
        <a id="backTotop" href="#" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
        {/* <!-- custom search field html --> */}
        <div className="header-search-form">
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <a href="#" className="search-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- header html end --> */}
      </div>

      {/* <!-- JavaScript -->
      <script src="assets/js/jquery.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/vendors/jquery-ui/jquery-ui.min.js"></script>
      <script src="assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
      <script src="assets/js/jquery.counterup.js"></script>
      <script src="assets/vendors/modal-video/jquery-modal-video.min.js"></script>
      <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
      <script src="assets/vendors/lightbox/dist/js/lightbox.min.js"></script>
      <script src="assets/vendors/slick/slick.min.js"></script>
      <script src="assets/js/jquery.slicknav.js"></script>
  <script src="assets/js/custom.min.js"></script> */}
    </div>
  );
}

export default TourCart;
