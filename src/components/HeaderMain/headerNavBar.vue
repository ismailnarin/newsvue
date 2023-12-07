<template>
  <div class="container height-header custom-font-size-15 d-grid">
    <ul
      class="d-flex list-unstyled justify-content-between align-items-center mb-0 f-weight color"
    >
      <li class="pointer" v-for="item in navMenuItems" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      navMenuItems: "headerNavBarStore/_navMenuItems",
    }),
  },
};
</script>
<style scoped>
.f-weight {
  font-weight: 700;
}
.pointer {
  cursor: pointer;
}

.color {
  color: inherit;
}
</style>
