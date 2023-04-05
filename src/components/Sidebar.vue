<template>
  <div class="col-xl-4">
    <h2>Mijn portfolio</h2>
    <p>
      <router-link class="btn btn-primary" to="/portfolio">Portfolio</router-link>
    </p>
    <p>
      <a class="btn btn-primary" href="https://assets.remzi.info/Curriculum-vitae-R.Cavdar.pdf"
         role="button" download="Curriculum-vitae–R.Cavdar.pdf">Download cv</a>
    </p>

    <h3>Contact</h3>
    <strong><i class="bi bi-phone"></i> Mobiel:</strong> <a href="tel:+31611719929">06 117 199 29</a><br>
    <strong><i class="bi bi-envelope-at"></i> E-mail:</strong> <a href="mailto:ict@remzi.info">ict@remzi.info</a><br>
    <strong><i class="bi bi-github"></i> GitHub:</strong> <a href="https://github.com/Remzi1993"
                                                             target="_blank">github.com/Remzi1993</a><br>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar"
}
</script>