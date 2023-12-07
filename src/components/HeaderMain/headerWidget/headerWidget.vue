<template>
  <div class="d-flex container-fluid bg-color height-header">
    <div
      class="container d-flex align-items-center flex-row justify-content-between color"
    >
      <exchangeWidget />
      <galleryWidget />
    </div>
  </div>
</template>
<style scoped>
.bg-color {
  background-color: #000;
}
.color {
  color: white;
}
</style>
<script>
import exchangeWidget from "./exchangeWidget.vue";
import galleryWidget from "./galleryWidget";
export default {
  components: {
    exchangeWidget,
    galleryWidget,
  },
};
</script>
