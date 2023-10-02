<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center justify-content-center pt-xl-5">
            <div class="d-flex flex-column align-items-center text-center">
              <h1 class="display-1 fw-bold">Pagina niet gevonden
                <picture>
                  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f635_200d_1f4ab/512.webp" type="image/webp">
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f635_200d_1f4ab/512.gif" alt="😵" width="32" height="32">
                </picture>
              </h1>
              <p class="fs-3"><span class="text-danger">Oepsie!</span> Pagina is nergens te bekennen
                <picture>
                  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f605/512.webp" type="image/webp">
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f605/512.gif" alt="😅" width="32" height="32">
                </picture>
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
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.lead {
  max-width: 650px;
}
</style>