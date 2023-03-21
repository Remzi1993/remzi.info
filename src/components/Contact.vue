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
            <strong><i class="bi bi-envelope-at"></i> Email:</strong> <a href="mailto:ict@remzi.info">ict@remzi.info</a><br>
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
        <sidebar></sidebar>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "./Sidebar.vue";

export default {
  name: "Contact",
  components: {Sidebar}
}
</script>

<style lang="scss" scoped>
</style>