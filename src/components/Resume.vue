<template>
  <main class="py-4">
    <div class="container">
      <div class="row d-print-none">
        <div class="col pb-4">
          <h1>Mijn cv <i class="bi bi-file-earmark-person-fill"></i></h1>
          <p><a class="btn btn-primary" href="https://storage.remzi.info/assets/docs/Curriculum-vitae-R.Cavdar.pdf"
                role="button" download="Curriculum-vitae–R.Cavdar.pdf">Liever een PDF?</a></p>
        </div>
      </div>

      <div class="d-none d-print-block pt-5"></div>

      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4" id="profile-image">
              <img src="../assets/img/profile-photo.jpg" alt="Profile image">
            </div>
            <div class="col-md-8">
              <h2 class="mt-4 mt-md-0">Remzi Cavdar</h2>
              <h3 class="yellow subtitle">Software Engineer</h3>
              <p id="info">
                <strong><i class="bi bi-calendar-date"></i> Geboortedatum:</strong> 11-06-1993<br>
                <strong><i class="bi bi-house"></i> Woonplaats:</strong> Amsterdam<br>
                <strong><i class="bi bi-phone"></i> Mobiel:</strong> <a href="tel:+31611719929">06 117 199 29</a><br>
                <strong><i class="bi bi-envelope-at"></i> E-mail:</strong> <a
                  href="mailto:ict@remzi.info">ict@remzi.info</a><br>
                <strong><i class="bi bi-linkedin"></i> LinkedIn:</strong> <a
                  href="https://www.linkedin.com/in/remzicavdar" target="_blank">linkedin.com/in/remzicavdar</a><br>
                <strong><i class="bi bi-github"></i> GitHub:</strong> <a href="https://github.com/Remzi1993"
                                                                         target="_blank">github.com/Remzi1993</a>
              </p>
            </div>
          </div>

          <h2 class="red mt-3 mt-lg-4">Opleiding</h2>
          <h3>2021 - HEDEN - Hogeschool van Amsterdam</h3>
          <h4 class="yellow subtitle">HBO-ICT Software Engineering</h4>
          <h3>2011 - 2014 - ROC TOP</h3>
          <h4 class="yellow subtitle">MBO niveau 4 / Applicatie- en mediaontwikkeling</h4>

          <h2 class="red mt-3 mt-lg-4">Skills</h2>
          <div class="rating">
            <span>Nederlands</span>
            <div class="stars">
              <input type="radio" id="skill-1-star5" name="skill-1" disabled>
              <label for="skill-1-star5"></label>
              <input type="radio" id="skill-1-star4" name="skill-1" disabled checked>
              <label for="skill-1-star4"></label>
              <input type="radio" id="skill-1-star3" name="skill-1" disabled>
              <label for="skill-1-star3"></label>
              <input type="radio" id="skill-1-star2" name="skill-1" disabled>
              <label for="skill-1-star2"></label>
              <input type="radio" id="skill-1-star1" name="skill-1" disabled>
              <label for="skill-1-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>Engels</span>
            <div class="stars">
              <input type="radio" id="skill-2-star5" name="skill-2" disabled>
              <label for="skill-2-star5"></label>
              <input type="radio" id="skill-2-star4" name="skill-2" disabled>
              <label for="skill-2-star4"></label>
              <input type="radio" id="skill-2-star3" name="skill-2" disabled checked>
              <label for="skill-2-star3"></label>
              <input type="radio" id="skill-2-star2" name="skill-2" disabled>
              <label for="skill-2-star2"></label>
              <input type="radio" id="skill-2-star1" name="skill-2" disabled>
              <label for="skill-2-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>Full stack web development</span>
            <div class="stars">
              <input type="radio" id="skill-3-star5" name="skill-3" disabled>
              <label for="skill-3-star5"></label>
              <input type="radio" id="skill-3-star4" name="skill-3" disabled checked>
              <label for="skill-3-star4"></label>
              <input type="radio" id="skill-3-star3" name="skill-3" disabled>
              <label for="skill-3-star3"></label>
              <input type="radio" id="skill-3-star2" name="skill-3" disabled>
              <label for="skill-3-star2"></label>
              <input type="radio" id="skill-3-star1" name="skill-3" disabled>
              <label for="skill-3-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>Java</span>
            <div class="stars">
              <input type="radio" id="skill-4-star5" name="skill-4" disabled>
              <label for="skill-4-star5"></label>
              <input type="radio" id="skill-4-star4" name="skill-4" disabled>
              <label for="skill-4-star4"></label>
              <input type="radio" id="skill-4-star3" name="skill-4" disabled checked>
              <label for="skill-4-star3"></label>
              <input type="radio" id="skill-4-star2" name="skill-4" disabled>
              <label for="skill-4-star2"></label>
              <input type="radio" id="skill-4-star1" name="skill-4" disabled>
              <label for="skill-4-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>React & Vue.js</span>
            <div class="stars">
              <input type="radio" id="skill-5-star5" name="skill-5" disabled>
              <label for="skill-5-star5"></label>
              <input type="radio" id="skill-5-star4" name="skill-5" disabled>
              <label for="skill-5-star4"></label>
              <input type="radio" id="skill-5-star3" name="skill-5" disabled checked>
              <label for="skill-5-star3"></label>
              <input type="radio" id="skill-5-star2" name="skill-5" disabled>
              <label for="skill-5-star2"></label>
              <input type="radio" id="skill-5-star1" name="skill-5" disabled>
              <label for="skill-5-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>MySQL</span>
            <div class="stars">
              <input type="radio" id="skill-6-star5" name="skill-6" disabled>
              <label for="skill-6-star5"></label>
              <input type="radio" id="skill-6-star4" name="skill-6" disabled>
              <label for="skill-6-star4"></label>
              <input type="radio" id="skill-6-star3" name="skill-6" disabled checked>
              <label for="skill-6-star3"></label>
              <input type="radio" id="skill-6-star2" name="skill-6" disabled>
              <label for="skill-6-star2"></label>
              <input type="radio" id="skill-6-star1" name="skill-6" disabled>
              <label for="skill-6-star1"></label>
            </div>
          </div>

          <div class="rating">
            <span>PHP & WordPress</span>
            <div class="stars">
              <input type="radio" id="skill-7-star5" name="skill-7" disabled>
              <label for="skill-7-star5"></label>
              <input type="radio" id="skill-7-star4" name="skill-7" disabled>
              <label for="skill-7-star4"></label>
              <input type="radio" id="skill-7-star3" name="skill-7" disabled checked>
              <label for="skill-7-star3"></label>
              <input type="radio" id="skill-7-star2" name="skill-7" disabled>
              <label for="skill-7-star2"></label>
              <input type="radio" id="skill-7-star1" name="skill-7" disabled>
              <label for="skill-7-star1"></label>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="red mt-3 mt-md-0">Werkervaring</h2>
          <h3>2019 - Lead Me</h3>
          <h4 class="yellow subtitle">WordPress Developer / Systeembeheerder</h4>
          <ul>
            <li>Beheren van hosting (backups, optimaliseren en kwaliteit bewaken)</li>
            <li>Onderhouden van WordPress websites</li>
            <li>Ontwikkelen van oplossingen voor WordPress websites</li>
            <li>Testen en bugs oplossen</li>
          </ul>
          <h3>2018 - 2019 - PREMIUMS / Advanza</h3>
          <h4 class="yellow subtitle">Web Developer</h4>
          <ul>
            <li>Ontwikkelen en onderhouden van WordPress plugins en thema's</li>
            <li>Ontwikkelen en onderhouden van online formulieren</li>
            <li>Ontwikkelen, bijwerken en onderhouden van websites</li>
            <li>Oplossen van verschillende IT problemen</li>
          </ul>
          <h3>2014 - 2015 - 10Forward</h3>
          <h4 class="yellow subtitle">Web Developer</h4>
          <ul>
            <li>Ontwikkelen, bijwerken en onderhouden van websites & webshops</li>
          </ul>
          <h3>2012 - 2015 - Remzi.info</h3>
          <h4 class="yellow subtitle">Freelance Full Stack Web Developer & advies</h4>
          <ul>
            <li>Ontwikkelen, bijwerken en onderhouden van websites</li>
            <li>Verzorgen van webhosting voor cliënten</li>
            <li>Adviseren over verschillende ICT-vraagstukken.</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'Resume',
  head() {
    return {
      title: 'Curriculum vitae - Remzi Cavdar',
      meta: [
        {
          name: 'description',
          content: 'Curriculum vitae van Remzi Cavdar'
        },
        {
          name: 'author',
          content: 'Remzi Cavdar'
        },
      ],
      link: [
        {
          name: 'canonical',
          content: 'https://remzi.info/cv'
        }
      ]
    }
  }
}
</script>

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
  #profile-image {
    display: flex;
    justify-content: center;
  }

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