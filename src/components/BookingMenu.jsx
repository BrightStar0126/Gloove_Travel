import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { insertBooking } from "apis/apis";
import React, { useEffect, useState } from "react";

function BookingMenu({ localBookingMenu, handleClearList }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("localBookingMenu state", localBookingMenu);
  }, [localBookingMenu]);

  const handleSubmitClick = () => {
    if (localBookingMenu.length > 0) {
      console.log("localBookingMenu insert", localBookingMenu);
      insertBooking(localBookingMenu);
      handleClearList(-1);
    }
  };
  const handleSetShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div
        className="shopping-cart"
        style={{
          border: "2px solid #555555",
          borderRadius: "10px",
          width: "300px",
          height: "300px",
          display: show ? "flex" : "none",
          padding: "10px",
          backgroundColor: "white",
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
            border: "1px solid #aaaaaa",
            padding: "5px",
            height: "200px",
            overflow: "auto",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
          }}
        >
          {localBookingMenu ? (
            localBookingMenu.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  gap: "5px",
                  border: "1px solid #888888",
                  backgroundColor: "white",
                }}
              >
                <button
                  style={{ backgroundColor: "initial", border: "0px" }}
                  onClick={() => handleClearList(index)}
                >
                  x
                </button>
                <img
                  src={item.adaptedURI}
                  alt="companyimage"
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
            ))
          ) : (
            <></>
          )}
        </div>
        <button
          // type="submit"
          id="send_message"
          // defaultValue="Book Now"
          className="btn-main btn-fullwidth"
          style={{ backgroundColor: "#156B7A", padding: "10px" }}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{
          backgroundColor: "#156B7A",
          color: "white",
          width: "120px",
          height: "50px",
          padding: "10px 0px",
          borderRadius: "30px",
          margin: "20px auto 20px auto",
          cursor: "pointer",
        }}
        onClick={handleSetShow}
      />
    </>
  );
}

export default BookingMenu;
