import React from "react";
import logo from "../image/logo.png";
import "../css/style-nav.css";

class Navigation extends React.Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand d-flex flex-column align-items-start" id="sidebar">
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
                        <a href="./navigation.js" className="nav-link text-light pl-4 link1">
                           <i className="fas fa-home"></i>Beranda
                        </a>
                     </li>
                     <li>
                        <a href=".../public/booking.html" className="nav-link text-light pl-4 link2">
                           <i className="far fa-bookmark"></i>Book Nomor Antrian
                        </a>
                     </li>
                     <li>
                        <a href="https://reactjs.org" className="nav-link text-light pl-4 link3">
                           <i className="fas fa-list"></i>Daftar Bank & Info Antrian
                        </a>
                     </li>
                     <li>
                        <a href="./login.js" className="nav-link text-light pl-4 link4">
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
                     <div className="col-md-1">
                        <h4 className="br">Beranda</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Navigation;
