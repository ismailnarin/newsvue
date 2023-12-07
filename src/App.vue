<template>
  <mainContainer />
</template>

<script>
import mainContainer from "./components/mainContainer.vue";
import "@/assets/css/main.css";
export default {
  name: "App",
  components: {
    mainContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
