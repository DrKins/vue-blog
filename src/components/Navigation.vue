<template>
  <div class="Navigation">
    <ul class="Navigation_links">
      <li class="selected">Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Log In</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Navigation extends Vue {}
</script>

<style scoped lang="scss">
.Navigation {
  background: #fff;
  .Navigation_links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    li {
      width: 100px;
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
