import React from "react";
import UserContext from "../context/UserContext";

class Welcome extends React.Component {
   render() {
      // Menggunakan consumer
      return (
         <UserContext.Consumer>
            {({ value, setter }) => (
               <>
                  <h1>Halo, {value.name}!</h1>
                  <button
                     onClick={() => {
                        setter({
                           ...value,
                           name: value.name + "!",
                        });
                     }}
                  >
                     Tambah !
                  </button>
               </>
            )}
         </UserContext.Consumer>
      );
   }
}

// Penggunaan context supaya ga props drilling
// Welcome.contextType = UserContext;

export default Welcome;
