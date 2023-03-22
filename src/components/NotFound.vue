<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center justify-content-center pt-xl-5">
            <div class="d-flex flex-column align-items-center text-center">
              <h1 class="display-1 fw-bold">Pagina niet gevonden
                <vue3-lottie :animationData="DizzyFaceJSON" :height="90" :width="90"></vue3-lottie>
              </h1>
              <p class="fs-3"><span class="text-danger">Oepsie!</span> Pagina is nergens te bekennen
                <vue3-lottie :animationData="GrinSweatJSON" :height="40" :width="40"></vue3-lottie>
              </p>
              <p class="lead d-flex justify-content-center">
                Mischien is het een tijdelijke storing, of is de pagina verplaatst. Altijd een goed idee om terug naar
                het begin te gaan.
              </p>
              <router-link class="btn btn-primary" to="/">Terug naar home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import DizzyFaceJSON from '../assets/img/dizzy-face.json'
import GrinSweatJSON from '../assets/img/grin-sweat.json'
import ZanyFaceJSON from '../assets/img/zany-face.json'

export default {
  name: 'NotFound',
  components: {Vue3Lottie},
  data() {
    return {
      DizzyFaceJSON,
      GrinSweatJSON,
      ZanyFaceJSON
    }
  },
}
</script>

<style lang="scss" scoped>
.lead {
  max-width: 650px;
}
</style>