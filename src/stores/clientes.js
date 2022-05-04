import { defineStore  } from "pinia";
import axios from "axios";

export const clienteStore = defineStore('clientes', {
  state: () => ({
    isAuthenticated: false,
    token: '',
    clienteData: null,
  }),

  getters : {
    funcion1() {
      
    },
    funcion2() {
      
    }
  },

  actions: {
    async iniciarSesion(user, passwd) {
      try {
        console.log('desde local', user.value, passwd.value);
        const request = await axios.post('https://demo.factura123.mx/api/v2/public/login',
        {
          user: user,
          passwd: passwd,
        })
        console.log('bienvenido', request);
      } catch (error) {
        console.log(error)
        return error
      }
    },
  }
});
