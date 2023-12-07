<template>
  <div class="container-fluid bg-color-red">
    <div class="container d-flex ov-hidden">
      <div
        class="d-flex flex-column align-items-start custom-font-size-16 line-h fw-7 me-3"
      >
        <span>SON</span>
        <span>DAKİKA</span>
      </div>
      <div
        class="container-fluid d-flex flex-column justify-content-center position-relative"
      >
        <newsCarousel />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ov-hidden {
  overflow: hidden;
}
.bg-color-red {
  background: linear-gradient(180deg, #f40000 0, #b70000 100%);
  padding: 0.7rem 0;
  color: white;
}
.line-h {
  line-height: 1;
  border-right: 1px white solid;
  padding-right: 2.4rem;
}
.fw-7 {
  font-weight: 700;
}
</style>
<script>
import newsCarousel from "./newsCarousel.vue";
export default {
  components: {
    newsCarousel,
  },
};
</script>
