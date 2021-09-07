import { Link } from "react-router-dom";
import Products from "../database/Products";

// bikin react component untuk mengisi HomeScreen

export default function HomeScreen() {
   return (
      <div className="grid grid-cols-2 gap-4">
         {Products.map((product) => (
            <ProductCard
               {...product}
               //title={product.title} price={product.price} location={product.location} rating={product.rating}
            />
         ))}
      </div>
   );
}

function ProductCard({ id, title, price, location, rating }) {
   return (
      <Link to={`/product-detail/${id}`}>
         <div className="bg-white rounded-xl shadow-xl px-4 pb-4">
            <img className="w-full rounded-t-xl" src={`https://picsum.photos/id/${id}/500/200`} alt="Foto" />

            <div className="px-4">
               <div className="flex items-center justify-between">
                  <p className="text-xl">{title}</p>
                  <p className="font-bold">Rp {price}</p>
               </div>
               <p className="text-sm">{location}</p>
               <p className="text-sm">{rating}</p>
            </div>
         </div>
      </Link>
   );
}
