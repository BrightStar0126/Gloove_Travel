import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

import { getAccomodations, getDescriptions } from "apis/apis";

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

function TourConfirm() {
  const navigate = useNavigate();
  const [accommodations, setAccommodations] = useState(null);
  const [filteredIndex, setFilteredIndex] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [criteria, setCriteria] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleBookNowClick = () => {
    // navigate("/booking");
    window.location.href = "/booking";
  };
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  // const fetch = async () => {
  //   const [accom, desc] = await Promise.all([
  //     getAccomodations(),
  //     getDescriptions(),
  //   ]);
  //   setAccommodations(accom["data"]);
  //   setDescriptions(desc["data"]);
  // };

  useEffect(() => {
    if (accommodations && descriptions) {
      const c = [];
      accommodations.forEach((item) => {
        if (!c.find((v) => v == item["Company"])) {
          c.push(item["Company"]);
        }
      });
      setCriteria({
        company: {
          list: c,
          checked: [],
        },
      });
      localStorage.setItem("accom", JSON.stringify(accommodations));
      localStorage.setItem("desc", JSON.stringify(descriptions));
    }
  }, [accommodations, descriptions]);

  useEffect(() => {
    if (accommodations) {
      const filter = [];
      accommodations.forEach((item, index) => {
        if (
          criteria.company.checked.length == 0 ||
          criteria.company.checked.find((c) => c == item["Company"])
        )
          filter.push(index);
      });
      setFilteredIndex(filter);
    }
  }, [criteria]);

  useEffect(() => {
    // fetch();
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
                <div className="step-item active" id="step-item2">
                  Tus detalles
                  <a
                    href="#"
                    className="step-icon"
                    style={{ position: "relative", zIndex: "1" }}
                  />
                </div>
                <div className="step-item active" id="step-item3">
                  Finalizar
                  <a
                    href="#"
                    className="step-icon"
                    style={{ position: "relative", zIndex: "1" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "66%",
                    transform: "translate(-50%, -50%)",
                    top: "80%",
                    left: "50%",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "3px",
                      border: "2px solid #aa0000",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "50%",
                      height: "3px",
                      border: "2px solid #aa0000",
                    }}
                  ></div>
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
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "-3px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  {JSON.parse(localStorage.getItem("booking")).length}
                </div>
              </div>
              {/* step one form html start */}
              <div className="confirmation-outer">
                <div className="success-notify">
                  <div className="success-icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="success-content">
                    <h3>PAGO CONFIRMADO</h3>
                    <p>
                      Gracias, su pago se ha realizado correctamente y su
                      reserva ya esta confirmada. Se ha enviado un correo
                      electrénico de confirmacién a info@travele.com
                    </p>
                  </div>
                </div>
                <div className="confirmation-inner">
                  <div className="row">
                    <div className="col-lg-8 right-sidebar">
                      <div className="confirmation-details">
                        <h3>DETALLES DE LA RESERVA </h3>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Identificacién de reserva: </td>
                              <td>999-QSDE-55</td>
                            </tr>
                            <tr>
                              <td>Nombre de pila:</td>
                              <td>John</td>
                            </tr>
                            <tr>
                              <td>Apelldo:</td>
                              <td>Doe</td>
                            </tr>
                            <tr>
                              <td>Correo electrénic:</td>
                              <td>info@travele.com</td>
                            </tr>
                            <tr>
                              <td>Teléfono</td>
                              <td>977 - 222 - 444 - 666</td>
                            </tr>
                            <tr>
                              <td>Namero de tarjeta</td>
                              <td>XXX-XXXX-XXX-03</td>
                            </tr>
                            <tr>
                              <td>Pais:</td>
                              <td>London</td>
                            </tr>
                            <tr>
                              <td>Cédigo postal </td>
                              <td>44500</td>
                            </tr>
                            <tr>
                              <td>DIRECCION</td>
                              <td>445 Mount Eden Road, london, borfish</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="details payment-details">
                          <h3>PAGO</h3>
                          <div className="details-desc">
                            <p>
                              El pago se realiza mediante tarjeta Mastercard
                            </p>
                          </div>
                        </div>
                        <div className="details">
                          <h3>VER DETALLES DE LA RESERVA</h3>
                          <div className="details-desc">
                            <p>
                              <a href="#">
                                https://www.travele.com/sadsd-f646556
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <aside className="sidebar">
                        <div className="widget-bg widget-table-summary">
                          <h4 className="bg-title">Resumen</h4>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Coste de los paquetes </strong>
                                </td>
                                <td className="text-right">$300</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Guía especializado</strong>
                                </td>
                                <td className="text-right">$34</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Seguros</strong>
                                </td>
                                <td className="text-right">$34</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>tax</strong>
                                </td>
                                <td className="text-right">13%</td>
                              </tr>
                              <tr className="total">
                                <td>
                                  <strong>Coste total</strong>
                                </td>
                                <td className="text-right">
                                  <strong>$368</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="widget-bg widget-support-wrap">
                          <div className="icon">
                            <i className="fas fa-phone-volume" />
                          </div>
                          <div className="support-content">
                            <h5>AYUDA Y APOYO</h5>
                            <a href="telto:12345678" className="phone">
                              +11 234 889 00
                            </a>
                            <small>De lunes a viernes 9.00am - 7.30pm</small>
                          </div>
                        </div>
                      </aside>
                    </div>
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

export default TourConfirm;
