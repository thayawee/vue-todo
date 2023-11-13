<script setup>
import { ref, onMounted } from "vue";

import { useTodoStore } from "../stores/todo";
import UserLayout from "../layouts/UserLayout.vue";
import Edit from "../components/icons/Edit.vue";
import Trash from "../components/icons/Trash.vue";
import Star from "../components/icons/Star.vue";

const todo = ref("");
const isDone = ref(false);
const isEdit = ref(false);
const todoStore = useTodoStore();

onMounted(() => {
  todoStore.loadTodo();
});

const addTodo = () => {
  const todoData = {
    todo: todo.value,
    isDone: isDone.value,
    isEdit: isEdit.value,
  };
  if (todo.value) {
    todoStore.addTodo(todoData);
    todo.value = "";
  }
};

const toggleDone = (index) => {
  todoStore.todos[index].isDone = !todoStore.todos[index].isDone;
};

const toggleEdit = (index) => {
  todoStore.todos[index].isEdit = !todoStore.todos[index].isEdit;
};

const editTodo = (todo, index) => {
  const todoData = {
    todo: todo.todo,
    isDone: todo.isDone,
    isEdit: isEdit.value,
  };
  todoStore.editTodo(todoData, index);
};
</script>

<template>
  <UserLayout>
    <div class="container">
      <div class="form-todo">
        <div>
          <input type="text" v-model="todo" />
          <button @click="addTodo()">Add</button>
        </div>
      </div>
      <p v-if="todoStore.todos.length <= 0">- Create your todo -</p>
      <div class="todo">
        <ul v-for="(todo, index) in todoStore.todos" :key="index">
          <div class="todo-list">
            <div class="list">
              <div>
                <li
                  @click="toggleDone(index)"
                  :class="todo.isDone ? 'done' : ''"
                >
                  <span><Star v-if="todo.isDone"></Star></span> {{ todo.todo }}
                </li>
              </div>
              <div class="list-btn">
                <Edit @click="toggleEdit(index)"></Edit>
                <Trash @click="todoStore.deleteTodo(index)"></Trash>
              </div>
            </div>
          </div>
          <div v-if="todo.isEdit">
            <input type="text" v-model="todo.todo" />
            <button @click="editTodo(todo, index)">Update</button>
          </div>
        </ul>
      </div>
    </div>
  </UserLayout>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px;
  min-width: 600px;
  margin: auto;
}

.form-todo {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}

.form-todo input {
  border-radius: 20px 0 0 20px;
  border: 2px solid lightgray;
  padding: 10px 20px;
  width: 450px;
}

.form-todo input:focus {
  background-color: #e9f7ef;
  color: black;
}

.form-todo button {
  border-radius: 0 20px 20px 0;
  border: 2px solid lightgray;
  border-left: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  background: linear-gradient(45deg, #82e0aa 30%, #d5f5e3);
  color: black;
}

.form-todo button:hover {
  background: linear-gradient(45deg, #d5f5e3 30%, #82e0aa);
  color: black;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}

.todo ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  gap: 20px;
  padding-bottom: 20px;
}

.todo-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.done {
  text-decoration: line-through;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 500px;
}

.list div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

li {
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

span {
  padding-right: 10px;
}

.list-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.todo input {
  border-radius: 20px 0 0 20px;
  border: 2px solid lightgray;
  padding: 10px 20px;
  width: 360px;
}

.todo input:focus {
  background-color: #fef5e7;
  color: black;
}

.todo button {
  border-radius: 0 20px 20px 0;
  border: 2px solid lightgray;
  border-left: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  background: linear-gradient(45deg, #f5b041 30%, #fdebd0);
  color: black;
}

.todo button:hover {
  background: linear-gradient(45deg, #fdebd0 30%, #f5b041);
  color: black;
}
</style>
