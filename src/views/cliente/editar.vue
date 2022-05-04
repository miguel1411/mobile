<template>
  <h1>Editar cliente</h1>
      <div class="formularios">
      <form action="" class="form-floating d-flex flex-column">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">RFC</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Nombre / Razón social</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Nombre comercial</label>
        </div>
        <div class="form-floating mb-3">
          <select
          style="color: rgb(105, 105, 105);"
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Ejemplo de seleccón</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Regímen fiscal</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="6531613757">
          <label for="floatingInput">Teléfono</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Correo electrónico <span>(separar con coma para varios)</span></label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="AV.GUAFALUPE VICTORIA Y 17">
          <label for="floatingInput">Calle</label>
        </div>
        <div class="primera-seccion d-flex gap-3">
          <div class="form-floating mb-1">
            <input type="number" class="form-control" id="floatingInput" placeholder="colj931123ef8">
            <label for="floatingInput">Núm. Ext</label>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="colj931123ef8">
            <label for="floatingInput">Núm. Int</label>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="colj931123ef8">
          <label for="floatingInput"> <span>Municipio o Delegación (en caso de Cd. de México)</span></label>
        </div>
        <div class="primera-seccion d-flex gap-3">
          <div class="form-floating mb-1">
            <input type="text" class="form-control" id="floatingInput" placeholder="colj931123ef8">
            <label for="floatingInput">Estado</label>
          </div>
          <div class="form-floating mb-3">
            <input type="search" class="form-control" id="floatingInput" placeholder="colj931123ef8">
            <label for="floatingInput">País</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-sm p-2"> Guardar </button>
      </form>
    </div>
</template>

<style lang="css" scoped>
  h1 {
    margin: 15px 0 16px 0;
  }
  input {
    border-radius: 9px;
    padding: 5px;
    min-height: 5px;
    color: rgb(105, 105, 105);
  }
  label {
    color: rgb(127, 127, 127);
  }
  span {
    font-size: 12px;
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
</style>
