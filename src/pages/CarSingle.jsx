import React, { useEffect, useState, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/css/booking/bootstrap.min.css";
import "./../assets/css/booking/mdb.min.css";
import "./../assets/css/booking/plugins.css";
import "./../assets/css/booking/style.css";
import "./../assets/css/booking/coloring.css";
import "./../assets/css/booking/colors/scheme-01.css";
import Header from "components/Header";
import BookingMenu from "components/BookingMenu";
import BookingCardGroup from "components/BookingCardGroup";

function CarSingle() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [accommodation, setAccommodation] = useState(null);
  const [description, setDescription] = useState(null);
  const [adaptedURI, setAdaptedURI] = useState("");
  const [company, setCompany] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [localBookingMenu, setLocalBookingMenu] = useState();
  const pickupDateRef = useRef(null);
  const returnDateRef = useRef(null);
  const pickupTimeRef = useRef(null);
  const returnTimeRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleDatePicker = () => {};

  useEffect(() => {
    let bookingMenu = localStorage.getItem("booking")
      ? JSON.parse(localStorage.getItem("booking"))
      : [];
    setLocalBookingMenu(bookingMenu);
    const index = params.get("index");
    setAccommodation(JSON.parse(localStorage.getItem("accom"))[index]);
    setDescription(JSON.parse(localStorage.getItem("desc"))[index]);
    try {
      setAdaptedURI(
        JSON.parse(localStorage.getItem("desc"))[index].Pictures.Picture[0]
          .AdaptedURI
      );
      setCompany(
        JSON.parse(localStorage.getItem("accom"))[index] &&
          JSON.parse(localStorage.getItem("accom"))[index]["AccommodationName"]
      );
    } catch (err) {}
  }, []);

  const handleBookNowClick = () => {
    const price = 265;
    const pickupDate = pickupDateRef.current.value;
    const returnDate = returnDateRef.current.value;
    const pickupTime = pickupTimeRef.current.value;
    const returnTime = returnTimeRef.current.value;
    if (
      adults === "" ||
      children === "" ||
      pickupTime === "Select time" ||
      returnTime === "Select time"
    ) {
      toast.error("Complete todos los archivos.");
    } else {
      const bookingData = {
        adaptedURI,
        company,
        price,
        adults,
        children,
        pickupDate: pickupDate + " " + pickupTime,
        returnDate: returnDate + " " + returnTime,
      };

      let bookingMenu = localStorage.getItem("booking")
        ? JSON.parse(localStorage.getItem("booking"))
        : [];

      let updatedBookingList = [];

      // Check if bookingMenu exists
      if (bookingMenu) {
        // Replace existing booking with the same adaptedURI or add the new one
        const isExisting = bookingMenu.some(
          (item) => item.adaptedURI === bookingData.adaptedURI
        );
        if (isExisting) {
          // Map through the array and replace the item with the same adaptedURI
          updatedBookingList = bookingMenu.map((item) =>
            item.adaptedURI === bookingData.adaptedURI ? bookingData : item
          );
        } else {
          // If there's no match, just add the new booking data to the list
          updatedBookingList = [...bookingMenu, bookingData];
        }
      } else {
        // If bookingMenu doesn't exist, start a new array with bookingData
        updatedBookingList = [bookingData];
      }

      // Update local storage with the new or modified booking list
      localStorage.setItem("booking", JSON.stringify(updatedBookingList));
      setLocalBookingMenu(updatedBookingList);
      toast.success("Agregado exitosamente a la cesta del carrito.");
    }
  };
  const handleClearList = (value) => {
    if (value === -1) {
      setLocalBookingMenu([]);
      localStorage.setItem("booking", "");
      toast.success("Se agregó la lista de reservas con éxito.");
    } else {
      setLocalBookingMenu([
        ...localBookingMenu.slice(0, value),
        ...localBookingMenu.slice(value + 1, localBookingMenu.length),
      ]);
      localStorage.setItem(
        "booking",
        JSON.stringify([
          ...localBookingMenu.slice(0, value),
          ...localBookingMenu.slice(value + 1, localBookingMenu.length),
        ])
      );
      toast.warning("Elemento de reserva eliminado correctamente.");
    }
  };
  useEffect(() => {
    if (localBookingMenu)
      if (localBookingMenu.length === 0) {
        toast.info(
          "Por favor agregue a su carrito de compras y haga una reserva."
        );
      }
  }, [localBookingMenu]);

  return (
    <div id="wrapper">
      {/* page preloader begin */}
      <div id="de-preloader" />
      {/* page preloader close */}
      {/* header begin */}
      <Header />
      {/* header close */}
      {/* content begin */}
      <div className="no-bottom no-top zebra" id="content">
        <div id="top" />
        {/* section begin */}
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
                      <h2 className="banner-title" style={{ fontSize: "70px" }}>
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
                      <h2 className="banner-title" style={{ fontSize: "70px" }}>
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
        <div
          className="trip-search-section shape-search-section"
          style={{ padding: "0px" }}
        >
          <div className="slider-shape" style={{marginTop: "-110px"}}></div>
          {/* <div className="container">
              <div className="trip-search-inner white-bg d-flex">
                <div className="input-group">
                  <label> Search Destination* </label>
                  <input type="text" name="s" placeholder="Enter Destination" />
                </div>
                <div className="input-group">
                  <label> Pax Number* </label>
                  <input type="text" name="s" placeholder="No.of People" />
                </div>
                <div className="input-group width-col-3">
                  <label> Checkin Date* </label>
                  <i className="far fa-calendar"></i>
                  <input
                    className="input-date-picker"
                    type="text"
                    name="s"
                    placeholder="MM / DD / YY"
                    autoComplete="off"
                    readOnly="readonly"
                  />
                </div>
                <div className="input-group width-col-3">
                  <label> Checkout Date* </label>
                  <i className="far fa-calendar"></i>
                  <input
                    className="input-date-picker"
                    type="text"
                    name="s"
                    placeholder="MM / DD / YY"
                    autoComplete="off"
                    readOnly="readonly"
                  />
                </div>
                <div className="input-group width-col-3">
                  <label className="screen-reader-text"> Search </label>
                  <input
                    type="submit"
                    name="travel-search"
                    value="INQUIRE NOW"
                  />
                </div>
              </div>
            </div> */}
        </div>
        {/* section close */}
        <section id="section-car-details" style={{ position: "relative" }}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div id="slider-carousel" className="owl-carousel">
                  {description &&
                  description["Pictures"] &&
                  description["Pictures"]["Picture"] &&
                  description["Pictures"]["Picture"].length > 0 ? (
                    description["Pictures"]["Picture"].map((item) => (
                      <div className="item" key={item.id}>
                        <img src={item["AdaptedURI"]} alt="" />
                      </div>
                    ))
                  ) : (
                    <div className="item">
                      <img src={""} alt="image is not existed" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-3">
                <h3>{accommodation && accommodation["AccommodationName"]}</h3>
                <p>
                  Bonita vivienda de 3 dormitorios en una magnifica y tranquila
                  urbanización de lujo. Cuenta con cuatro piscinas increíbles
                  dentro de la misma urbanización, pista de tenis, pista de
                  baloncesto, zona infantil, zona deportiva en interior,
                  panadería y magnifico restaurante donde podrás compartir tus
                  mejores momentos con una carta espectacular para desayunos,
                  comidas y cenas.
                  Urbanización tranquila, rodeada de paraje Natural Clot de Glvany.
                </p>
                <div className="spacer-10" />
                <h4>Especificaciones</h4>
                <div className="de-spec">
                  <div className="d-row">
                    <span className="d-title">Piscina</span>
                    <span className="d-value">Sedan</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Seat</span>
                    <span className="d-value">2 seats</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Door</span>
                    <span className="d-value">2 doors</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Acceso Internet</span>
                    <span className="d-value">150</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Fuel Type</span>
                    <span className="d-value">Hybird</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Jardín</span>
                    <span className="d-value">3000</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Year</span>
                    <span className="d-value">2020</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Aparcamiento</span>
                    <span className="d-value">200</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Transmission</span>
                    <span className="d-value">Automatic</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Habitacion/es</span>
                    <span className="d-value">4WD</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">Fuel Economy</span>
                    <span className="d-value">18.5</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">1 Cama Matrimonio</span>
                    <span className="d-value">Blue Metalic</span>
                  </div>
                  <div className="d-row">
                    <span className="d-title">4 Camas Individuales</span>
                    <span className="d-value">Black</span>
                  </div>
                </div>
                <div className="spacer-single" />
                <h4>Cocina independiente (Inducción)</h4>
                <ul className="ul-style-2">
                  <li>Nevera</li>
                  <li>Microondas</li>
                  <li>Horno</li>
                  <li>Congelador</li>
                  <li>Vajilla/Cubertería</li>
                  <li>Utensilios/Cocina</li>
                  <li>Cafetera</li>
                </ul>
                <h4>Baños</h4>
                <ul className="ul-style-2">
                  <li>1 Baño Con Ducha</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="de-price text-center">
                  Daily rate
                  <h3>$265</h3>
                </div>
                <div className="spacer-30" />
                <div className="de-box mb25">
                  <div name="contactForm" id="contact_form" method="post">
                    <h4>Desde $265</h4>
                    <div className="spacer-20" />
                    <div className="row">
                      <div className="col-lg-12 mb20">
                        <h5>Adults</h5>
                        <input
                          type="text"
                          name="PickupLocation"
                          // onFocus="geolocate()"
                          placeholder="Enter your pickup location"
                          id="autocomplete"
                          autoComplete="off"
                          className="form-control"
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                        />
                        <div className="jls-address-preview jls-address-preview--hidden">
                          <div className="jls-address-preview__header"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb20">
                        <h5>Children</h5>
                        <input
                          type="text"
                          name="DropoffLocation"
                          // onFocus="geolocate()"
                          placeholder="Enter your dropoff location"
                          id="autocomplete2"
                          autoComplete="off"
                          className="form-control"
                          value={children}
                          onChange={(e) => setChildren(e.target.value)}
                        />
                        <div className="jls-address-preview jls-address-preview--hidden">
                          <div className="jls-address-preview__header"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb20">
                        <h5>Pick Up Date &amp; Time</h5>
                        <div className="date-time-field">
                          <input
                            type="text"
                            id="date-picker"
                            name="Pick Up Date"
                            defaultValue=""
                            ref={pickupDateRef}
                            onChange={handleDatePicker}
                          />
                          <select
                            name="Pick Up Time"
                            id="pickup-time"
                            ref={pickupTimeRef}
                          >
                            <option disabled="" value="Select time">
                              Time
                            </option>
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 mb20">
                        <h5>Return Date &amp; Time</h5>
                        <div className="date-time-field">
                          <input
                            type="text"
                            id="date-picker-2"
                            name="Collection Date"
                            defaultValue=""
                            ref={returnDateRef}
                          />
                          <select
                            name="Collection Time"
                            id="collection-time"
                            ref={returnTimeRef}
                          >
                            <option disabled="" value="Select time">
                              Time
                            </option>
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      // type="submit"
                      id="send_message"
                      // defaultValue="Book Now"
                      className="btn-main btn-fullwidth"
                      style={{ backgroundColor: "#156B7A" }}
                      onClick={handleBookNowClick}
                    >
                      Añadir a mi reserva
                    </button>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="de-box">
                  <h4>Share</h4>
                  <div className="de-color-icons">
                    <span>
                      <i className="fa fa-twitter fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-facebook fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-reddit fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-linkedin fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-pinterest fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-stumbleupon fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-delicious fa-lg" />
                    </span>
                    <span>
                      <i className="fa fa-envelope fa-lg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* brightstar */}
          {/* <div
            style={{
              position: "absolute",
              width: "300px",
              height: "fit-content",
              top: "90px",
              right: "10px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                backgroundColor: "#156B7A",
                color: "white",
                width: "120px",
                height: "50px",
                padding: "20px",
                borderRadius: "30px",
                margin: "auto auto 40px auto",
                cursor: "pointer",
              }}
            />
            <div
              className="shopping-cart"
              style={{
                border: "2px solid #555555",
                borderRadius: "10px",
                width: "300px",
                height: "300px",
                display: "flex",
                padding: "10px",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div
                className="cart-list"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "0 0 20px #dddddd",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "5px",
                    gap: "5px",
                    borderBottom: "1px solid #888888",
                  }}
                >
                  <button style={{ backgroundColor: "initial", border: "0px" }}>
                    x
                  </button>
                  <img
                    src="images/img5.jpg"
                    alt="image"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p
                    style={{
                      margin: "0px 0px 0px 20px",
                      fontSize: "12px",
                      padding: "inherit",
                    }}
                  >
                    Vacaciones en la ciudad del agua de Portugal
                  </p>
                </div>
                <div style={{ display: "flex", padding: "5px", gap: "5px" }}>
                  <button style={{ backgroundColor: "initial", border: "0px" }}>
                    x
                  </button>
                  <img
                    src="images/img5.jpg"
                    alt="image"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p
                    style={{
                      margin: "0px 0px 0px 20px",
                      fontSize: "12px",
                      padding: "inherit",
                    }}
                  >
                    Vacaciones en la ciudad del agua de Portugal
                  </p>
                </div>
              </div>
              <input
                type="submit"
                id="send_message"
                defaultValue="Book Now"
                className="btn-main btn-fullwidth"
              />
            </div>
          </div> */}
          <div
            style={{
              position: "fixed",
              width: "fit-content",
              height: "fit-content",
              bottom: "0px",
              right: "20px",
              backgroundColor: "initial",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              zIndex: "999999",
            }}
          >
            <BookingMenu
              localBookingMenu={localBookingMenu}
              handleClearList={handleClearList}
            />
          </div>
        </section>
        {/*brightstar booking*/}
        <BookingCardGroup />
      </div>
      {/* content close */}
      <a href="#" id="back-to-top" />
      {/* footer begin */}
      <footer
        id="colophon"
        className="site-footer footer-primary"
        style={{ backgroundColor: "white" }}
      >
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <aside
                  className="widget widget_text"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    padding: "0px",
                    height: "100%",
                  }}
                >
                  {/* <h3 className="widget-title">About Travel</h3> */}
                  <div className="">
                    <a href="#">
                      <img
                        src="./images/GLOOVE_marca_tagline_COL.png"
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  </div>
                  <div
                    className="textwidget widget-text"
                    style={{
                      marginTop: "20px",
                      fontSize: "20px",
                      textAlign: "center",
                      padding: "0px",
                      color: "#156B7A",
                    }}
                  >
                    GESTIONAMOS TUS VIVIENDAS TURÍSTICAS CON EL MEJOR SERVICIO Y
                    TECNOLOGÍA DEL MERCADO
                  </div>
                </aside>
              </div>
              <div className="col-lg-4 col-md-6">
                <aside className="widget widget_text">
                  {/* <h3 className="widget-title">CONTACT INFORMATION</h3> */}
                  <div className="textwidget widget-text">
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    <ul>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Centro de ayuda
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Quienes somos
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Preguntas frecuentes
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Trabaja con nosotros
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Nuestro Blog
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          Noticias
                        </a>
                      </li>
                      <li
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          lineHeight: "30px",
                        }}
                      >
                        <a href="#" style={{ color: "#156B7A" }}>
                          CONTACTANOS
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-lg-4 col-md-6">
                <aside className="widget widget_recent_post">
                  <h3
                    className=""
                    style={{ textAlign: "center", color: "#156B7A" }}
                  >
                    SIGUENOS EN:
                  </h3>
                  <ul>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      {/* <h5>
                          <a href="#">
                            Life is a beautiful journey not a destination
                          </a>
                        </h5>
                        <div className="entry-meta">
                          <span className="post-on">
                            <a href="#">August 17, 2021</a>
                          </span>
                          <span className="comments-link">
                            <a href="#">No Comments</a>
                          </span>
                        </div> */}
                      <img
                        src="./images/happy (9).png"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#156B7A",
                        }}
                      />
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <img
                        src="./images/happy (6).png"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#156B7A",
                        }}
                      />
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <img
                        src="./images/happy (7).png"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#156B7A",
                        }}
                      />
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "0px",
                        padding: "0px",
                      }}
                    >
                      <img
                        src="./images/happy (8).png"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#156B7A",
                        }}
                      />
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="buttom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Política de Privacidad</a>
                    </li>
                    <li>
                      <a href="#">Términos y condiciones</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      src="./images/GLOOVE_marca_tagline_blanco.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="copy-right text-right">
                  Copyright © 2024 Gloove. Todos los derechos reservados
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      {/* footer close */}
    </div>
  );
}

export default CarSingle;
