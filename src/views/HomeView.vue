<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import { useUserStore } from "../stores/user";
import UserLayout from "../layouts/UserLayout.vue";

const name = ref("");
const userStore = useUserStore();

const updateName = (event) => {
  if (event.key === "Enter") {
    const myName = name.value.toUpperCase();
    if (myName) {
      userStore.changeName(myName);
      name.value = "";
    }
  }
};
</script>

<template>
  <UserLayout>
    <div class="container">
      <input type="text" v-model="name" @keyup="updateName" maxlength="40" />
      <p>- Enter your name -</p>
      <RouterLink :to="{ name: 'todo' }">Create todo</RouterLink>
    </div>
  </UserLayout>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  min-width: 600px;
  margin: auto;
}

input {
  border-radius: 50px;
  border-right: none;
  border: 2px solid white;
  padding: 10px 20px;
  width: 300px;
  font-size: 18px;
  outline: none;
}

input:focus {
  background-color: #85c1e9;
  color: black;
}

a {
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  background: linear-gradient(45deg, #85c1e9 30%, #d6eaf8);
  color: black;
  text-decoration: none;
}

a:hover {
  background: linear-gradient(45deg, #d6eaf8 30%, #85c1e9);
}
</style>
