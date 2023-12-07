<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="30"
    :navigation="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="news in latestNews" :key="news.id">
      <div class="custom-font-size-10 bg-yellow me-1">{{ news.hour }}</div>
      <div class="custom-font-size-13">{{ news.news }}</div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters({
      latestNews: "latestNews/_latestNews",
    }),
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.bg-yellow {
  background-color: yellow;
  color: black;
  font-weight: 600;
  padding: 3px;
}
</style>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: auto;
  cursor: pointer;
}
</style>
