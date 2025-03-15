<script setup lang="ts">
import {useHead} from '@unhead/vue'
import Sidebar from './Sidebar.vue'

useHead({
  title: 'Remzi Cavdar - Software Engineer 🚀 | Hogeschool van Amsterdam 🎓 | HBO-ICT Software Engineering 💻',
  meta: [
    {
      name: 'description',
      content: 'Software Engineer 🚀 | Hogeschool van Amsterdam 🎓 | HBO-ICT Software Engineering 💻 Mijn naam is Remzi Cavdar en ik studeer HBO-ICT Software Engineering aan de Hogeschool van Amsterdam (HvA).'
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
      href: 'https://remzi.info'
    }
  ]
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1>Wie ben ik? <span class="emoji">🚀</span></h1>
          <p>
            Mijn naam is Remzi Cavdar en ik studeer HBO-ICT software engineering aan de Hogeschool van Amsterdam.
            Ik heb ervaring met het ontwikkelen van verschillende soorten websites, webshops en webapplicaties.
            Daarbij heb ik ook ervaring met Java, JavaFX en Spring Boot.
          </p>

          <h2>Achtergrond <span class="emoji">🤓</span></h2>
          <p>
            Mijn interesse in computers begon op de middelbare school, waar ik websites maakte in HTML, CSS en
            JavaScript. Destijds kon je nog niet veel met JavaScript en domineerde Microsofts Internet Explorer de markt
            met bijna 90% marktaandeel. Voor dynamische interactie was Adobe Flash nodig.
          </p>
          <p>
            Op het MBO leerde ik webapplicaties ontwikkelen met HTML, CSS, JavaScript, jQuery en PHP. jQuery was toen
            populair omdat verschillende browsers verschillende JavaScript API's ondersteunden. Ik gebruikte het een
            tijdlang actief.
          </p>
          <p>
            Als gamer bouwde ik in 2012 mijn eerste game-PC en zette later Linux-servers op om te testen en te leren.
            Sindsdien help ik kennissen, vrienden en familie met hun computerproblemen.
          </p>

          <h2>Kennis en werkervaring <span class="emoji">💼</span></h2>
          <p>
            Ik heb voor verschillende WordPress en webbureaus gewerkt en heb ervaring opgedaan met het ontwikkelen van
            verschillende soorten websites, webshops en webapplicaties. Daarbij deed ik vaak ook systeembeheer erbij en
            had ik vaak contact met andere hostingbedrijven en klanten. Het afstemmen en beheren van hosting van klanten
            hoorde daar ook bij hosting.
          </p>
          <p>
            Vorige schooljaar heb ik een applicatie in Java geprogrammeerd voor een practicumopdracht waarbij we JavaFX
            gebruikten.
            Dat project toont mijn capaciteit om complexe applicaties te kunnen ontwikkelen.
            Graag vertel ik meer over dit project om mijn technische vaardigheden te illustreren.
          </p>
          <p>Mijn technische kennis strekt zich uit over meerdere programmeertalen, frameworks en databases,
            waaronder:</p>
          <ul>
            <li>Java, JavaFX en Spring Boot</li>
            <li>HTML/CSS en JavaScript</li>
            <li>React, Vue.js, Vite en Redis</li>
            <li>Node.js en Composer</li>
            <li>PHP en WordPress</li>
            <li>C# en .NET</li>
            <li>MySQL, MariaDB en MongoDB</li>
            <li>Bash en Powershell</li>
            <li>JSON, RESTful API's, XML, JSON, TOML, YAML</li>
            <li>Apache en Nginx</li>
            <li>Docker</li>
          </ul>

          <h2>Hobby's <span class="emoji">📌</span></h2>
          <p>
            In mijn vrije tijd codeer ik vaak en probeer ik nieuwe programmeertalen uit, alles wat ik codeer zet ik op
            mijn <a href="https://github.com/Remzi1993" target="_blank">GitHub</a> profiel. Ook doe ik soms bijdragen
            aan open source projecten.
            Ik ben ook geïnteresseerd in technologie en wetenschap en volg ik graag het nieuws over nieuwe technologieën
            en ontwikkelingen.
          </p>

          <h2>Ambitie <span class="emoji">🔥</span></h2>
          <p>
            Mijn ambitie reikt naar het verder ontwikkelen binnen Java, aangezien de veelzijdigheid en industriële vraag
            groot zijn. Het snel eigen maken van nieuwe technologieën is een van mijn sterke punten.
          </p>

          <h2>Contact opnemen <span class="emoji">📩</span></h2>
          <p>
            Ik ben op zoek naar een bijbaan naast mijn opleiding HBO-ICT Software Engineering.
          </p>
          <p>
            Mocht u op zoek zijn naar een leergierige stagiair die bereid is hard te werken, dan sta ik open voor een
            gesprek om de mogelijkheden te verkennen.
          </p>
          <p>
            <strong><i class="bi bi-phone"></i> </strong> <a href="tel:+31611719929">06 117 199 29</a><br>
            <strong><i class="bi bi-envelope-at"></i> </strong> <a href="mailto:ict@remzi.info">ict@remzi.info</a><br>
          </p>
        </div>
        <sidebar></sidebar>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
svg {
  max-width: 24px;
}

@media (max-width: 992px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-lg-3 {
    padding-bottom: 25px;
  }
}
</style>