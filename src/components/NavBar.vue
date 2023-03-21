<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/">
              <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Home</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/portfolio">
              <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Portfolio</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/cv">
              <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">CV</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/cv">CV</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/contact">
              <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Contact</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
.navbar-brand img {
  max-width: 30px;
}
</style>