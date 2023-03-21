<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-9">
          <h1>Mijn Portfolio <vue3-lottie :animationData="RocketJSON" :height="40" :width="40"></vue3-lottie></h1>
          <p>
            Ik heb veel projecten op GitHub staan. Alleen kan ik niet alle projecten en practica online zetten.
            Op aanvraag kan ik uiteraard wel de code laten zien en het project versturen.
            Hieronder zal ik mijn portfolio laten zien van projecten die ik wel online mag zetten.
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">Literatuuronderzoek</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">De hypothese dat dwangmatig gebruik van sociale media tot negatieve consequenties kan
          leiden bij jongeren (11 tot 18 jaar), wordt in dit literatuuronderzoek bevestigd. Men kan
          stellen dat dwangmatig sociale mediagebruik jongeren negatief beïnvloedt, dat het tot
          slechtere schoolprestaties en concentratieproblemen leidt en dat het bestaande klachten
          zelfs versterken, zoals depressie, impulsiviteit en hyperactiviteit (ADHD).
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/assets/Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf"
             role="button" download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf">Download onderzoeksverslag</a>

          <a class="btn btn-outline-secondary btn-lg px-4" href="https://doi.org/10.5281/zenodo.7647322"
             role="button" target="_blank">DOI: 10.5281/zenodo.7647322</a>
        </div>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
          <a href="/assets/Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf"
             download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf">
            <img src="../assets/img/cover.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image"
                 width="700" height="500" loading="lazy">
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import RocketJSON from '../assets/img/rocket.json'
import LaughingJSON from '../assets/img/laughing.json'

export default {
  name: 'Portfolio',
  components: {Vue3Lottie},
  data() {
    return {
      RocketJSON,
      LaughingJSON
    }
  },
}
</script>

<style lang="scss" scoped>
</style>