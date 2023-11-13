<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import { useUserStore } from "./stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.loadUser();
});
</script>

<template>
  <RouterView />
</template>
