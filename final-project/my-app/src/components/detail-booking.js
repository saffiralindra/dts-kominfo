//import React from "react";
//import Navigation from "./navigation";
//import "../css/style-form-booking.css";
import { Layout } from "antd";
import Navigation from "./navigation";
const { Content } = Layout;

export default function DetailBooking() {
   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Content className="site-layout-background">
               <div className="my-container2" style={{ padding: "20px" }}>
                  <form className="row text-start pt-5 pe-5">
                     <h2 className="mb-5">Detail Booking</h2>
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
                     <h5>Nomor antrian akan dilayani pada tanggal</h5>
                     <h5>(Tanggal dan jam)</h5>
                     <h5>Untuk mempercepat transaksi silahkan kunjungi (e-form)</h5>
                     <h5 className="text-warning">*Harap mendatangi kantor sebelum waktu pelayanan</h5>
                     <div class="button">
                        <button type="button" className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-4 text-light">
                           Layanan Selesai
                        </button>
                     </div>
                  </form>
               </div>
            </Content>
         </Layout>
      </Layout>
   );
}
