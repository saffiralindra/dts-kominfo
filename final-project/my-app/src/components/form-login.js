import React from "react";
import Login from "./login";
import logo from "../image/logo.png";
import "../css/style-form-login.css";

class formlogin extends React.Component {
   render() {
      return (
         <>
            <Login />
            <div className="input">
               <div className="wrapper">
                  <div className="logo">
                     <img alt="Foto" src={logo} />
                  </div>
                  <div className="title-text">
                     <div className="title login">Queue System</div>
                     <div className="title signup">Queue System</div>
                  </div>
                  <div className="form-container">
                     <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login">
                           Login
                        </label>
                        <label htmlFor="signup" className="slide signup">
                           Signup
                        </label>
                        <div className="slider-tab"></div>
                     </div>
                     <div className="form-inner">
                        <form action="./navigation.js" className="login">
                           <div className="field">
                              <input type="text" placeholder="Email Address" required />
                           </div>
                           <div className="field">
                              <input type="password" placeholder="Password" required />
                           </div>
                           <div className="pass-link">
                              <a href="https://reactjs.org">Forgot password?</a>
                           </div>
                           <div className="field btn">
                              <div className="btn-layer"></div>
                              <input type="submit" value="Login" />
                           </div>
                           <div className="signup-link">
                              Not a member? <a href="https://reactjs.org">Signup now</a>
                           </div>
                        </form>
                        <form action="./navigation.js" className="signup">
                           <div className="field">
                              <input type="text" placeholder="Email Address" required />
                           </div>
                           <div className="field">
                              <input type="password" placeholder="Password" required />
                           </div>
                           <div className="field">
                              <input type="password" placeholder="Confirm password" required />
                           </div>
                           <div className="field btn">
                              <div className="btn-layer"></div>
                              <input type="submit" value="Signup" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default formlogin;
