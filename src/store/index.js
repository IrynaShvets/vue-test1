import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: {
      name: 'User Test',
      email: 'user123@ukr.net',
      password: '1524689sdf',
    },
  }),

  getters: {
    formData: (state) => state.authUser,
  },
  actions: {
    handleLogout() {
      this.authUser = null;
    },
  },
});