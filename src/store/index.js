import { createStore } from "vuex";
import headerNavBarStore from "./HeaderMain/headerNavBarStore";
import exchangeStore from "./HeaderMain/headerWidget/exchangeStore";
import galleryWidget from "./HeaderMain/headerWidget/galleryWidget";
import latestNews from "./HeaderMain/latestNews/latestNewsStore";
import mainGallery from "./MainGallery/mainGalleryStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    headerNavBarStore,
    exchangeStore,
    galleryWidget,
    latestNews,
    mainGallery,
  },
});
