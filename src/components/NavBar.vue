<template>
  <div class="topbar fixed-top d-print-none">
    <div class="container d-flex justify-content-center align-items-center">
      <span>Op zoek naar een ICT meeloopstage</span>
      <a href="/portfolio" class="btn btn-sm btn-success">Check mijn portfolio</a>
    </div>
  </div>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-body-tertiary d-print-none">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="https://storage.remzi.info/assets/images/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
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
        <div class="d-flex">
          <div>Contact opnemen:</div>
          <div><i class="bi bi-envelope-at"></i> <a href="mailto:ict@remzi.info">ict@remzi.info</a></div>
          <div><i class="bi bi-phone"></i> <a href="tel:+31611719929">06 117 199 29</a></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Dropdown, Collapse} from 'bootstrap'

export default defineComponent({
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
    const menuToggle = document.querySelector('#navbarCollapse')
    if (menuToggle) {
      // @ts-ignore
      const bsCollapse = new Collapse(menuToggle, {toggle: false}); // Initialize without toggling
      const navLinks = document.querySelectorAll('.navbar-brand, .nav-item:not(.dropdown), .dropdown-item');

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          // Check if the viewport width is less than or equal to 992px and if the menu is open
          // @ts-ignore
          if (window.innerWidth <= 992 && menuToggle.classList.contains('show')) {
            bsCollapse.hide();
          }
        });
      });
    } else {
      console.error('Element #navbarCollapse not found');
    }
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
})
</script>

<style lang="scss" scoped>
.topbar {
  background-color: #B22222;
  color: white;
  padding: 5px 0;
  z-index: 2;
}

.topbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar .container > *:not(:last-child) {
  margin-right: 1rem;
}

.topbar .container span {
  font-size: 0.8rem;
  line-height: 0.8rem;
}

.topbar .container .btn {
  font-size: 0.8rem;
}

.navbar {
  top: 37px;
}

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

.navbar-collapse .d-flex > div:not(:last-child) {
  margin-right: 1rem;
}

@media (max-width: 767.98px) {
  .navbar-collapse > ul {
    border-width: 1px 0;
    border-style: dashed;
    border-color: white;
    margin: 20px 0 15px 0 !important;
    padding: 10px 0;
  }
  .navbar-collapse .d-flex {
    padding-bottom: 5px;
  }
}
</style>