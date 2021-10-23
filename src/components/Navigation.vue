<template>
  <div class="Navigation_Container">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="searchBar">
      <div>
        <input type="text" placeholder="Search item" id="search" />
        <font-awesome-icon icon="search" id="searchIcon" />
      </div>
    </div>
    <div class="menuBtn">Menu</div>
  </div>
</template>

<script scoped lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return { NavBar: false as boolean };
  },
  methods: {
    ShowHideMenu() {
      this.NavBar = !this.NavBar;
    },
  },
})
export default class Navigation extends Vue {}
</script>

<style scoped lang="scss">
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px white inset !important;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

.Navigation_Container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  background: white;
  padding: 0 1em;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 2em;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
  .searchBar {
    div:first-child {
      display: flex;
      border: 0.1em solid black;
      border-radius: 2em;
      background: transparent;
      color: black;
      justify-content: center;
      align-items: center;
      padding: 0.5em;
      #searchIcon {
        cursor: pointer;
      }
      input {
        padding: 0 0.25em;
        border: none;
        &:focus {
          outline: none;
          background: transparent;
        }
      }
    }
  }
  .menuBtn {
    font-weight: 700;
    cursor: pointer;
  }
}
/*
 * Author: http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries/
 */
</style>
