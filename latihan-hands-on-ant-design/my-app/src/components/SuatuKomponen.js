import { useState } from "react";

export default function SuatuKomponen() {
   const [count, setCount] = useState(0);
   return (
      <div>
         <h1>Suatu Komponen</h1>

         <div>
            <p>Counter :</p>
            Hitungan saat ini <span style={{ fontWeight: "bold", fontSize: 20 }}>{count}</span>
            <div>
               <button onClick={() => setCount(count + 1)}>+ 1</button>
               <button onClick={() => setCount(count - 1)}>- 1</button>
            </div>
         </div>
      </div>
   );
}
