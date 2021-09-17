export function getTodos() {
   return JSON.parse(localStorage.getItem("todo")) ?? [];
}

export function createTodo(todoItem) {
   // Ngecek kalo udah ada, jangan bikin baru, tapi tambahkan ke array yang sudah ada
   if (localStorage.getItem("todo") != null) {
      const todos = JSON.parse(localStorage.getItem("todo"));
      const newTodos = todos.concat(todoItem);
      localStorage.setItem("todo", JSON.stringify(newTodos));
   } else {
      localStorage.setItem("todo", JSON.stringify([todoItem]));
   }
}

function setTodoAsFinished() {}
