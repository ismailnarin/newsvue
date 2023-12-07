<template>
  <headerTop />
  <headerNavBar />
  <headerWidget />
  <latestNews />
  <adContainer />
  <mainGalleryVue />
</template>
<script>
import headerTop from "./HeaderMain/headerTop.vue";
import headerNavBar from "./HeaderMain/headerNavBar.vue";
import headerWidget from "./HeaderMain/headerWidget/headerWidget.vue";
import latestNews from "./HeaderMain/latestNews/latestNews.vue";
import adContainer from "./HeaderMain/adContainer.vue";
import mainGalleryVue from "./MainGallery/mainGallery.vue";

export default {
  components: {
    headerTop,
    headerNavBar,
    headerWidget,
    latestNews,
    adContainer,
    mainGalleryVue,
  },
};
</script>
