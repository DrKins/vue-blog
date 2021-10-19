<template>
  <div class="Navigation_Container">
    <div class="Navigation" v-if="NavBar">
      <ul class="Navigation_links">
        <li class="selected" v-on:click="ShowHideMenu">Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Log In</li>
      </ul>
    </div>
    <div class="Navigation-btn" v-else v-on:click="ShowHideMenu">Menu</div>
  </div>
</template>

<script lang="ts">
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
.Navigation_Container {
  position: fixed;
  right: 0;
  height: 100%;
}

.Navigation-btn {
  position: relative;
  top: 1rem;
  background: rgb(110, 136, 206);
  font-weight: 700;
  color: #fff;
  width: 100px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: rgb(110, 167, 206);
    transition: all ease-in 250ms;
    transform: translateX(-10px);
  }
}
.Navigation {
  background: #fff;
  min-height: 100%;
  transition: all ease-in-out 250ms;
  .Navigation_links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    li {
      width: 10rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      &:hover {
        background: rgb(110, 167, 206);
        transition: all ease-in 250ms;
        transform: translateX(-10px);
      }
    }
    .selected {
      background: rgb(110, 136, 206);
      transform: translateX(-10px);
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
