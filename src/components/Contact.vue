<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Mijn visitekaartje <i class="bi bi-person-lines-fill"></i></h1>
          <p>
            <strong><i class="bi bi-person"></i> Naam:</strong> Remzi Cavdar<br>
            <strong><i class="bi bi-house"></i> Woonplaats:</strong> Amsterdam<br>
            <strong><i class="bi bi-telephone"></i> Telefoon:</strong> <a href="tel:+31611719929">06 117 199 29</a><br>
            <strong><i class="bi bi-envelope-at"></i> E-mail:</strong> <a
              href="mailto:ict@remzi.info">ict@remzi.info</a><br>
            <strong><i class="bi bi-envelope-at"></i> E-mail HvA:</strong> <a
              href="mailto:remzi.cavdar@hva.nl">remzi.cavdar@hva.nl</a><br>
          </p>
          <h2>Zakelijk en portfolio</h2>
          <p>
            <strong><i class="bi bi-linkedin"></i> LinkedIn:</strong> <a href="https://www.linkedin.com/in/remzicavdar"
                                                                         target="_blank">linkedin.com/in/remzicavdar</a><br>
            <strong><i class="bi bi-github"></i> GitHub:</strong> <a href="https://github.com/Remzi1993"
                                                                     target="_blank">github.com/Remzi1993</a><br>
          </p>
          <h3>Sociale media</h3>
          <p>
            Ik ben alleen soms actief op Twitter en voor de rest doe ik niks meer met sociale media.<br>
            <strong><i class="bi bi-twitter"></i> Twitter:</strong> <a href="https://twitter.com/remzicavdar"
                                                                       target="_blank">@remzicavdar</a><br>
          </p>
        </div>
        <div class="col-xl-4">
          <h2>Mijn portfolio</h2>
          <p>
            <router-link class="btn btn-primary" to="/portfolio">Portfolio</router-link>
          </p>
          <p>
            <a class="btn btn-primary" href="/assets/Curriculum-vitae–R.Cavdar.pdf"
               role="button" download="Curriculum-vitae–R.Cavdar.pdf">Download cv</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
</style>