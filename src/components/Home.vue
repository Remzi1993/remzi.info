<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn naam is Remzi Cavdar</h1>
          <p>
            Ik studeer HBO-ICT Software Engineering aan de Hogeschool van Amsterdam (HvA).
            Mijn website is nog kaal, maar ik ben bezig om deze aan te vullen met mijn projecten
            <vue3-lottie :animationData="LaughingJSON" :height="32" :width="32"></vue3-lottie>
          </p>
          <h2>Ik doe veel open source
            <vue3-lottie :animationData="RocketJSON" :height="32" :width="32"></vue3-lottie>
          </h2>
          <p>Ik vind het leuk om open source projecten te maken en bij te dragen aan bestaande projecten.
            Open source is voor mij een manier om mijn kennis te delen met anderen en om te leren van anderen.
            En het is ook een hobby waar je ook veel van leert.
          </p>
          <p>
            Deze website is open source en je kan de code vinden op: <a href="https://github.com/Remzi1993/remzi-info"
                                                                        target="_blank">github.com/Remzi1993/remzi-info</a>
          </p>
          <p class="mb-4">
            <a href="https://app.netlify.com/sites/remzi/deploys"
               target="_blank">
              <img src="https://api.netlify.com/api/v1/badges/87c06cec-b452-4239-ba57-5cc0a1277c2b/deploy-status"
                   alt="Build status of website">
            </a>
          </p>
          <h3>
            <vue3-lottie :animationData="RedHeartJSON" :height="32" :width="32"></vue3-lottie>
            Vue.js + React.js
            <vue3-lottie :animationData="hundredJSON" :height="32" :width="32"></vue3-lottie>
          </h3>
          <p>
            Ik ben nu bezig met Vue.js en deze website heb ik ook in Vue.js gemaakt. In het verleden heb ik ook
            veel React.js gebruikt. Beide frameworks zijn erg leuk om mee te werken en hebben ook veel overeenkomsten.
          </p>
          <p>
            <vue3-lottie :animationData="VueJsIconJSON" :height="100" :width="100"></vue3-lottie>
            <vue3-lottie :animationData="ReactJsIconJSON" :height="100" :width="100"></vue3-lottie>
          </p>
        </div>
        <sidebar></sidebar>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from './Sidebar.vue'
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import RocketJSON from '../assets/emoji/rocket.json'
import LaughingJSON from '../assets/emoji/laughing.json'
import RedHeartJSON from '../assets/emoji/red-heart.json'
import VueJsIconJSON from '../assets/emoji/vuejs-icon.json'
import ReactJsIconJSON from '../assets/emoji/reactjs-icon.json'
import hundredJSON from '../assets/emoji/100.json'

export default {
  name: 'Home',
  components: {Vue3Lottie, Sidebar},
  data() {
    return {
      RocketJSON,
      LaughingJSON,
      RedHeartJSON,
      VueJsIconJSON,
      ReactJsIconJSON,
      hundredJSON
    }
  },
}
</script>

<style lang="scss" scoped>
</style>