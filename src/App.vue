<script setup lang="ts">
import Topbar from './components/Topbar.vue'
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <topbar></topbar>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-comp></footer-comp>
</template>