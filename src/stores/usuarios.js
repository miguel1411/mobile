import { defineStore  } from "pinia";
import axios from "axios";

export const clienteStore = defineStore('clientes', {
  state: () => ({
    token: 'uno',
  }),

  getters : {
    loginSession: async (state) => {
      const request = await this.axios.post('', {
        
      });
    }
  },

  actions: {
   inicioSession: (state) => {
      
   }
  }
});
