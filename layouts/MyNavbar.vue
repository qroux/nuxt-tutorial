<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">
        Juriste Codeur
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/juridique">
            Juridique
          </b-nav-item>
          <b-nav-item href="/technique">
            Technique
          </b-nav-item>
          <b-nav-item href="#">
            FAQ
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://coinmarketcap.com/fr/currencies/ethereum/" target="blank">
            Cours ETH: {{ EthPrice }}$
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    EthPrice () {
      return this.$store.state.Eth.price
    }
  }
  // created () {
  //   this.$store.dispatch('Eth/fetchCMC')
  // }
}
</script>
