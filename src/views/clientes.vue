<template>
  <div class="container-clientes">
    <h1>Clientes</h1>
    <div class="container-buscador form-floating mt-3 ">
      <input
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="filterText"
        style="color: #4E4E59;"
      >
      <router-link to="/cliente/crearCliente">
        <div class="svg-d">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="input-icon password"
            viewBox="0 0 20 20"
            fill="currentColor"

          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
      </router-link>
      <label for="floatingInput">Nombre cliente</label>
    </div>
    <div class="container-cards">
      <div
        v-for="(cliente, idx) in filteredCliente" :key='idx'
      >
        <card
          :nombre='cliente.nombre'
          :rfc='cliente.rfc'
          :ciudad='cliente.ciudad'
          :telefono='cliente.telefono'
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import card  from '@/components/card.vue'
import { ref, computed, onMounted } from 'vue';

  const filterText = ref('');

  const clientes = ref([
    {
      nombre: 'FRUTERIA WELTON TIENE NOMBRE MUY LARGO S.A. DE C.V.',
      rfc: 'COLJ957493EF8',
      ciudad: ' SAN LUIS R.C, SONORA',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'OTRO CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    },
    {
      nombre: 'FRUTERIA WELTON 3',
      rfc: 'COLJ957493EF8',
      ciudad: ' SAN LUIS R.C, SONORA',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'OTRO CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    },
    {
      nombre: 'FRUTERIA WELTON 4',
      rfc: 'COLJ957493EF8',
      ciudad: ' SAN LUIS R.C, SONORA',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    }
    ,
    {
      nombre: 'OTRO CLIENTE 2',
      rfc: 'COLJ957493EF8',
      ciudad: ' Zapopan, Jalisco',
      telefono: '653 161 3757',
    },
  ]);

  const filteredCliente = computed( () => {
    let filter = filterText.value
    if (!filter.length) return clientes.value
    return clientes.value.filter( cliente => 
      cliente.nombre.toLowerCase().includes(filter.toLowerCase())
    )
  });
</script>

<style lang="css" scoped>
  button {
    background-color: rgb(252, 193, 46);
    border: none;
    border-radius: 6px;
    padding: 6px;
    width: 5rem;
  }
  input {
    border-radius: 12px;
    font-weight: 500;
    color: rgb(78, 78, 78);

    box-sizing: border-box;
    padding: 15px 15px 15px 35px;
    width: 100%;
  }
  p {
    color: rgb(78, 78, 78);
  }
  .input-icon {
  color: rgb(80, 184, 212);
  position: absolute;
  width: 32px;
  height: 32px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  animation-name: opacidad;
  animation-duration: .7s;
}
.input-icon {
  left: unset;
  right: 12px;
  top: -25px;
}

@keyframes opacidad {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>