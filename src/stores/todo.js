import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    loadTodo() {
      const todo = localStorage.getItem("todo-data");
      if (todo) {
        this.todos = JSON.parse(todo);
      }
    },
    addTodo(todoData) {
      this.todos.push(todoData);
      localStorage.setItem("todo-data", JSON.stringify(this.todos));
    },
    editTodo(todoData, todoIndex) {
      this.todos.splice(todoIndex, 1, todoData);
      localStorage.setItem("todo-data", JSON.stringify(this.todos));
    },
    deleteTodo(todoIndex) {
      this.todos.splice(todoIndex, 1);
      localStorage.setItem("todo-data", JSON.stringify(this.todos));
    },
  },
});
