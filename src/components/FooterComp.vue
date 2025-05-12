<template>
  <footer class="bg-body-tertiary text-center py-3 d-print-none">
    <div class="container">
      <p class="mb-0">
        Gemaakt in
        <span id="vue-js-logo">
          <svg class="logo" viewBox="0 0 128 128" width="20" height="20" data-v-c0161dce="">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                  data-v-c0161dce=""></path>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-c0161dce=""></path>
          </svg>
        </span>
        en de code is te vinden op <a href="https://github.com/Remzi1993/remzi.info" target="_blank" aria-label="GitHub profile of Remzi Cavdar"><i
          class="bi bi-github"></i></a>

        en ik maak gebruik van:
        <a href="https://dashboard.simpleanalytics.com/remzi.info?utm_source=remzi.info&utm_content=badge"
           referrerpolicy="origin" target="_blank" aria-label="See public Simple Analytics dashboard">
          <picture>
            <source srcset="https://simpleanalyticsbadges.com/remzi.info?mode=dark"
                    media="(prefers-color-scheme: dark)"/>
            <img src="https://simpleanalyticsbadges.com/remzi.info?mode=light" loading="lazy"
                 referrerpolicy="no-referrer" crossorigin="anonymous" alt="Logo of Simple Analytics"></picture>
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  z-index: 2;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: 1.5rem;
}

footer picture {
  margin-left: 5px;
}

footer img {
  max-width: 150px;
}

@media (max-width: 575.98px) {
  footer {
    font-size: 12px;
  }
}
</style>