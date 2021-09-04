import React from "react";
import Navigation from "./navigation";

class InfoAntrian extends React.Component {
   render() {
      return (
         <>
            <Navigation />
            <div class="container my-container2">
               <h3 class="text-light mt-3 mb-5">Info Antrian Hari Ini</h3>
               <div class="container">
                  <div class="row mb-3">
                     <label for="colFormLabel" class="col-sm-3 text-light col-form-label">
                        Bank
                     </label>
                     <div class="col-sm-4">
                        <label for="colFormLabel" class="text-light col-form-label">
                           Bank KCP Soreang
                        </label>
                        {/*<input type="email" class="form-control" id="colFormLabel" placeholder="Bank KCP Soreang" />*/}
                     </div>
                  </div>
                  <div class="row mb-3">
                     <label for="colFormLabel" class="col-sm-3 text-light col-form-label">
                        Alamat
                     </label>
                     <div class="col-sm-4">
                        <label for="colFormLabel" class="text-light col-form-label">
                           Jl. Soreang No.181 Bandung
                        </label>
                        {/*<input type="email" class="form-control" id="colFormLabel" placeholder="Jl. Soreang No.181 Bandung" />*/}
                     </div>
                  </div>
                  <div class="row mb-3">
                     <label for="colFormLabel" class="col-sm-3 text-light col-form-label">
                        Nomor Antrian yang sedang dilayani saat ini
                     </label>
                     <div class="col-sm-4">
                        <label for="colFormLabel" class="text-light col-form-label">
                           123
                        </label>
                        {/*<input type="email" class="form-control" id="colFormLabel" placeholder="123" />*/}
                     </div>
                  </div>
               </div>
               <div class="d-grid gap-2 d-sm-flex justify-content-sm-start pt-3">
                  <button type="button" class="btn btn-primary btn-sm">
                     Kembali
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm">
                     Booking untuk besok
                  </button>
               </div>
            </div>
         </>
      );
   }
}

export default InfoAntrian;
