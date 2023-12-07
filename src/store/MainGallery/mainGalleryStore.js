export default {
  namespaced: true,
  state: {
    mainGallery: [
      {
        id: 1,
        newsText:
          "Başkan Erdoğan'dan Miçotakis'e Lavrion Kampı uyarısı: Dikkatli olunmasının altını çizdim",
        img: "1.webp",
      },
      {
        id: 2,
        newsText:
          "Anlaşmalar imzalandı! Türkiye ile Yunanistan arasında yeni dönem",
        img: "2.webp",
      },
      {
        id: 3,
        newsText:
          "ABD'li Breedlove: Büyük bir orduya sahip Türkiye'nin F-16 talebini onaylamalıyız",
        img: "3.webp",
      },
      {
        id: 4,
        newsText: "Terör örgütüne ağır darbe! MSB rakamlarla duyurdu",
        img: "4.webp",
      },
      {
        id: 5,
        newsText:
          "İsrail ordusu Gazze'ye bomba yağdırdı: Çok sayıda ölü ve yaralı var",
        img: "5.webp",
      },
    ],
  },
  mutations: {},
  getters: {
    _mainGallery(state) {
      return state.mainGallery;
    },
  },
  actions: {},
};
