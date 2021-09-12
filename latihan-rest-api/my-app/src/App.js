import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Planets from "./pages/Planets";
import People from "./pages/People";

export default function App() {
   return (
      <div>
         <NavBar />
         <div className="content">
            <Switch>
               <Route path="/" exact>
                  <Redirect to="/planets" />
               </Route>
               <Route path="/planet" component={Planets} />
               <Route path="/people" component={People} />
            </Switch>
         </div>
      </div>
   );
}
