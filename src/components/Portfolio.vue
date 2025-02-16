<script setup lang="ts">
import {useHead} from '@unhead/vue'

useHead({
  title: 'Portfolio - Remzi Cavdar',
  meta: [
    {
      name: 'description',
      content: 'Ik heb veel projecten op GitHub staan. Alleen kan ik niet alle projecten en practica online zetten van de HvA vanwege het feit dat andere studenten dezelfde practica doen. Op aanvraag kan ik uiteraard wel de code laten zien en het project versturen. Hieronder zal ik mijn portfolio laten zien van projecten die ik wel online mag zetten.'
    },
    {
      name: 'author',
      content: 'Remzi Cavdar'
    },
    {
      name: 'fediverse:creator',
      content: '@Remzi1993@mastodon.social'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://remzi.info/portfolio'
    }
  ]
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn Portfolio
            <img src="../assets/img/emoji/rocket.webp" alt="🚀" width="50" height="50">
          </h1>
          <p>
            Ik heb veel projecten op <a href="https://github.com/Remzi1993" target="_blank">GitHub</a> staan. Alleen kan
            ik niet alle projecten en practica online zetten van de HvA vanwege het feit dat andere studenten dezelfde
            practica doen.
            Op aanvraag kan ik uiteraard wel de code laten zien en het project versturen.
            Hieronder zal ik mijn portfolio laten zien van projecten die ik wel online mag zetten.
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 my-5 text-center border-bottom">
      <span class="badge text-bg-info">Literatuuronderzoek</span><span class="badge text-bg-info">Engels</span>
      <h2>The future is modular; how Framework Computer, Inc.<br> challenges tech ethics</h2>
      <h3 class="h5">An ethical analysis of Framework and their goal of repairability, upgradability,<br>
        sustainability, and their fight against e-waste and planned obsolescence.</h3>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">This report addresses the environmental impact of electronic waste and low EU recycling
          rates. It spotlights Framework's sustainable electronics, like the modular Framework Laptop 13 and 16,
          advocating for repairability and upgradability. The 'right to repair' movement's significance and the need for
          a shift towards sustainability are emphasized. It also touches on the role of open-source tech in ethical tech
          practices.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a class="btn btn-primary btn-lg px-4 me-sm-3"
             href="https://storage.remzi.info/assets/docs/The-future-is-modular-R.Cavdar-06-11-2023.pdf"
             download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf" target="_blank">Download report</a>

          <a class="btn btn-outline-secondary btn-lg px-4" href="https://doi.org/10.5281/zenodo.10159175"
             target="_blank">DOI: 10.5281/zenodo.10159175</a>
        </div>
      </div>
      <div class="overflow-hidden cover" style="max-height: 30vh;">
        <div class="container px-5">
          <a href="https://storage.remzi.info/assets/docs/The-future-is-modular-R.Cavdar-06-11-2023.pdf"
             download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf" target="_blank">
            <img src="../assets/img/cover2.png" class="img-fluid border rounded-3 mb-4 cover-image"
                 alt="Cover image of the research report" loading="lazy">
          </a>
        </div>
      </div>
    </div>

    <div class="px-4 my-5 text-center border-bottom">
      <span class="badge text-bg-info">Literatuuronderzoek</span><span class="badge text-bg-info">Nederlands</span>
      <h2 class="display-4 fw-bold">Het gebruik van sociale media onder jongeren;</h2>
      <h3>In hoeverre heeft het gebruik van sociale media negatieve consequenties bij jongeren?</h3>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">De hypothese dat dwangmatig gebruik van sociale media tot negatieve consequenties kan
          leiden bij jongeren (11 tot 18 jaar), wordt in dit literatuuronderzoek bevestigd. Men kan
          stellen dat dwangmatig sociale mediagebruik jongeren negatief beïnvloedt, dat het tot
          slechtere schoolprestaties en concentratieproblemen leidt en dat het bestaande klachten
          zelfs versterken, zoals depressie, impulsiviteit en hyperactiviteit (ADHD).
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a class="btn btn-primary btn-lg px-4 me-sm-3"
             href="https://storage.remzi.info/assets/docs/Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf"
             download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf" target="_blank">Download onderzoeksverslag</a>

          <a class="btn btn-outline-secondary btn-lg px-4" href="https://doi.org/10.5281/zenodo.7647322"
             target="_blank">DOI: 10.5281/zenodo.7647322</a>
        </div>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
          <a href="https://storage.remzi.info/assets/docs/Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf"
             download="Onderzoeksverslag-van-R.Cavdar-20-01-2023.pdf" target="_blank">
            <img src="../assets/img/cover.png" class="img-fluid border rounded-3 shadow-lg mb-4 cover-image"
                 alt="Cover image of the research report" loading="lazy">
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cover-image {
  width: 700px;
}

.cover img {
  box-shadow: inset 0 2px 0px #dcffa6, 0 2px 5px #000;
}

.badge {
  margin-right: 1rem;
}
</style>