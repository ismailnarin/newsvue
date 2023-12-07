<template>
  <carousel
    :items-to-show="3"
    :wrap-around="true"
    v-model="currentSlide"
    :autoplay="3000"
  >
    <slide v-for="slide in latestNews" :key="slide.id">
      <div class="carousel__item d-flex flex-row t-nowrap custom-font-size-13">
        <div class="custom-font-size-10 bg-yellow me-1">{{ slide.hour }}</div>
        <div>{{ slide.news }}</div>
      </div>
    </slide>
  </carousel>
  <div
    class="navigation"
    @mouseenter="showNavigation = true"
    @mouseleave="showNavigation = false"
  >
    <i
      class="bi bi-arrow-left-circle-fill"
      @click="prev"
      v-if="showNavigation"
    ></i>
    <i
      class="bi bi-arrow-right-circle-fill"
      @click="next"
      v-if="showNavigation"
    ></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "ExamplePagination",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    showNavigation: false,
    currentSlide: 0,
    settings: {
      itemsToShow: 2,
      snapAlign: "left",
    },
    breakpoints: {
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 2,
        snapAlign: "start",
      },
    },
  }),
  computed: {
    ...mapGetters({
      latestNews: "latestNews/_latestNews",
    }),
  },
  methods: {
    prev() {
      this.currentSlide--;
    },
    next() {
      this.currentSlide++;
    },
  },
});
</script>
<style scoped>
.navigation {
  display: flex;
  position: absolute;
  color: black;
  font-size: 2.7rem;
  cursor: pointer;
  opacity: 0.7;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  margin-top: -0.7rem;
}
.bg-yellow {
  background-color: yellow;
  color: black;
  font-weight: 600;
  padding: 3px;
}
body {
  padding: 20px;
}

.carousel__item {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
}

.carousel__slide {
  flex: 0 0 auto;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
