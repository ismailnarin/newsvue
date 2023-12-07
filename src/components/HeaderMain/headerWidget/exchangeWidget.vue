<template>
  <div>
    <ul
      class="list-unstyled d-flex custom-font-size-13 mb-0 align-items-center justify-content-between"
    >
      <li class="mr24" v-for="item in exchangeItems" :key="item.id">
        {{ item.currency }} <span class="fw-7">{{ item.foreign }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      exchangeItems: "exchangeStore/_exchageItems",
    }),
  },
};
</script>
<style scoped>
.mr24 {
  margin-right: 2.4rem;
}
.color {
  color: white;
}
.fw-7 {
  font-weight: 800;
}
</style>
