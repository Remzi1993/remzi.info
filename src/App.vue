<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-comp></footer-comp>
</template>