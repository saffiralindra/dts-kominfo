import React from "react";
import Navigation from "./navigation";
import "../css/style-form-booking.css";

class formbooking extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            <div className="container p-2 my-container2">
               <form className="row text-start pt-5 pe-3" action="./DetailBooking.html">
                  <h2 className="text-light mb-5">Book antrian untuk besok</h2>
                  <table>
                     <tr>
                        <td align="left">
                           <h5>&nbsp; Bank Tujuan</h5>
                        </td>
                        <td>
                           <h5>&nbsp; : &nbsp;</h5>
                        </td>
                        <td>
                           <select className="form-select" aria-label="Default select example">
                              <option defaultValue>-Ketik atau Pilih Unit Kerja/Kantor Cabang-</option>
                              <option value="1">Bank KCP Soreang</option>
                              <option value="2">Bank KCP Banjaran</option>
                           </select>
                        </td>
                     </tr>
                     <br />
                     <tr>
                        <td align="left">
                           <h5>&nbsp; Keperluan Layanan</h5>
                        </td>
                        <td>
                           <h5> &nbsp; : &nbsp;</h5>
                        </td>
                        <td>
                           <select className="form-select" aria-label="Default select example">
                              <option defaultValue>-Pilih Layanan-</option>
                              <option value="1">Pendaftaran (dilayani oleh Customer Services)</option>
                              <option value="2">Transaksi (dilayani oleh Teller)</option>
                              <option value="2">Pinjaman (dilayani oleh Petugas Kredit) (dilayani oleh Teller)</option>
                           </select>
                        </td>
                     </tr>
                  </table>
                  <div className="button">
                     <button type="submit" className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-4 text-light">
                        Dapatkan Nomor Antrian &nbsp;<b>&gt;</b>
                     </button>
                  </div>
               </form>
            </div>
         </>
      );
   }
}

export default formbooking;
