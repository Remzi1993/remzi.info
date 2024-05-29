<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center justify-content-center pt-xl-5">
            <div class="d-flex flex-column align-items-center text-center">
              <h1 class="display-1 fw-bold">Pagina niet gevonden <img src="../assets/img/emoji/dizzy-face.webp" alt="😵"
                                                                      width="64" height="64"></h1>
              <p class="fs-3"><span class="text-danger">Oepsie!</span> Pagina is nergens te bekennen
                <img src="../assets/img/emoji/grin-sweat.webp" alt="😅" width="32" height="32">
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
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<style lang="scss" scoped>
.lead {
  max-width: 650px;
}
</style>