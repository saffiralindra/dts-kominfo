import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/home" component={DashboardScreen} />
         </div>
      </BrowserRouter>
   );
}

export default App;
