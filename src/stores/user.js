import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "___",
  }),
  actions: {
    loadUser() {
      const user = localStorage.getItem("user");
      if (user) {
        this.name = JSON.parse(user);
      }
    },
    changeName(myName) {
      this.name = myName;
      localStorage.setItem("user", JSON.stringify(myName));
    },
  },
});
