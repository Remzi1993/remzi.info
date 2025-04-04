<script setup lang="ts">
import {shallowRef, onMounted, onBeforeUnmount, watch, nextTick} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {Dropdown, Collapse} from 'bootstrap';
import {useTemplateRef} from 'vue';

const isDropdownActive = shallowRef(false);
const dropdownMenu = useTemplateRef<HTMLElement | null>('dropdownMenu');
const bsCollapse = useTemplateRef<HTMLElement | null>('navbarCollapse');

const route = useRoute();
const router = useRouter();

// Close dropdown function
const closeDropdown = () => {
  if (!dropdownMenu.value) return;
  const dropdownElement = dropdownMenu.value.querySelector('.dropdown-toggle');
  if (dropdownElement) {
    const bsDropdownInstance = Dropdown.getOrCreateInstance(dropdownElement);
    bsDropdownInstance.hide();
  }
};

// Watch for route changes to determine dropdown visibility
watch(
    () => route.path,
    (to) => {
      const dropdownUrlRoutePattern = /^\/sublinks\//;
      isDropdownActive.value = dropdownUrlRoutePattern.test(to);
    },
    {immediate: true}
);

// Use afterEach hook for route navigation
const unwatchRouter = router.afterEach(() => {
  closeDropdown();
});

onMounted(async () => {
  await nextTick(); // Ensure DOM is fully updated

  const menuToggle = bsCollapse.value;

  if (menuToggle) {
    const bsCollapseInstance = Collapse.getOrCreateInstance(menuToggle, {toggle: false});

    const navLinks = document.querySelectorAll('.navbar-brand, .nav-item:not(.dropdown), .dropdown-item');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992 && menuToggle.classList.contains('show')) {
          bsCollapseInstance.hide();
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
  <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary d-print-none">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="https://storage.remzi.info/assets/images/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse" ref="navbarCollapse">
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