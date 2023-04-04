<template>
  <main class="py-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Mijn cv <i class="bi bi-file-earmark-person-fill"></i></h1>
          <p>
            Zie hieronder voor mijn cv:
          </p>
          <p>
            <a class="btn btn-primary" href="/assets/Curriculum-vitae-R.Cavdar.pdf"
               role="button" download="Curriculum-vitae–R.Cavdar.pdf">Download cv</a>
          </p>
          <iframe src="https://drive.google.com/file/d/1CtoVZyNiREiyMsEooOieeZx_9M_UKPr2/preview" width="100%"
                  height="1000px" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "Resume"
}
</script>