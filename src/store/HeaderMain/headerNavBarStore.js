export default {
  namespaced: true,
  state: {
    menuItems: [
      {
        id: 1,
        text: "SON DAKİKA",
      },
      {
        id: 2,
        text: "GÜNCEL",
      },
      {
        id: 3,
        text: "DÜNYA",
      },
      {
        id: 4,
        text: "EKONOMİ",
      },
      {
        id: 5,
        text: "SPOR",
      },
      {
        id: 6,
        text: "YAŞAM",
      },
      {
        id: 7,
        text: "BİLİM-TEKNOLOJİ",
      },
      {
        id: 8,
        text: "AÇIK GÖRÜŞ",
      },
      {
        id: 9,
        text: "YAZARLAR",
      },
      {
        id: 10,
        text: "SEYAHAT",
      },
    ],
  },
  mutations: {},
  getters: {
    _navMenuItems(state) {
      return state.menuItems;
    },
  },
  actions: {},
};
