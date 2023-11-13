<script setup>
import { RouterLink } from "vue-router";

import { useUserStore } from "../stores/user";
import Home from "../components/icons/Home.vue";

const userStore = useUserStore();
</script>

<template>
  <div>
    <nav>
      <div class="container">
        <RouterLink :to="{ name: 'home' }">
          <Home class="home"></Home>
        </RouterLink>
        <h1>{{ userStore.name }}'S TODO</h1>
      </div>
    </nav>
  </div>

  <slot></slot>
</template>

<style scoped>
.container {
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  min-width: 600px;
  margin: auto;
}

.home {
  font-size: 30px;
}
</style>
