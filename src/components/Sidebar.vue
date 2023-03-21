<template>
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
</template>

<script lang="ts">
export default {
  name: "Sidebar"
}
</script>