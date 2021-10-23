<template>
  <Navigation />
  <Landing />
  <!-- ¸<Content /> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Content from "./components/Content.vue";
import Navigation from "./components/Navigation.vue";
import Landing from "./components/Landing.vue";

@Options({
  components: {
    Content,
    Navigation,
    Landing,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #033;
  background: #007991; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #007991
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #78ffd6,
    #007991
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  min-height: 100vh;
}
</style>
