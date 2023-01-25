import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: {
      name: 'User Test',
      login: 'user123@ukr.net',
      password: '1524689sdf',
    },
  }),

  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    handleLogout() {
      this.authUser = null;
    },
  },
});