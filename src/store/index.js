import { defineStore } from 'pinia';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    formData: (state) => state.authUser,
    
  },
  
  actions: {
    handleLogout() {
      this.authUser = null;
    },
    handleLogin(email) {
      this.authUser = email;
    },
  },
});