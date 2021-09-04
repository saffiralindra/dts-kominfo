import React from "react";
import Navigation from "./navigation";
import "../css/style-form-booking.css";

class detailbooking extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            <div className="my-container2">
               <form className="row text-start pt-5 pe-5">
                  <h2 className="text-light mb-5">Detail Booking</h2>
                  <table>
                     <tr>
                        <td>
                           <h5 align="left">&nbsp; Nomor Antrian</h5>
                        </td>
                        <td>&nbsp; : &nbsp;</td>
                        <td></td>
                     </tr>
                     <tr>
                        <td>
                           <h5 align="left">&nbsp; Bank Tujuan</h5>
                        </td>
                        <td>&nbsp; : &nbsp;</td>
                        <td></td>
                     </tr>
                     <tr>
                        <td>
                           <h5 align="left">&nbsp; Keperluan Layanan</h5>
                        </td>
                        <td>&nbsp; : &nbsp;</td>
                        <td></td>
                     </tr>
                  </table>
                  <h5 className="text-light">Nomor antrian akan dilayani pada tanggal</h5>
                  <h5 className="text-light">(Tanggal dan jam)</h5>
                  <h5 className="text-light">Untuk mempercepat transaksi silahkan kunjungi (e-form)</h5>
                  <h5 className="text-warning">*Harap mendatangi kantor sebelum waktu pelayanan</h5>
                  <div class="button">
                     <button type="button" className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-4 text-light">
                        Layanan Selesai
                     </button>
                  </div>
               </form>
            </div>
         </>
      );
   }
}

export default detailbooking;
