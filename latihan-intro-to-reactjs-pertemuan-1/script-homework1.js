const element = (
   <div>
      <nav className="navbar navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               <i className="bi bi-thermometer-sun"></i>
               Temperature
            </a>
         </div>
      </nav>
      <div className="container">
         <div className="row pt-lg-5">
            <div className="col-md-6">
               <img src="./picture/Thermometer.jpg" alt="Foto" />
            </div>
            <div className="col-md-6">
               <h2>Temperature Convertion</h2>
               <div className="d-flex bd-highlight" onChange={() => reset()}>
                  <div className="flex-fill bd-highlight">
                     <select className="form-select" id="temp1">
                        <option value="Celcius" defaultValue>
                           Celcius
                        </option>
                        <option value="Farenheit">Farenheit</option>
                        <option value="Reamur">Reamur</option>
                     </select>
                  </div>
                  <div className="p-2">
                     <label className="form-label">To</label>
                  </div>
                  <div className="flex-fill bd-highlight">
                     <select className="form-select" id="temp2">
                        <option value="Celcius" defaultValue>
                           Celcius
                        </option>
                        <option value="Farenheit">Farenheit</option>
                        <option value="Reamur">Reamur</option>
                     </select>
                  </div>
               </div>
               <div className="mb-3">
                  <input type="text" className="form-control" id="input" placeholder="Number" onKeyUp={() => changed()} />
               </div>
               <div>
                  <label className="form-label">=</label>
               </div>
               <div className="mb-3">
                  <input type="text" className="form-control" id="hasil" placeholder="Result" disabled />
               </div>
            </div>
         </div>
         <div className="row mt-lg-5 bg-danger">
            <h5>Change Background Color:</h5>
            <div>
               <input type="text" className="form-control" id="bgcolor" placeholder="Color" onKeyUp={() => changed()} />
            </div>
            <div className="p-2">
               <button id="btnsubmit" onClick={() => submitted(bgcolor)}>
                  Change
               </button>
            </div>
         </div>
      </div>
   </div>
);

ReactDOM.render(element, document.getElementById("root"));
