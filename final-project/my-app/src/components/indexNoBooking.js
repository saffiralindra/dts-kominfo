import React from "react";
import "../css/style-nav.css";
import Navigation from "./navigation";

class NoBooking extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            <div class="container my-container2">
               <p>Anda sedang tidak membooking antrian saat ini</p>
               <p class="text-center">Silahkan lakukan booking melalui aplikasi pada H-1</p>
            </div>
         </>
      );
   }
}

export default NoBooking;
