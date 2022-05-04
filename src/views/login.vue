<template>
  <div class="container-login d-flex flex-column justify-content-center">
    <img src="https://demo.factura123.mx/img/_logo-f123.png" alt="facturaLogo">
    <div class="formularios">
      <form action="" class="form-floating d-flex flex-column">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          >
          <label for="floatingInput">RFC</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          >
          <label for="floatingPassword">Contraseña</label>
        </div>
        <button type="button" class="btn btn-primary btn-sm p-2"> Iniciar Sesión </button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
  input {
    border-radius: 9px;
    padding: 5px;
    min-height: 5px;
    color: rgb(105, 105, 105);
  }
  label {
    color: rgb(150, 150, 150);
  }
  button {
    width: 100%;
    background-color: rgb(80, 184, 212);
    border: none;
    border-radius: 6px;
    padding: 6px;
    color: rgb(253, 253, 253);
    font-weight: 500;
  }
  img {
    align-self: center;
    height: 60px;
    margin-bottom: 45px;
  }
  h1{
    align-self: center;

  }
  .container-login {
    margin-top: 20%;
  }
</style>