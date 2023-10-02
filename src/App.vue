<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>