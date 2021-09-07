import Products from "../database/Products";

export default function ProductDetail(props) {
   //console.log("Props : ", props );
   const id = props.match.params.product_id;
   //console.log("ID nya : ", id);
   const currentProduct = Products.filter((Products) => {
      if (Products.id === id) {
         return true;
      } else {
         return false;
      }
   })[0];
   console.log("Current Product : ", currentProduct);

   return (
      <div>
         <h1>Product Detail</h1>
         <p>{currentProduct.title}</p>
         <p>{currentProduct.price}</p>
         <p>{currentProduct.location}</p>
         <p>{currentProduct.rating}</p>
      </div>
   );
}
