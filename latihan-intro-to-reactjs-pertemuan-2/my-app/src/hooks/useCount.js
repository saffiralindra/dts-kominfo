import { useState } from "react";

const INITIAL_STATE = { value: 0 };

function useCount() {
   const [count, setCount] = useState({ value: 0 });
   const increment = () => {
      setCount((current) => ({
         ...current,
         value: current + 1,
      }));
   };
   const decrement = () => {
      setCount((current) => ({
         ...current,
         value: current - 1,
      }));
   };
   const reset = () => {
      setCount(INITIAL_STATE);
   };

   return {
      count: count.value,
      increment,
      decrement,
      reset,
   };
}

export default useCount;
