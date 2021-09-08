//import React from "react";
//import "../css/style-form-booking.css";
//import "../css/style-nav.css";
import { Select, Layout } from "antd";
import Navigation from "./navigation";
import { useHistory } from "react-router";
const { Content, Header } = Layout;

export default function FormBooking() {
   let history = useHistory();
   function handleClick() {
      history.push("/detail-booking");
   }
   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Content className="site-layout-background">
               <div style={{ padding: "30px" }}>
                  <h3 className="mb-5">Book Antrian Untuk Besok</h3>
                  <form className="row text-start pt-5 pe-3" action="./DetailBooking.html">
                     <table>
                        <tr>
                           <td align="left">
                              <h5>&nbsp; Bank Tujuan</h5>
                           </td>
                           <td>
                              <h5>&nbsp; : &nbsp;</h5>
                           </td>
                           <td>
                              <Select
                                 showSearch
                                 style={{ width: "1000px", fontSize: "20px" }}
                                 placeholder="Ketik atau pilih Unit Kerja / Kantor Cabang"
                                 optionFilterProp="children"
                                 onChange={onChange}
                                 onFocus={onFocus}
                                 onBlur={onBlur}
                                 onSearch={onSearch}
                                 filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                              >
                                 {/*<Option defaultValue>-Ketik atau Pilih Unit Kerja/Kantor Cabang-</Option>*/}
                                 <Option value="1">Bank KCP Soreang</Option>
                                 <Option value="2">Bank KCP Banjaran</Option>
                              </Select>
                              {/*, mountNode,
                      <select className="form-select" aria-label="Default select example">
                              <option defaultValue>-Ketik atau Pilih Unit Kerja/Kantor Cabang-</option>
                              <option value="1">Bank KCP Soreang</option>
                              <option value="2">Bank KCP Banjaran</option>
                           </select> */}
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
                              <Select
                                 showSearch
                                 style={{ width: "1000px", fontSize: "20px" }}
                                 placeholder="Pilih Layanan"
                                 optionFilterProp="children"
                                 onChange={onChange}
                                 onFocus={onFocus}
                                 onBlur={onBlur}
                                 onSearch={onSearch}
                                 filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                              >
                                 {/*<Option defaultValue>-Pilih Layanan-</Option>*/}
                                 <Option value="1">Pendaftaran (dilayani oleh Customer Services)</Option>
                                 <Option value="2">Transaksi (dilayani oleh Teller)</Option>
                                 <Option value="3">Pinjaman (dilayani oleh Petugas Kredit) (dilayani oleh Teller)</Option>
                              </Select>
                              {/*, mountNode,
                      <select className="form-select" aria-label="Default select example">
                              <option defaultValue>-Pilih Layanan-</option>
                              <option value="1">Pendaftaran (dilayani oleh Customer Services)</option>
                              <option value="2">Transaksi (dilayani oleh Teller)</option>
                              <option value="2">Pinjaman (dilayani oleh Petugas Kredit) (dilayani oleh Teller)</option>
                           </select> */}
                           </td>
                        </tr>
                     </table>
                     <div className="button pt-5">
                        <button type="submit" className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-4 text-light" onClick={handleClick}>
                           Dapatkan Nomor Antrian &nbsp;<b>&gt;</b>
                        </button>
                     </div>
                  </form>
               </div>
            </Content>
         </Layout>
      </Layout>
   );
}

const { Option } = Select;

function onChange(value) {
   console.log(`selected ${value}`);
}

function onBlur() {
   console.log("blur");
}

function onFocus() {
   console.log("focus");
}

function onSearch(val) {
   console.log("search:", val);
}
