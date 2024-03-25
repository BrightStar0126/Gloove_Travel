export const getAccomodations = async () => {
  const url = `https://e824-83-234-227-28.ngrok-free.app/accommodations`;
  const res = await fetch(url, { method: "get",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true"
  }, });
  if (res) {
    return await res.json();
  } else return null;
};

export const getDescriptions = async () => {
  const url = `https://e824-83-234-227-28.ngrok-free.app/descriptions`;
  const res = await fetch(url, { method: "get",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true"
  }, });
  if (res) {
    return await res.json();
  } else return null;
};

export const openBooking = async (adaptedURI) => {
  const url = `https://e824-83-234-227-28.ngrok-free.app/booking/open`;
  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({
      adaptedURI,
    }),
  });
  if (res) {
    return await res.json();
  } else return null;
};

export const deleteBooking = async (adaptedURI) => {
  console.log(adaptedURI);
  const url = `https://e824-83-234-227-28.ngrok-free.app/booking/delete`;
  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({
      adaptedURI,
    }),
  });
  if (res) {
    return await res.json();
  } else return null;
};

export const openAllBooking = async () => {
  const url = `https://e824-83-234-227-28.ngrok-free.app/booking/openAll`;
  const res = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });
  if (res) {
    return await res.json();
  } else return null;
};

export const insertBooking = async (bookingDataMenu) => {
  console.log("bookingData>>", bookingDataMenu);
  const url = `https://e824-83-234-227-28.ngrok-free.app/booking/insert`;
  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({
      ...bookingDataMenu,
    }),
  });
  if (res) {
    return await res.json();
  } else return null;
};
