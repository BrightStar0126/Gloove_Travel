import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

import { getAccomodations, getDescriptions } from "apis/apis";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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

function Tour() {
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

  const fetch = async () => {
    const [accom, desc] = await Promise.all([
      getAccomodations(),
      getDescriptions(),
    ]);
    setAccommodations(accom["data"]);
    setDescriptions(desc["data"]);
  };

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
            <div className="container">
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
            </div>
          </div>
          {/* Inner Banner html end*/}
          {/* packages html start */}
          <div className="package-section" style={{ marginTop: "50px" }}>
            <div className="container">
              <div className="package-inner">
                <div className="row">
                  {accommodations &&
                    descriptions &&
                    filteredIndex.map((index) => {
                      const accom = accommodations[index];
                      const desc = descriptions[index];
                      console.log(desc);
                      return <div className="col-lg-4 col-md-6" key={index}>
                      <div className="package-wrap">
                        <figure className="feature-image">
                          <a href="#">
                          <img
                                src={
                                  desc &&
                                  desc["Pictures"] &&
                                  desc["Pictures"]["Picture"]
                                    ? desc["Pictures"]["Picture"].length > 0
                                      ? desc["Pictures"]["Picture"][0][
                                          "AdaptedURI"
                                        ]
                                      : desc["Pictures"]["Picture"][
                                          "AdaptedURI"
                                        ]
                                    : ""
                                }
                                className="img-fluid"
                                alt=""
                              />
                          </a>
                        </figure>
                        <div className="package-price">
                          <h6>
                            <span>$1,900 </span> / per person
                          </h6>
                        </div>
                        <div className="package-content-wrap">
                          <div className="package-meta text-center">
                            <ul>
                              <li>
                                <i className="far fa-clock" />
                                7D/6N
                              </li>
                              <li>
                                <i className="fas fa-user-friends" />
                                People: 5
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                Malaysia
                              </li>
                            </ul>
                          </div>
                          <div className="package-content">
                            <h3>
                              <a href="#">
                              <h4>{accom["AccommodationName"]}</h4>
                              </a>
                            </h3>
                            <div className="review-area">
                              <span className="review-text">(25 reviews)</span>
                              <div
                                className="rating-start"
                                title="Rated 5 out of 5"
                              >
                                <span style={{ width: "60%" }} />
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit luctus nec ullam. Ut elit tellus, luctus nec
                              ullam elit tellpus.
                            </p>
                            <div className="btn-wrap">
                              <a href="#" className="button-text width-6">
                                Book Now
                                <i className="fas fa-arrow-right" />
                              </a>
                              <a href="#" className="button-text width-6">
                                Wish List
                                <i className="far fa-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>;
                    })}
                  {/* <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img5.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,900 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              7D/6N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 5
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Malaysia
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Sunset view of beautiful lakeside resident
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(25 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "60%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img6.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$1,230 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              5D/4N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 8
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Canada
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Experience the natural beauty of island
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(17 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "100%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img5.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Vacation to the water city of Portugal
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img5.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Trekking to the base camp of mountain
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img5.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">
                              Beautiful season of the rural village
                            </a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="package-wrap">
                      <figure className="feature-image">
                        <a href="#">
                          <img src="images/img5.jpg" alt="" />
                        </a>
                      </figure>
                      <div className="package-price">
                        <h6>
                          <span>$2,000 </span> / per person
                        </h6>
                      </div>
                      <div className="package-content-wrap">
                        <div className="package-meta text-center">
                          <ul>
                            <li>
                              <i className="far fa-clock" />
                              6D/5N
                            </li>
                            <li>
                              <i className="fas fa-user-friends" />
                              People: 6
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt" />
                              Portugal
                            </li>
                          </ul>
                        </div>
                        <div className="package-content">
                          <h3>
                            <a href="#">Summer holiday to the Oxolotan River</a>
                          </h3>
                          <div className="review-area">
                            <span className="review-text">(22 reviews)</span>
                            <div
                              className="rating-start"
                              title="Rated 5 out of 5"
                            >
                              <span style={{ width: "80%" }} />
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit luctus nec ullam. Ut elit tellus, luctus nec
                            ullam elit tellpus.
                          </p>
                          <div className="btn-wrap">
                            <a href="#" className="button-text width-6">
                              Book Now
                              <i className="fas fa-arrow-right" />
                            </a>
                            <a href="#" className="button-text width-6">
                              Wish List
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* packages html end */}
          {/* Home activity section html start */}
          <section className="activity-section">
            <div className="container">
              <div className="section-heading text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h5 className="dash-style" style={{ color: "#156B7A" }}>
                      VIAJAR POR ACTIVIDAD
                    </h5>
                    <h2>AVENTURA Y ACTIVIDAD</h2>
                    <p>
                      Me vobute peripeett corman seterter corporis qua vertate
                      sdaped deedt beds tormers och places Adio acing
                      repiciarcie gortes? Nottrem srugrins rumisuee curse
                      placour,
                    </p>
                  </div>
                </div>
              </div>
              <div className="activity-inner row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon6.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Adventure</a>
                      </h4>
                      <p>15 Destination</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon10.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Trekking</a>
                      </h4>
                      <p>12 Destination</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon9.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Camp Fire</a>
                      </h4>
                      <p>7 Destination</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon8.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Off Road</a>
                      </h4>
                      <p>15 Destination</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon7.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Camping</a>
                      </h4>
                      <p>13 Destination</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <a href="#">
                        <img
                          src="images/icon11.png"
                          alt=""
                          style={{ width: "auto" }}
                        />
                      </a>
                    </div>
                    <div className="activity-content">
                      <h4>
                        <a href="#">Exploring</a>
                      </h4>
                      <p>25 Destination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default Tour;
