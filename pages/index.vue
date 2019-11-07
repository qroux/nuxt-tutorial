<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Juriste Codeur
      </h1>
      <h2 class="subtitle">
        S'informer sur l'évolution de l'eccosystème Ethereum
        <br>
        Apprendre à coder des SmartContracts
        <br>
        Faire des applications décentralisées
      </h2>
      <div class="links">
        <a
          href="https://www.youtube.com/watch?v=ipwxYa-F1uY"
          target="_blank"
          class="button--green"
        >
          Découverte
        </a>
        <a
          href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/"
          target="_blank"
          class="button--grey"
        >
          Cours Complet
        </a>
      </div>
    </div>
    <div class="my-5 d-flex flex-row flex-wrap justify-content-center">
      <!-- first card -->
      <div class="m-1">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6" class="d-flex align-items-center">
              <b-card-img src="https://blog.webnet.fr/wp-content/uploads/2019/02/hands-2088954_1920.jpg" class="rounded-0" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Juridique">
                <b-card-text class="text-left">
                  Comprendre les intérêts de la Blockchain pour imaginer de nouvelles des applications concrètes.
                  <br>
                  <br>
                  Se mettre en conformité avec les exigences réglementaires.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <!-- second card -->
      <div class="m-1">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6" class="d-flex align-items-center">
              <b-card-img src="https://i.udemycdn.com/course/750x422/1906462_5d20.jpg" class="rounded-0" />
            </b-col>
            <b-col md="6">
              <b-card-body title="Technique">
                <b-card-text class="text-left">
                  Coder son propre Smart Contract en langage Solidity.
                  <br>
                  <br>
                  Créer une véritable application décentralisée pour intéragir avec la blockchain depuis un navigateur.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <!-- end cards -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  padding-top: 0;
  min-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
