<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn naam is Remzi Cavdar</h1>
          <p>
            Ik studeer HBO-ICT Software Engineering aan de Hogeschool van Amsterdam (HvA).
            Mijn website is nog kaal, maar ik ben bezig om deze aan te vullen met mijn projecten
            <img src="../assets/img/emoji/laughing.webp" alt="😆" width="24" height="24">
          </p>
          <h2>Ik doe veel open source <img src="../assets/img/emoji/rocket.webp" alt="🚀" width="32" height="32">
          </h2>
          <p>Ik vind het leuk om open source projecten te maken en bij te dragen aan bestaande projecten.
            Open source is voor mij een manier om mijn kennis te delen met anderen en om te leren van anderen.
            En het is ook een hobby waar je ook veel van leert.
          </p>
          <p>
            Deze website is open source en je kan de code vinden op: <a href="https://github.com/Remzi1993/remzi.info"
                                                                        target="_blank">github.com/Remzi1993/remzi.info</a>
          </p>
          <p class="mb-4">
            <a href="https://app.netlify.com/sites/remzi/deploys"
               target="_blank">
              <img src="https://api.netlify.com/api/v1/badges/87c06cec-b452-4239-ba57-5cc0a1277c2b/deploy-status"
                   alt="Build status of website">
            </a>
          </p>
          <h3>
            <img src="../assets/img/emoji/red-heart.webp" alt="❤" width="32" height="32">
            Vue.js + React.js
            <img src="../assets/img/emoji/100.webp" alt="💯" width="32" height="32">
          </h3>
          <p>
            Ik ben nu bezig met Vue.js en deze website heb ik ook in Vue.js gemaakt. In het verleden heb ik ook
            veel React.js gebruikt. Beide frameworks zijn erg leuk om mee te werken en hebben ook veel overeenkomsten.
          </p>
          <p>
            <span id="vue-js-logo">
              <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-c0161dce="">
              <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                    data-v-c0161dce=""></path>
              <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-c0161dce=""></path>
            </svg>
            </span>
            <span id="react-logo">
              <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   class="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out">
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            </span>
          </p>
        </div>
        <sidebar></sidebar>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from '@/Sidebar.vue'

export default {
  name: 'Home',
  components: {Sidebar}
}
</script>

<style lang="scss" scoped>
svg {
  max-width: 24px;
}
</style>