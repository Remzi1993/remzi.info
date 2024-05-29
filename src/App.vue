<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-comp></footer-comp>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavBar from '@/NavBar.vue'
import FooterComp from '@/FooterComp.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FooterComp
  }
})
</script>