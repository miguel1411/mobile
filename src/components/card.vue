<template>
  <div class="card shadow mb-4" style="width: 100%">
      <div class="card-body">
        <div class="body-header">
          <img src="data:image/png;base64,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" class="rounded me-2" alt="...">
          <div class="icons">
            <a :href="`tel:${informacionCliente.telefono}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="body-info p-2">
          <router-link to="/cliente/47">
            <h5 class="card-title m-0">{{ informacionCliente.nombre }}</h5>
          </router-link>
          <!-- <p class="card-text m-0">{{ informacionCliente.rfc}}</p> -->
          <strong class="card-text">
              {{ informacionCliente.telefono}}
            </strong>
          <p class="card-text">{{ informacionCliente.ciudad}}</p>
        </div>
      </div>
      <div class="p-2">
        <button class="btn btn-primary btn-sm p-2">Ver CFDI's</button>
      </div>
  </div>
</template>

<script setup>

const informacionCliente = defineProps({
  nombre: {
    type: String,
    default: ''
  },
  rfc: {
    type: String,
    default: ''
  },
  telefono: {
    type: String,
    default: ''
  },
  ciudad: {
    type: String,
    default: ''
  },
})
</script>

<style lang="css" scoped>
.card {
  margin-top: 20px;
  border-radius: 12px;
  border-color: rgb(243, 243, 243);
}
.body-header {
  display: flex;
  justify-content: space-between;
  margin-top: -5px;
  min-height: 100%;
}
button {
  width: 100%;
  background: linear-gradient(90deg, rgba(12, 163, 193, 0.884) 0%, rgba(49, 175, 203, 0.911) 35%, rgba(93,193,214,1) 100%);
  border: none;
  border-radius: 6px;
  padding: 6px;
  color: rgb(253, 253, 253);
  font-weight: 500;
}
a {
  text-decoration: none;
  color: rgb(78, 78, 78);
}
img {
  height: 30px;
}
svg {
  margin: 5px;
  color: rgb(96, 189, 215);
  animation-name: opacidad;
  animation-duration: .7s;
}
h5 {
  font-weight: 400;
}

@keyframes opacidad {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>