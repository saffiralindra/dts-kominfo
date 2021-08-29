import React from "react";
import Welcome from "./Welcome";

class HomePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: 0 };
   }

   componentDidMount() {
      console.log("Homepage berhasil dirender");
      // Hanya dijalankan 1 kali pasca di render
   }

   render() {
      console.log("di render", this.state);

      return (
         <div>
            <Welcome />
            {/* name={this.props.name}*/}
            <h3>Nilai saat ini : {this.state.value}</h3>
            <button
               onClick={() => {
                  /*Cara pertama untuk render ulang
                  this.setState({ value: this.state.value + 1 });
                  */

                  /*Cara kedua untuk render ulang*/
                  this.setState((current) => ({ value: current.value + 1 }));
               }}
            >
               Tambah
            </button>
         </div>
      );
   }
}

export default HomePage;
