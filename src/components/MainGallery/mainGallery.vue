<template>
  <div class="container">
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
      class="mbb-10"
    >
      <Slide v-for="slide in mainGallery" :key="slide">
        <div class="carousel__item f-w">
          <div>
            <div class="d-flex">
              <img
                class="galleryMainImg"
                :src="require('@/assets/image/' + slide.img)"
                alt=""
              />
            </div>
            <div class="galleryText">{{ slide.newsText }}</div>
          </div>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="5"
      :wrap-around="false"
      v-model="currentSlide"
      ref="carousel"
      :mouseDrag="false"
      :touchDrag="false"
    >
      <Slide v-for="slide in mainGallery" :key="slide">
        <div
          class="carousel__item f-w border-right border-bottom"
          @mouseover="slideTo(slide.id - 1)"
          @click="slideTo(slide.id - 1)"
          :style="
            currentSlide == slide.id - 1
              ? 'border-bottom:2px solid red!important'
              : ''
          "
        >
          <div class="galleryRef">
            <div class="d-flex w-2 p-2">
              <img
                class="galleryRefImg"
                :src="require('@/assets/image/' + slide.img)"
                alt=""
              />
            </div>
            <div class="galleryRefText">{{ slide.newsText }}</div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "mainGallery",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
  computed: {
    ...mapGetters({
      mainGallery: "mainGallery/_mainGallery",
    }),
  },
});
</script>
<style scoped>
.border-right {
  border-right: 1px solid rgb(97, 97, 97);
  cursor: pointer;
}
.border-bottom {
  border-bottom: 2px solid black !important;
}
.galleryRefText {
  height: 5.4rem;
  font-size: 1.5rem;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* İki satıra kadar göster */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
}
.galleryRefImg {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
}
.mbb-10 {
  margin-bottom: -10px;
}
.galleryRef {
  display: flex;
  height: 78px;
  background-color: black;
  color: white;
  align-items: center;
}
.f-w {
  width: 100%;
}
.w-2 {
  width: 40%;
}
.galleryMainImg {
  object-fit: contain;
  width: 100%;
}
.galleryText {
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 25px;
  background-color: rgba(0, 0, 0, 0.452);
  color: white;
  font-size: 4rem;
  font-weight: 700;
  max-width: 540px;
  text-align: left;
  padding: 15px;
}
</style>
