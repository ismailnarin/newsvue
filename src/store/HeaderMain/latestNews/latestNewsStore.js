export default {
  namespaced: true,
  state: {
    latestNews: [
      {
        id: 1,
        hour: "22:14",
        news: "5 ilde DEAŞ operasyonu 18 tutuklama. Operasyonlar sürüyor",
      },
      {
        id: 2,
        hour: "22:06",
        news: "Süper lig Ekiplerine ceza yağmuru ",
      },
      {
        id: 3,
        hour: "21:20",
        news: "İyi partide bir istifa daha Meral Akşener açıklama yaptı",
      },
      {
        id: 4,
        hour: "21:10",
        news: "Paul Pogbaya 4 yıl men edildi taraftar şokta",
      },
      {
        id: 5,
        hour: "21:00",
        news: "İsrail, Gazze'deki Şuheda el-Aksa Hastanesi çevresini",
      },
    ],
  },
  mutations: {},
  getters: {
    _latestNews(state) {
      return state.latestNews;
    },
  },
  actions: {},
};
