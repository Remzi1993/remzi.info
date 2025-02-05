<template>
  <div class="topbar fixed-top d-print-none">
    <div class="container d-flex justify-content-center align-items-center">
      <span>Op zoek naar een bijbaan vanaf 1 juli 2025</span>
      <router-link class="btn btn-sm btn-success" to="/portfolio">Check mijn portfolio</router-link>
    </div>
  </div>
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

@media (max-width: 575.98px) {
  .topbar .container span {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
}
</style>