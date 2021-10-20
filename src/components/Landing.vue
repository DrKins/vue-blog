<template>
  <div class="Landing_Container">
    <div
      class="
        Welcome_Title
        animate__animated animate__bounceIn animate__delay-1s
      "
    >
      <img
        class="animate__animated animate__jackInTheBox animate__delay-2s"
        src="https://avatarfiles.alphacoders.com/218/218198.jpg"
        alt="avatar"
      />
      <h1 class="animate__animated animate__bounceIn animate__delay-1s">
        Welcome to first universal Blog Page.
      </h1>
    </div>
    <div
      class="
        Welcome_SubTitle
        animate__animated animate__bounceIn animate__delay-2s
      "
    >
      <h1 class="animate__animated animate__bounceIn animate__delay-2s">
        You're hired! Welcome aboard blogger!
      </h1>
      <img
        class="animate__animated animate__jackInTheBox animate__delay-3s"
        src="https://avatarfiles.alphacoders.com/207/thumb-1920-207191.gif"
        alt="avatar"
      />
    </div>
    <div
      class="ScrollButton animate__animated animate__bounceIn animate__delay-4s"
    >
      <font-awesome-icon icon="chevron-circle-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      fetch: [
        {
          titleName: "Example title",
          likes: 12,
          comments: 2,
          seens: 22,
          Image:
            "https://images.freeimages.com/images/large-previews/4ca/colours-of-nature-1173208.jpg",
        },
        {
          titleName: "Amazing Content",
          likes: 11,
          comments: 5,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/ce9/natural-frame-1439402.jpg",
        },
        {
          titleName: "Amazing Content",
          likes: 11,
          comments: 5,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/ce9/natural-frame-1439402.jpg",
        },
      ],
    };
  },
})
export default class Landing extends Vue {}
</script>

<style scoped lang="scss">
$border: rgb(194, 194, 194);
.Landing_Container {
  user-select: none;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Welcome_Title {
    position: relative;
    background: #fff;
    border: 0.25rem solid $border;
    padding: 1.5rem 3rem;
    border-radius: 5rem 5rem 5rem 0;
    margin: 0 20rem 2.5rem 0;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      border: 0.25rem solid $border;
      position: absolute;
      left: -7rem;
      top: 1rem;
    }
  }
  .Welcome_SubTitle {
    position: relative;
    background: #fff;
    border: 0.25rem solid $border;
    padding: 1.5rem 3rem;
    border-radius: 5rem 5rem 0 5rem;
    margin: 0 0 0 20rem;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      border: 0.25rem solid $border;
      position: absolute;
      right: -7rem;
      top: 1rem;
    }
  }
  .ScrollButton {
    margin: 20rem 0 0 0;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
  }
}
</style>
