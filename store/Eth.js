export const state = () => ({
  price: 0
})

export const mutations = {
  SET_ETH (state, fetchedPrice) {
    state.price = fetchedPrice
  }
}

export const actions = {
  fetchCMC ({ commit }) {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=dcbf8b6a-2443-40c7-a9a6-8c2cfa8c6980')
      .then(response => response.json())
      .then((data) => {
        if (data) {
          const price = data.data[1].quote.USD.price

          commit('SET_ETH', Math.round(price))
        }
      })
  }
}
