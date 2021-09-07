import { NavLink } from "react-router-dom";

export default function NavBar() {
   return (
      <nav>
         <ul className="flex gap-2">
            <li>
               <NavLink to="/" activeStyle={{ fontWeight: "bold", background: "red" }} exact>
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/akun" activeStyle={{ fontWeight: "bold", background: "red" }}>
                  Akun
               </NavLink>
            </li>
            <li>
               <NavLink to="/promo" activeStyle={{ fontWeight: "bold", background: "red" }}>
                  Promo
               </NavLink>
            </li>
         </ul>
      </nav>
   );
}
