//import { createTodo as createTodoinLS, getTodos } from "./database/todo";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

function App() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      GetList();
   }, []);

   function GetList() {
      axios.get("todoList").then((ress) => {
         console.log(ress);
         setTodos(ress);
      });
   }

   // useEffect(() => {
   //     const todos = getTodos();
   //     setTodos(todos);
   // }, []);

   function createTodo(todoItem) {
      // setTodos(todos.concat(todoItem));
      axios.post("create", { ...todoItem }).then((ress) => {
         console.log(ress);
         GetList();
      });
      // console.log(todoItem);

      //createTodoinLS(todoItem);
   }

   function toggleTodoComplete(id) {
      axios.post("update/" + id).then((ress) => {
         console.log(ress);
         GetList();
      });
   }

   function handleDeleteTodo(id) {
      axios.post("delete/" + id).then((ress) => {
         console.log(ress);
         GetList();
      });
   }

   const activeTodos = todos.filter((e) => !e.isCompleted);

   const completedTodos = todos.filter((e) => e.isCompleted);

   return (
      <div className="p-5">
         <h1 className="text-2xl">Awesome Todo App!</h1>

         {/* Form Create New To Do */}

         <form
            className="mt-3"
            onSubmit={(e) => {
               e.preventDefault();
               const formValue = e.target.elements.todo.value;
               e.target.elements.todo.value = "";
               createTodo({
                  id: uuidv4(),
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

         {/* Tampilkan Datanya */}

         <div className="mt-3">
            <h4>Harus dikerjakan : </h4>
            {
               activeTodos.length !== 0 ? (
                  activeTodos.map((todo) => (
                     <div key={todo.id} className="flex items-center gap-2">
                        <button onClick={() => toggleTodoComplete(todo.id)}>&#9711;</button>
                        <div
                           className={classNames("font-extralight", {
                              "line-through": todo.isCompleted,
                              "text-gray-600": todo.isCompleted,
                           })}
                        >
                           {todo.title}
                        </div>
                     </div>
                  ))
               ) : (
                  <div className="text-gray-500 text-xs">Todo list kosong. Have a great day !</div>
               )

               // {todos.map((todo, index) => (
               //    <div key={index} style={{ display: "flex", flexDirection: "row", paddingLeft: "10px", paddingTop: "5px" }}>
               //       <div>&#9711;</div>
               //       <div style={{ paddingLeft: "20px" }}>{todo.title}</div>
               //       <div style={{ paddingLeft: "20px", fontSize: "10px" }}>{todo.isCompleted ? "Sudah Selesai" : "Belum Selesai"}</div>
               //    </div>
               // ))
            }
         </div>

         {/* Tampilkan item yang sudah complete */}
         {completedTodos.length !== 0 && (
            <div className="mt-3">
               <h4>Selesai :</h4>
               {completedTodos.map((todo) => (
                  <div key={todo.id} className="group relative flex items-center gap-2">
                     <button onClick={() => toggleTodoComplete(todo.id)}>&#9711;</button>
                     <div
                        className={classNames("font-extralight", {
                           "line-through": todo.isCompleted,
                           "text-gray-600": todo.isCompleted,
                        })}
                     >
                        {todo.title}
                     </div>
                     <button className="group-hover:block hidden" onClick={() => handleDeleteTodo(todo.id)}>
                        <span className="text-red-800">&#x2715;</span>
                     </button>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
