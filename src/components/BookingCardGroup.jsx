import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./../assets/css/booking/bootstrap.min.css";
import "./../assets/css/booking/mdb.min.css";
import "./../assets/css/booking/plugins.css";
import "./../assets/css/booking/style.css";
import "./../assets/css/booking/coloring.css";
import "./../assets/css/booking/colors/scheme-01.css";
import { getAccomodations, getDescriptions } from "apis/apis";

function BookingCardGroup() {
  const [accommodations, setAccommodations] = useState(null);
  const [filteredIndex, setFilteredIndex] = useState([]);
  const [descriptions, setDescriptions] = useState(null);
  const [criteria, setCriteria] = useState(null);

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

  const carouselRef = useRef(null);

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 2180 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop1: {
      breakpoint: { max: 2180, min: 1780 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop2: {
      breakpoint: { max: 1780, min: 1380 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1380, min: 980 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile1: {
      breakpoint: { max: 980, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section
      id="section-cards"
      style={{
        boxShadow: "0 0 10px 20px rgba(0, 0, 0, 0.3);",
        margin: "auto",
        // width: "80%",
        height: "fit-content",
        position: "relative",
      }}
    >
      <button
        onClick={goToPrevSlide}
        style={{
          position: "absolute",
          transform: "translate(0%, -50%) scaleY(1.5)",
          top: "50%",
          left: "-80px",
          borderRadius: "100px",
          width: "50px",
          height: "50px",
          backgroundColor: "initial",
          border: "0px",
          color: "white",
          fontSize: "50px",
        }}
      >
        <span className="custom-arrow" style={{ color: "#aaaaaa" }}>
          &#11164;
        </span>
      </button>
      <button
        onClick={goToNextSlide}
        style={{
          position: "absolute",
          transform: "translate(0%, -50%) scaleY(1.5)",
          top: "50%",
          right: "-80px",
          borderRadius: "100px",
          width: "50px",
          height: "50px",
          backgroundColor: "initial",
          border: "0px",
          color: "white",
          fontSize: "50px",
        }}
      >
        <span className="custom-arrow" style={{ color: "#aaaaaa" }}>
          &#11166;
        </span>
      </button>
      {accommodations && descriptions && filteredIndex ? (
        <Carousel
          className="home-slider"
          responsive={responsive2}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          keyBoardControl={false}
          autoPlaySpeed={5000}
          dotListClass="custom-dot-list-style"
          slidesToSlide={1}
          ref={carouselRef}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {accommodations &&
            descriptions &&
            filteredIndex.map((index) => {
              const accom = accommodations[index];
              const desc = descriptions[index];
              console.log(desc);
              return (
                <div
                  style={{
                    width: "350px",
                    height: "550px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    padding: "20px 5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#dddddd",
                    margin: "auto",
                  }}
                >
                  <img
                    src={
                      desc && desc["Pictures"] && desc["Pictures"]["Picture"]
                        ? desc["Pictures"]["Picture"].length > 0
                          ? desc["Pictures"]["Picture"][0]["AdaptedURI"]
                          : desc["Pictures"]["Picture"]["AdaptedURI"]
                        : ""
                    }
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "40px",
                    }}
                    alt="card img"
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#522D3C",
                      margin: "10px",
                      fontWeight: "1000",
                      letterSpacing: "1px",
                      lineHeight: "18px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {accom["Company"]}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70%",
                      gap: "16px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{ color: "black" }}
                    />
                    <p
                      style={{
                        fontSize: "11px",
                        color: "black",
                        textAlign: "center",
                        fontWeight: "800",
                        margin: "0px",
                        lineHeight: "12px",
                      }}
                    >
                      Disfruta de la mayor experiencia tirandote por las mejores
                      tirolinas de España en una ubicación especial, nuestra
                      ciudad de Cuenca
                    </p>
                  </div>
                  <div style={{ display: "flex", margin: "16px" }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#522D3C",
                        margin: "0px 10px",
                        fontWeight: "1000",
                      }}
                    >
                      $ 100
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        margin: "2px 25px",
                        fontWeight: "600",
                      }}
                    >
                      View Details &gt;
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#156B7A",
                      margin: "0px 10px 20px",
                      fontWeight: "1000",
                    }}
                  >
                    o cajea por 50 Gloove point
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = "/car-single?index=" + index;
                    }}
                    style={{
                      width: "180px",
                      height: "70px",
                      backgroundColor: "#156B7A",
                      border: "0px",
                      borderRadius: "70px",
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    AÑADIR A MI
                    <br /> VIAJE
                  </button>
                </div>
              );
            })}
        </Carousel>
      ) : (
        <></>
      )}
      <>
        {/* <div
            style={{
              width: "320px",
              height: "500px",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "20px 5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#dddddd",
            }}
          >
            <img
              src="./images/8.png"
              style={{ width: "100%", height: "200px", borderRadius: "40px" }}
              alt="card img"
            />
            <p
              style={{
                fontSize: "16px",
                color: "#522D3C",
                margin: "10px",
                fontWeight: "1000",
                letterSpacing: "1px",
                lineHeight: "18px"
              }}
            >
              MAYOR COMPLEJO DE
              <br />
              TIROLINAS DE ESPANA
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                gap: "16px"
              }}
            >
              <FontAwesomeIcon icon={faUserGroup} style={{ color: "black" }} />
              <p
                style={{
                  fontSize: "11px",
                  color: "black",
                  textAlign: "center",
                  fontWeight: "800",
                  margin: "0px",
                  lineHeight: "12px"
                }}
              >
                Disfruta de la mayor experiencia tirandote por las mejores
                tirolinas de España en una ubicación especial, nuestra ciudad de
                Cuenca
              </p>
            </div>
            <div style={{ display: "flex", margin: "16px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "#522D3C",
                  margin: "0px 10px",
                  fontWeight: "1000",
                }}
              >
                $ 100
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "black",
                  margin: "2px 25px",
                  fontWeight: "600"
                }}
              >
                View Details &gt;
              </p>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "#156B7A",
                margin: "0px 10px 20px",
                fontWeight: "1000",
              }}
            >
              o cajea por 50 Gloove point
            </p>
            <button
              style={{
                width: "75%",
                backgroundColor: "#156B7A",
                border: "0px",
                borderRadius: "70px",
                color: "white",
                padding: "10px 10px",
                fontSize: "24px",
                fontWeight: "600"
              }}
            >
              AÑADIR A MI<br /> VIAJE
            </button>
          </div> */}
      </>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button
          style={{
            width: "210px",
            height: "35px",
            margin: "20px",
            border: "3px solid #156B7A",
            borderRadius: "50px",
            backgroundColor: "#dddddd",
            color: "#156B7A",
            fontWeight: "900",
          }}
        >
          IR A EXPERIENCIAS
        </button>
      </div>
    </section>
  );
}

export default BookingCardGroup;
