<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="https://storage.remzi.info/assets/images/logo.png" alt="Logo">
      </router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>


      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cv">CV</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {Dropdown, Collapse} from 'bootstrap'

export default {
  name: 'NavBar',
  data() {
    return {
      isDropdownActive: false
    };
  },
  watch: {
    '$route': {
      immediate: true,
      handler: function (to) {
        const dropdownUrlRoutePattern = /^\/sublinks\//; // This matches any path that starts with '/sublinks/'
        this.isDropdownActive = dropdownUrlRoutePattern.test(to.path);
      }
    }
  },
  created() {
    // Close the dropdown menu when route changes
    // @ts-ignore
    this.unwatchRouter = this.$router.afterEach(() => {
      this.closeDropdown();
    });
  },
  beforeUnmount() {
    // Cleanup the router watch
    // @ts-ignore
    if (this.unwatchRouter) {
      // @ts-ignore
      this.unwatchRouter();
    }
  },
  mounted() {
    const menuToggle = document.querySelector('#navbarSupportedContent')
    // @ts-ignore
    const bsCollapse = new Collapse(menuToggle, {toggle: false}) // Initialize without toggling
    const navLinks = document.querySelectorAll('.navbar-brand, .nav-item:not(.dropdown), .dropdown-item');

    navLinks.forEach(links => {
      links.addEventListener('click', () => {
        // Check if the viewport width is less than or equal to 992px and if the menu is open
        // @ts-ignore
        if (window.innerWidth <= 992 && menuToggle.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  },
  methods: {
    closeDropdown() {
      if (!this.$refs.dropdownMenu) {
        return;
      }
      // @ts-ignore
      const dropdownElement = this.$refs.dropdownMenu.querySelector('.dropdown-toggle');
      if (dropdownElement) {
        const bsDropdownInstance = new Dropdown(dropdownElement);
        bsDropdownInstance.hide();
      }
    }
  }
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