export default {
  namespaced: true,
  state: {
    galleryItems: [
      {
        id: 1,
        text: "FOTO GALERİ",
        class: "bi bi-folder-fill me-1",
      },
      {
        id: 2,
        text: "VİDEO GALERİ",
        class: "bi bi-collection-play me-1",
      },
      {
        id: 3,
        text: "CANLI YAYIN",
        class: "bi bi-display me-1",
      },
    ],
    socialMedia: [
      {
        id: 1,
        class: "bi bi-facebook socialIcon",
      },
      {
        id: 2,
        class: "bi bi-twitter-x socialIcon",
      },
      {
        id: 3,
        class: "bi bi-instagram socialIcon",
      },
      {
        id: 4,
        class: "bi bi-youtube socialIcon",
      },
      {
        id: 5,
        class: "bi bi-threads socialIcon",
      },
    ],
  },
  mutations: {},
  getters: {
    _galleryItems(state) {
      return state.galleryItems;
    },
    _socialMedia(state) {
      return state.socialMedia;
    },
  },
  actions: {},
};
