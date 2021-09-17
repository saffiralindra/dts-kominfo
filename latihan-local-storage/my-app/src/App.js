import { createTodo as createTodoinLS, getTodos } from "./database/todo";
import { useEffect, useState } from "react";

function App() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      const todos = getTodos();
      setTodos(todos);
   }, []);

   function createTodo(todoItem) {
      setTodos(todos.concat(todoItem));
      createTodoinLS(todoItem);
   }

   return (
      <div className="p-5">
         <h1 className="text-2xl">Awesome Todo App!</h1>
         <form
            className="mt-3"
            onSubmit={(e) => {
               e.preventDefault();
               const formValue = e.target.elements.todo.value;
               e.target.elements.todo.value = "";
               createTodo({
                  title: formValue,
                  isCompleted: false,
               });
            }}
         >
            <input name="todo" className="border-2" placeholder="Create New Todo..." />
            <button type="submit" className="bg-green-200 mx-2 px-2 rounded-lg">
               Buat Baru
            </button>
         </form>
         <div className="mt-3">
            {todos.map((todo, index) => (
               <div key={index} style={{ display: "flex", flexDirection: "row", paddingLeft: "10px", paddingTop: "5px" }}>
                  <div>&#9711;</div>
                  <div style={{ paddingLeft: "20px" }}>{todo.title}</div>
                  <div style={{ paddingLeft: "20px", fontSize: "10px" }}>{todo.isCompleted ? "Sudah Selesai" : "Belum Selesai"}</div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
