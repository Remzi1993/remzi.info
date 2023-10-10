<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="https://assets.remzi.info/img/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu-navbar"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="main-menu-navbar">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/">
              <span data-bs-toggle="collapse" data-bs-target="#main-menu-navbar">Home</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/portfolio">
              <span data-bs-toggle="collapse" data-bs-target="#main-menu-navbar">Portfolio</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-lg-none" to="/cv">
              <span data-bs-toggle="collapse" data-bs-target="#main-menu-navbar">CV</span>
            </router-link>
            <router-link class="nav-link d-none d-lg-block" to="/cv">CV</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.navbar-brand img {
  max-width: 30px;
}

#main-menu-navbar > ul > li > a.nav-link {
  --bs-nav-link-padding-y: 0;
}

#main-menu-navbar > ul > li > a.nav-link > span {
  display: block !important;
  padding: 0.5rem 0;
}
</style>