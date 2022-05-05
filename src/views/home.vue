<template>
  <h1>Bienvenido, userName</h1>
  <div class="container-opciones d-flex flex-row bd-highlight mb-3 justify-content-center flex-wrap gap-2 mt-4">
    <div class="opciones p-2 bd-highlight">
      <span>Disponibles</span>
      <div class="cantidad">
        <span>45</span>
      </div>
    </div>
    <div class="opciones p-2 bd-highlight">
      <span>CFDI emitidos</span>
      <div class="cantidad">
        <span>45</span>
      </div>
    </div>
    <router-link to="/clientes">
      <div class="opciones p-2 bd-highlight">
        <span>Clientes</span>
        <div class="cantidad">
          <span>45</span>
        </div>
      </div>
    </router-link>
    <div class="opciones p-2 bd-highlight">
      <span>Timbres</span>
      <div class="cantidad">
        <span>45</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  h1 {
    text-align: center;
    margin-top: 60px;
  }

  .opciones {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(80, 184, 212);
    color: #fff;
    height: 120px;
    width: 120px;
    border-radius: 12px;
  }
  .cantidad {
    display: inline;
    border-radius: 50%;
  }
  a {
    text-decoration: none;
  }
  span {
    font-weight: 600;
  }
</style>