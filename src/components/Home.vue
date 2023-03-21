<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn naam is Remzi Cavdar</h1>
          <p>
            Ik studeer HBO-ICT Software Engineering aan de Hogeschool van Amsterdam (HvA).
            Mijn website is nog kaal, maar ik ben bezig om deze aan te vullen met mijn projecten
            <picture>
              <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.webp" type="image/webp">
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif" alt="😆" width="32" height="32">
            </picture>
          </p>
          <h2>Ik doe veel open source
            <picture>
              <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp" type="image/webp">
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="32" height="32">
            </picture>
          </h2>
          <p>Ik vind het leuk om open source projecten te maken en bij te dragen aan bestaande projecten.
            Open source is voor mij een manier om mijn kennis te delen met anderen en om te leren van anderen.
            En het is ook een hobby waar je ook veel van leert.
          </p>
          <p>
            Deze website is open source en je kan de code vinden op: <a href="https://github.com/Remzi1993/remzi-info"
                                                                        target="_blank">github.com/Remzi1993/remzi-info</a>
          </p>
          <p>
            <a href="https://app.netlify.com/sites/remzi/deploys"
               target="_blank">
              <img src="https://api.netlify.com/api/v1/badges/87c06cec-b452-4239-ba57-5cc0a1277c2b/deploy-status"
                   alt="Build status of website">
            </a>
          </p>
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