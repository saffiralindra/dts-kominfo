import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import UserContext from "./context/UserContext";

class App extends React.Component {
   constructor(props) {
      super(props);
      // Digunakan untuk menyederhanakan variable yang dipanggil
      this.state = {
         user: {
            name: "Saffira Lindra Putri",
         },
         withHomePage: false,
      };
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                  Edit <code>src/App.js</code> and save to reload.
               </p>
               <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
               </a>
               <UserContext.Provider
                  value={{
                     value: {
                        ...this.state.user,
                     },
                     setter: (newValue) => {
                        this.setState((current) => ({
                           ...current,
                           user: newValue,
                        }));
                     },
                  }}
               >
                  <HomePage />
                  {/* name={this.state.user.name}*/}
               </UserContext.Provider>
            </header>
         </div>
      );
   }
}

export default App;
