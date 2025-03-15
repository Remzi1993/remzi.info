<script setup lang="ts">
import {useHead} from '@unhead/vue';

useHead({
  title: 'Curriculum vitae - Remzi Cavdar - Software Engineer 🚀 | Hogeschool van Amsterdam 🎓 | HBO-ICT Software Engineering 💻',
  meta: [
    {
      name: 'description',
      content: 'Curriculum vitae van Remzi Cavdar - Software Engineer 🚀 | Hogeschool van Amsterdam 🎓 | HBO-ICT Software Engineering 💻'
    },
    {
      name: 'author',
      content: 'Remzi Cavdar'
    },
    {
      name: 'fediverse:creator',
      content: '@Remzi1993@mastodon.social'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://remzi.info/cv'
    }
  ]
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row d-print-none">
        <div class="col pb-4">
          <h1>Mijn cv <i class="bi bi-file-earmark-person-fill"></i></h1>
          <p>
            <a class="btn btn-primary" href="https://storage.remzi.info/assets/docs/Curriculum-vitae-R.Cavdar.pdf"
               role="button" download="Curriculum-vitae–R.Cavdar.pdf">Liever een PDF?</a>
          </p>
        </div>
      </div>

      <div class="d-none d-print-block pt-5"></div>

      <div class="row resume">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/img/profile-photo.jpg" alt="Profile image">
            </div>
            <div class="col-md-8">
              <h2 id="full-name" class="mt-4 mt-md-0">Remzi Cavdar</h2>
              <h3 class="subtitle">Software Engineer i.o.</h3>
              <p id="info">
                <strong>Geboortedatum:</strong> 11-06-1993<br>
                <strong>Woonplaats:</strong> Amsterdam<br>
                <strong>Mobiel:</strong> <a href="tel:+31611719929">06 117 199 29</a><br>
                <strong>E-mail:</strong> <a href="mailto:ict@remzi.info">ict@remzi.info</a><br>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/remzicavdar" target="_blank">linkedin.com/in/remzicavdar</a><br>
                <strong>GitHub:</strong> <a href="https://github.com/Remzi1993" target="_blank">github.com/Remzi1993</a>
              </p>
            </div>
          </div>
          <h2 class="mt-3 mt-lg-4">Profiel</h2>
          <p>
            Ik ben een enthousiaste en leergierige software engineer in opleiding. Ik ben altijd op zoek naar nieuwe
            uitdagingen en kansen om mijn vaardigheden te verbeteren.
            Analytisch en probleemoplossend denken zijn mijn sterke punten.
          </p>

          <h2 class="mt-3 mt-lg-4">Opleiding</h2>
          <h3>2021 - HEDEN - Hogeschool van Amsterdam</h3>
          <h4 class="subtitle">HBO-ICT Software Engineering</h4>
          <h3>2011 - 2014 - ROC TOP</h3>
          <h4 class="subtitle">MBO niveau 4 / Applicatie- en mediaontwikkeling</h4>

          <h2 class="mt-3 mt-lg-4">Skills</h2>
          <p>HTML/CSS | JavaScript | React | Redis | Vue.js | Vite | PHP | WordPress | Java | JavaFX | Spring Boot | JPA
            | Hibernate | RESTful API | TypeScript | Node.js | C# | .NET | JSON | XML | MySQL | MariaDB | MongoDB |
            Apache Maven | Apache server | DNS | Linux | Bash | Git | MVC | Agile/Scrum | SEO | Nederlands | Engels</p>

          <h2 class="mt-3 mt-lg-4">Extra</h2>
          <h3>2019 - Codaisseur</h3>
          <h4 class="subtitle">Full-stack web development</h4>
          <ul>
            <li>11 weken bootcamp</li>
          </ul>
          <h3>2011 - Stavoor</h3>
          <h4 class="subtitle">Certificaat Deelnemers en Medezeggenschap</h4>
          <h3>2008 - Worksite</h3>
          <h4 class="subtitle">Certificaat Sociale Vaardigheidstraining</h4>
        </div>
        <div class="col-md-6">
          <h2 class="mt-3 mt-md-0">Werkervaring</h2>
          <h3>2019 - Lead Me</h3>
          <h4 class="subtitle">WordPress Developer / Systeembeheerder</h4>
          <ul>
            <li>Beheren van hosting (backups, optimaliseren en kwaliteit bewaken)</li>
            <li>Onderhouden van WordPress websites</li>
            <li>Ontwikkelen van oplossingen voor WordPress websites</li>
            <li>Testen en bugs oplossen</li>
          </ul>
          <h3>2018 - 2019 - PREMIUMS / Advanza</h3>
          <h4 class="subtitle">Web Developer</h4>
          <ul>
            <li>Ontwikkelen en onderhouden van WordPress plugins en thema's</li>
            <li>Ontwikkelen en onderhouden van online formulieren</li>
            <li>Ontwikkelen, bijwerken en onderhouden van websites</li>
            <li>Oplossen van verschillende IT problemen</li>
          </ul>
          <h3>2014 - 2015 - 10Forward</h3>
          <h4 class="subtitle">Web Developer</h4>
          <ul>
            <li>Ontwikkelen, bijwerken en onderhouden van websites & webshops</li>
          </ul>
          <h3>2012 - 2015 - Remzi.info</h3>
          <h4 class="subtitle">Freelance Full Stack Web Developer & advies</h4>
          <ul>
            <li>Ontwikkelen, bijwerken en onderhouden van websites</li>
            <li>Verzorgen van webhosting voor cliënten</li>
            <li>Adviseren over verschillende ICT-vraagstukken.</li>
          </ul>

          <h2 class="mt-3 mt-lg-4">Hobby's</h2>
          <p>
            Allerlei bordspellen (Schaken, Dammen, Monopoly, Stratego, Risk, De
            Kolonisten van Catan) | Allerlei kaartspellen (Pesten, Koehandel, Uno,
            Poker) | Allerlei videogames (FIFA, GTA, Call of Duty, Far Cry, Total
            War, Sniper Elite, Age of Empires, Stronghold, Zombie Army, Red
            Dead Redemption, Assassin's Greed) | Allerlei films en series | Muziek
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#info {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1rem;
}

.subtitle {
  margin-top: -0.6rem;
}

ul, p, .rating, .subtitle {
  font-size: 1rem;
}

img {
  width: 100%;
}

@media (max-width: 575.98px) {
  img {
    margin-bottom: 1rem;
  }
}

@media (max-width: 767.98px) {
  img {
    width: 50%;
  }
}

@media (max-width: 991.98px) {
  h2 {
    font-size: 17px;
  }
  h3, h4 {
    font-size: 12px;
  }
  .subtitle {
    margin-top: -0.6rem;
  }
  ul, p, .rating, .subtitle {
    font-size: 11px;
  }
}
</style>