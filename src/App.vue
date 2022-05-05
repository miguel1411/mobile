<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "@/components/navbar.vue";
import fotter from "@/components/footter.vue";
</script>

<template>
  <navbar />
  <div class="container-app">
    <RouterView />
  </div>
  <fotter />
</template>

<style>
@import "@/assets/base.css";
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  color: rgb(78, 78, 78);
}

.container-app {
  padding: .9rem;
}

a {
  text-decoration: none;
}
</style>
