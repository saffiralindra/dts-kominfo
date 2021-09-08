import { BrowserRouter, Route, Switch } from "react-router-dom";
import DaftarBank from "./components/daftarbank";
import FormBooking from "./components/form-booking";
import FormLogin from "./components/form-login";
import NoBooking from "./components/indexNoBooking";
import WithBooking from "./components/indexWithBooking";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import InfoAntrian from "./components/info-antrian";
import FormRegister from "./components/form-register";
import DetailBooking from "./components/detail-booking";

function App() {
   return (
      <BrowserRouter>
         <div>
            <Logo />
            <Switch>
               <Route path="/beranda" defaultSelectedKeys={["1"]}>
                  <WithBooking />
               </Route>
               <Route path="/booking" defaultSelectedKeys={["2"]}>
                  <FormBooking />
               </Route>
               <Route path="/detail-booking" defaultSelectedKeys={["2"]}>
                  <DetailBooking />
               </Route>
               <Route path="/daftar-bank" defaultSelectedKeys={["3"]}>
                  <DaftarBank />
               </Route>
               <Route path="/info-antrian" defaultSelectedKeys={["4"]}>
                  <InfoAntrian />
               </Route>
               <Route path="/login">
                  <FormLogin />
               </Route>
               <Route path="/form-register">
                  <FormRegister />
               </Route>
               <Route>
                  <h1>404 Not Found : URL Tidak Ditemukan</h1>
               </Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
