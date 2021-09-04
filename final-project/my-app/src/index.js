import React from "react";
import ReactDOM from "react-dom";

/* Form Login */
//import FormLogin from "./components/form-login";

/* Halaman Dalam */
//import NoBooking from "./components/indexNoBooking";
//import WithBooking from "./components/indexWithBooking";

/* Form Booking */
//import FormBooking from "./components/form-booking";
//import DetailBooking from "./components/detail-booking";

/* Form Daftar Bank */
//import DaftarBank from "./components/daftarbank";

/* Form Info Antrian */
import InfoAntrian from "./components/info-antrian";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      {/*<Navigation />
      <FormLogin />
      <NoBooking />
      <WithBooking />
      <FormBooking />
      <DetailBooking />
      <DaftarBank />
      <InfoAntrian />*/}
      <InfoAntrian />
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
