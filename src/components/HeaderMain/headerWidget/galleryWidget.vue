<template>
  <div class="d-flex flex-row">
    <ul
      class="list-unstyled custom-font-size-13 fw-5 mb-0 d-flex me-3 align-items-center"
    >
      <li class="me-4" v-for="item in galleryItems" :key="item.id">
        <i :class="item.class"></i>{{ item.text }}
      </li>
    </ul>
    <ul class="list-unstyled d-flex mb-0 me-5">
      <li class="me-1" v-for="socialItem in socialMedia" :key="socialItem.id">
        <i :class="socialItem.class"></i>
      </li>
    </ul>
    <span>
      <i class="bi bi-search searchIco"></i>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      galleryItems: "galleryWidget/_galleryItems",
      socialMedia: "galleryWidget/_socialMedia",
    }),
  },
};
</script>
<style scoped>
.searchIco {
  font-size: 1.4rem;
}
.socialIcon {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  background-color: rgb(223, 223, 223);
  font-size: 0.9rem;
  border-radius: 50%;
  color: black;
  padding: 5px 6px;
}
.color {
  color: white;
}
.fw-7 {
  font-weight: 800;
}
.fw-5 {
  font-weight: 500;
}
</style>
