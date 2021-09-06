import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// JSX => syntax mirip HTML tapi bisa jalanin javascript
{
   /*function App() {
   const [state, fungsiState] = useState(false);
   return (
      <div>
         <h1>Halo, selamat datang di React!</h1>
         <MyButton
            color="red"
            onClick={() => {
               fungsiState(false);
            }}
         >
            Tutup
         </MyButton>
         <MyButton
            color="green"
            onClick={() => {
               fungsiState(true);
            }}
         >
            Buka
         </MyButton>
         {/* children bisa diparsing di tengah tengah tag atau di dalam tag dalam bentuk children

         <MyButton
            onClick={() => {
               if (state === true) {
                  fungsiState(false);
               } else {
                  fungsiState(true);
               }
            }}
         >
            Toggle
         </MyButton>

         {state === true ? <h1>Halo guys</h1> : null}
      </div>
   );
}

// Nama Function biasanya diawali huruf besar agar beda dengan tag html
function MyButton({ color, children, onClick }) {
   // properties object bisa diganti dengan color dan children
   //const text = properties.text ?? "Empty"; // Ditambahkan nilai default kalo ga ada text
   // const children = properties.children;
   // const color = properties.color;

   //const { color, children } = properties; // konsep destructuring
   return (
      <button onClick={onClick} style={{ backgroundColor: color }} className="my-button">
         {children}
      </button>
   );
}

function App() {
   // Menampilkan data dari jsonplaceholder API
   // https://jsonplaceholder.typicode.com/photos

   //1. Ambil datanya
   //2. Simpan datanya di dalam suatu state
   //3. Buat tampilan bergantung pada state tersebut

   const [show, setShow] = useState(false);
   const [photos, setPhotos] = useState([]);

   async function AmbilData() {
      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
         const data = await response.json();
         setPhotos(data);
      } catch (e) {
         console.log(e);
         setPhotos([]);
      }
   }

   useEffect(() => {
      AmbilData();
   }, []);

   console.log("Photo posisi sekarang : ");
   console.log(photos);

   return (
      <div>
         {/*<button
            onClick={() => {
               setShow({ show });
            }}
         >
            Toggle
          </button>
         <h1>Selamat datang di Web Koleksi Gambar</h1>
         <div className="grid-utama">
            {photos.map((photo, index) => {
               //return <div>{JSON.stringify(photo, null, 2)}</div>;
               return (
                  <div className="card">
                     <img className="card-image" src={"https://picsum.photos/id/${photo.id}/200/300"} />
                     <h4>{photo.title}</h4>
                     <p>Album Id : {photo.albumId}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
}*/
}

function App() {
   return (
      <BrowserRouter>
         <div>
            <h1>Contoh Web dengan 3 halaman</h1>
         </div>
         <nav>
            <ul>
               <li>
                  <Link to="/">Menuju Home</Link>
               </li>
               <li>
                  <Link to="/about">Menuju About</Link>
               </li>
               <li>
                  <Link to="/contact-us">Menuju Contact Us</Link>
               </li>
            </ul>
         </nav>
         <Route path="/" exact>
            <h4>Ini halaman home</h4>
         </Route>
         <Route path="/about">
            <h4>Ini halaman about</h4>
         </Route>
         <Route path="/contact-us">
            <h4>Ini halaman contact us</h4>
         </Route>
      </BrowserRouter>
   );
}

export default App;
