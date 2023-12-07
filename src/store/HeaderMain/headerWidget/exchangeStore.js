export default {
  namespaced: true,
  state: {
    exchageItems: [
      {
        id: 1,
        currency: "DOLAR",
        foreign: "28,9419",
      },
      {
        id: 2,
        currency: "EURO",
        foreign: "31,2754",
      },
      {
        id: 3,
        currency: "ALTIN",
        foreign: "1881.55",
      },
      {
        id: 4,
        currency: "BIST100",
        foreign: "7978.82",
      },
    ],
  },
  mutations: {},
  getters: {
    _exchageItems(state) {
      return state.exchageItems;
    },
  },
  actions: {},
};
