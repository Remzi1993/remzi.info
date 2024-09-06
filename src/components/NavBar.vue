<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {Dropdown, Collapse} from 'bootstrap';

const isDropdownActive = ref(false);
const dropdownMenu = ref<HTMLElement | null>(null);
const bsCollapse = ref<Collapse | null>(null);

const route = useRoute();
const router = useRouter();

const closeDropdown = () => {
  if (!dropdownMenu.value) return;
  const dropdownElement = dropdownMenu.value.querySelector('.dropdown-toggle');
  if (dropdownElement) {
    const bsDropdownInstance = new Dropdown(dropdownElement);
    bsDropdownInstance.hide();
  }
};

watch(
    () => route.path,
    (to) => {
      const dropdownUrlRoutePattern = /^\/sublinks\//;
      isDropdownActive.value = dropdownUrlRoutePattern.test(to);
    },
    {immediate: true}
);

const unwatchRouter = router.afterEach(() => {
  closeDropdown();
});

onMounted(() => {
  const menuToggle = document.querySelector('#navbarCollapse') as HTMLElement;
  if (menuToggle) {
    bsCollapse.value = new Collapse(menuToggle, {toggle: false});
    const navLinks = document.querySelectorAll('.navbar-brand, .nav-item:not(.dropdown), .dropdown-item');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992 && menuToggle.classList.contains('show')) {
          bsCollapse.value?.hide();
        }
      });
    });
  } else {
    console.error('Element #navbarCollapse not found');
  }
});

onBeforeUnmount(() => {
  if (unwatchRouter) unwatchRouter();
});
</script>

<template>
  <div class="topbar fixed-top d-print-none">
    <div class="container d-flex justify-content-center align-items-center">
      <span>Op zoek naar een bijbaan</span>
      <router-link class="btn btn-sm btn-success" to="/portfolio">Check mijn portfolio</router-link>
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

@media (max-width: 575.98px) {
  .topbar .container span {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
}
</style>