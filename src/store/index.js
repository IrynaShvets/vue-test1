import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    name: 'User Test',
    login: 'user123@ukr.net',
    password: '1524689sdf',
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    getUser() {
      this.authUser;
    },
    handleLogin() {
      this.email;
      this.password;
      this.router.push("/");
    },
    handleRegister() {
        this.name;
        this.email;
        this.password;
        this.router.push("/");
    },
    handleLogout() {
      this.authUser = null;
    },
  },
});