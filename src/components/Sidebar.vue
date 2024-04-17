<template>
  <div class="col-lg-3 ms-auto">
    <h2>Mijn visitekaartje <i class="bi bi-person-lines-fill"></i></h2>
    <p>
      <strong><i class="bi bi-person"></i> Naam:</strong> Remzi Cavdar<br>
      <strong><i class="bi bi-house"></i> Woonplaats:</strong> Amsterdam<br>
      <strong><i class="bi bi-phone"></i> Mobiel:</strong> <a href="tel:+31611719929">06 117 199 29</a><br>
      <strong><i class="bi bi-envelope-at"></i> E-mail:</strong> <a
        href="mailto:ict@remzi.info">ict@remzi.info</a><br>
    </p>
    <h3>Hogeschool van Amsterdam</h3>
    <p>
      <strong><i class="bi bi-building"></i> Locatie:</strong> Wibauthuis (WBH)<br>
      <strong><i class="bi bi-envelope-at"></i> E-mail:</strong> <a
        href="mailto:remzi.cavdar@hva.nl">remzi.cavdar@hva.nl</a><br>
      <strong><i class="bi bi-mortarboard"></i> </strong> <a
        href="https://scholar.google.com/citations?user=14W7_vQAAAAJ"
        target="_blank" rel="noopener noreferrer">Google Scholar</a><br>
      <strong><i class="bi bi-mortarboard"></i> </strong> <a
        href="https://www.researchgate.net/profile/Remzi-Cavdar" target="_blank">ResearchGate</a>
    </p>
    <h3>Zakelijk en portfolio</h3>
    <p>
      <strong><i class="bi bi-linkedin"></i> LinkedIn:</strong> <a
        href="https://www.linkedin.com/in/remzicavdar" target="_blank">linkedin.com/in/remzicavdar</a><br>
      <strong><i class="bi bi-github"></i> GitHub:</strong> <a href="https://github.com/Remzi1993"
                                                               target="_blank">github.com/Remzi1993</a>
    </p>
    <p>
      <a class="btn btn-primary" href="https://storage.remzi.info/assets/docs/Curriculum-vitae-R.Cavdar.pdf" target="_blank"
         role="button" download="Curriculum-vitae–R.Cavdar.pdf">Download cv</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.7rem;
  }
  p {
    font-size: 1.4rem;
  }
}
</style>