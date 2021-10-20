<template>
  <div class="Navigation_Container">
    <div class="Navigation" v-if="NavBar">
      <ul class="Navigation_links">
        <li class="selected" v-on:click="ShowHideMenu">Close</li>
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
  right: 1rem;
  font-weight: 700;
  background: transparent;
  border: 0.25rem solid #fff;
  color: #fff;
  width: 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all ease-in-out 500ms;
  &:hover {
    background: linear-gradient(272deg, #ff4b1f, #ff9068);
    background-size: 400% 400%;

    -webkit-animation: LiveBackgroundButton 10s ease infinite;
    -moz-animation: LiveBackgroundButton 10s ease infinite;
    animation: LiveBackgroundButton 10s ease infinite;
    border: 0.25rem solid #fff;
    color: #fff;
    transition: all ease-in-out 250ms;
    transform: translateX(-1rem) translateY(1rem);
  }
}
.Navigation {
  background: #fff;
  transition: all ease-in-out 250ms;
  position: relative;
  top: 2rem;
  right: 2rem;
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
        background: black;
        color: #fff;
        transition: all ease-in 250ms;
      }
    }
    .selected {
      background: #200122; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to top,
        #6f0000,
        #200122
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to top,
        #6f0000,
        #200122
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      font-weight: 700;
      color: #fff;
    }
  }
}

@-webkit-keyframes LiveBackgroundButton {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@-moz-keyframes LiveBackgroundButton {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@keyframes LiveBackgroundButton {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
</style>
