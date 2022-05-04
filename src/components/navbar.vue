<template>
  <div class="container-navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link to="/">
          <img
            src="https://demo.factura123.mx/img/_logo-f123.png"
            alt="factura123Logo"
            data-bs-toggle="collapse"
          >
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <a class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/facturar" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Facturar
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clientes" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Clientes
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Productos
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cfdi" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  CFDI'S
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pagos" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Pagos
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cotizacion" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Cotizaciones
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/configuracion" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>
                  <span>Configuracion</span>
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/salir" >
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  class="nav-link"
                >
                  Salir
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
  .navbar {
    border-bottom: solid 1px;
    border-color: rgb(226, 226, 226);
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    background-color: #fff;
  }
  span {
    display: inline-block;
    margin-left: 7px;
  }
</style>