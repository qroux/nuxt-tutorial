<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <nuxt-link to="/" tag="b-navbar-brand">
        Juriste Codeur
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/juridique" tag="b-nav-item" active-class="my-item">
            <div class="nav-link">
              Juridique
            </div>
          </nuxt-link>
          <nuxt-link to="/technique" tag="b-nav-item" active-class="my-item">
            <div class="nav-link">
              Technique
            </div>
          </nuxt-link>
          <nuxt-link to="/faq" tag="b-nav-item" active-class="my-item">
            <div class="nav-link">
              FAQ
            </div>
          </nuxt-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://coinmarketcap.com/fr/currencies/ethereum/" target="blank" title="CoinMarketCap">
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
  },
  created () {
    this.$store.dispatch('Eth/fetchCMC')
  }
}
</script>

<style>
.navbar-brand:hover {
    cursor: pointer;
  }
.nav-link:hover {
  cursor: pointer;
}
.my-item {
  background-color: #e8e8e8;
  transition: 500ms;
}
</style>
