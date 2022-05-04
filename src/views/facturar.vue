<template>
  <div class="container-factura">
    <h1>Facturación</h1>
    <div class="form-floating mb-4">
      <input type="search" class="form-control" id="floatingInput" placeholder="colj931123ef8">
      <label for="floatingInput">Buscar cliente por RFC</label>
    </div>
    <form action="" class="d-flex flex-column">
      <div class="primera-seccion d-flex gap-1">
        <div class="form-floating mb-1">
          <input type="text" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">RFC</label>
        </div>
        <div class="form-floating mb-1">
          <input type="number" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">C.P</label>
        </div>
      </div>
      <div class="form-floating mb-1">
        <input type="email" class="form-control" id="floatingInput" placeholder="colj931123ef8">
        <label for="floatingInput">E-mail</label>
      </div>
      <div class="form-floating mb-1">
        <input type="email" class="form-control" id="floatingInput" placeholder="colj931123ef8">
        <label for="floatingInput">Descripción del bien o servicio</label>
      </div>
      <div class="primera-seccion d-flex gap-1">
        <div class="form-floating mb-1">
          <input type="text" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">Clave Sat</label>
        </div>
        <div class="form-floating mb-1">
          <input type="number" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">Cantidad</label>
        </div>
      </div>
      <div class="primera-seccion d-flex gap-1 mt-2">
        <div class="form-floating mb-1">
          <input type="text" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">Unidad</label>
        </div>
        <div class="form-floating mb-1">
          <input type="number" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput">Precio</label>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped>
label{
  color: rgb(150, 150, 150);
  font-weight: 400;
}
input{
  color: rgb(105, 105, 105);
}
</style>