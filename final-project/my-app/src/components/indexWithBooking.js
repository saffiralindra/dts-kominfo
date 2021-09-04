import React from "react";
import logo from "../image/logo.png";
import "../css/style-nav.css";
import Navigation from "./navigation";

class WithBooking extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            <div className="container mt-4 my-container2">
               <h4>Daftar Booking</h4>

               <table className="table">
                  <thead>
                     <tr>
                        <th scope="col">No</th>
                        <th scope="col">Bank Tujuan</th>
                        <th scope="col">Keperluan Layanan</th>
                        <th scope="col">Tgl/Jam Booking</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Bank BRI Meruya</td>
                        <td>Transaksi</td>
                        <td>02-09-2021/15.00</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Bank BRI Kedoya</td>
                        <td>Menabung</td>
                        <td>02-09-2021/15.00</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Bank BRI Ciputat</td>
                        <td>Pinjaman Bank</td>
                        <td>J02-09-2021/15.00</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </>
      );
   }
}

export default WithBooking;
