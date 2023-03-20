<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn naam is Remzi Cavdar</h1>
          <p>
            Ik studeer HBO-ICT Software Engineering aan de Hogeschool van Amsterdam (HvA).
            Mijn website is nog kaal, maar ik ben bezig om deze aan te vullen met mijn projecten <picture>
            <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.webp" type="image/webp">
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif" alt="😆" width="32" height="32">
          </picture></p>
        </div>
        <sidebar></sidebar>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "./Sidebar.vue";
export default {
  name: "Home",
  components: {Sidebar}
}
</script>

<style lang="scss" scoped>
</style>