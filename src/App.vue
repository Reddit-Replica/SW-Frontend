<template>
  <the-main></the-main>
</template>

<script>
import TheMain from "./components/TheMain.vue";

export default {
  name: "App",
  components: {
    TheMain,
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
