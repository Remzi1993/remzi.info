<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <h1>Assets mapje</h1>
          <p>
            Zie hieronder assets mapje.
          </p>
          <ul>
            <li v-for="item in projectsList">
              <a href="#">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AssetsDirListing',
  computed: {
    projectsList() {
      return this.$site.pages.filter(page => page.path.includes('projectslist/'));
    }
  }
}
</script>

<style scoped>

</style>