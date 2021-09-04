import React from "react";
import logo from "../image/logo.png";
import "../css/style-daftar-bank.css";
import Navigation from "./navigation";

class DaftarBank extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            {/*<nav className="navbar navbar-expand d-flex flex-column align-items-start" id="sidebar">
               <div className="container">
                  <div className="row justify-content-start my-row">
                     <div className="col-md-1">
                        <img src={logo} alt="logo" width="50" />
                     </div>
                     <div className="col-md-1">
                        <h3>BRI</h3>
                     </div>
                  </div>
               </div>
               <ul className="navbar-nav d-flex flex-column mt-5 w-100">
                  <div className="nav-item w-100">
                     <li>
                        <a href="https://reactjs.org" className="nav-link text-light pl-4 link1">
                           <i className="fas fa-home"></i>Daftar Bank
                        </a>
                     </li>
                     <li>
                        <a href="https://reactjs.org" className="nav-link text-light pl-4 link2">
                           <i className="far fa-bookmark"></i>Book Nomor Antrian
                        </a>
                     </li>
                     <li>
                        <a href="https://reactjs.org" className="nav-link text-light pl-4 link3">
                           <i className="fas fa-list"></i>Daftar Bank & Info Antrian
                        </a>
                     </li>
                     <li>
                        <a href="https://reactjs.org" className="nav-link text-light pl-4 link4">
                           <i className="far fa-user"></i>Sign Out
                        </a>
                     </li>
                  </div>
               </ul>
      </nav>

            <div className=" head border border-warning border-top-0 border-end-0 border-start-0">
               <input type="checkbox" id="check" />
               <label htmlFor="check" />

               <div className="container p-2 my-container1">
                  <div className="row justify-content-start">
                     <div className="col-md-1">
                        <button className="btn">
                           <i className="fas fa-bars" id="btn1"></i>
                        </button>
                     </div>
                     <div className="col-md-4">
                        <h4 className="br">Daftar Bank</h4>
                     </div>
                  </div>
               </div>
            </div>*/}

            <section className="p-4 my-container2">
               <div className="container-fluid py-5">
                  <div className="container">
                     <h3 className="judul">Daftar Bank</h3>
                     <table id="table1" className="table table-dark table-bordered border-warning">
                        <thead>
                           <tr>
                              <th>No.</th>
                              <th>Bank</th>
                              <th>Alamat</th>
                              <th>Lihat Detail Antrian</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>2.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>3.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>4.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>5.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>6.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>7.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>8.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>9.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>10.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>11.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>12.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>13.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>14.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>15.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>16.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>17.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>18.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>19.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                           <tr>
                              <td>20.</td>
                              <td>Bank KCP Soerang</td>
                              <td>jl. Soerang No.181</td>
                              <td>
                                 <button className="btn4">Lihat Detail</button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </section>
         </>
      );
   }
}

export default DaftarBank;
