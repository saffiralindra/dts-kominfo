import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AccountScreen from "./screen/AccountScreen";
import HomeScreen from "./screen/HomeScreen";
import PromoScreen from "./screen/PromoScreen";
import ProductDetail from "./screen/ProductDetail";

function App() {
   return (
      <BrowserRouter>
         <div>
            <h1>TokoLapak</h1>

            <NavBar />

            <div style={{ height: "20px" }}></div>

            <Switch>
               <Route path="/" exact>
                  <HomeScreen />
               </Route>

               <Route path="/akun">
                  <AccountScreen />
               </Route>

               <Route path="/promo">
                  <PromoScreen />
               </Route>

               <Route path="/product-detail/:product_id" component={ProductDetail} />

               <Route>
                  <h1>404 Not Found : URL yang diinput tidak ada</h1>
               </Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
