<template>
  <div class="Landing_Container">
    <div class="Welcome_Msg">
      <h1>Welcome to first universal Blog Page.</h1>
      <h2>You are officially blogger, enjoy and be happy.</h2>
    </div>
    <div class="Carousel_Box">
      <div
        class="Box"
        v-for="(item, index) in fetch"
        :key="index"
        v-bind:style="{
          backgroundImage:
            `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.4)),` +
            `url('${item.Image}')`,
        }"
      >
        <h2>{{ item.titleName }}</h2>
        <div class="details">
          <span class="heart">
            <font-awesome-icon icon="heart" />
            <p>{{ item.likes }}</p>
          </span>
          <span class="comments">
            <font-awesome-icon icon="comments" />
            <p>{{ item.comments }}</p>
          </span>
          <span class="eye">
            <font-awesome-icon icon="eye" />
            <p>{{ item.seens }}</p>
          </span>
        </div>
      </div>
      <div class="Pop">
        <p>Latest on site!</p>
        <font-awesome-icon icon="bell" class="Title_Bell" />
      </div>
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
.Landing_Container {
  min-height: 200vh;
  background: linear-gradient(
    rgba(62, 136, 255, 0.5),
    rgba(255, 255, 255, 0.8)
  );
  background-repeat: round;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Welcome_Msg {
  position: relative;
  z-index: 1;
  user-select: none;
  margin: 50vh 20rem 50vh 0;
  &::after {
    position: absolute;
    bottom: -1rem;
    left: -3rem;
    content: "";
    width: 40rem;
    height: 5rem;
    border-radius: 5rem;
    border: 0.5rem solid black;
    background: #fff;
    z-index: -1;
  }
  &::before {
    position: absolute;
    content: "";
    background: #5dd481;
    width: 2rem;
    height: 2rem;
    bottom: -1.5rem;
    left: -3.5rem;
    border: 0.5rem solid black;
    border-radius: 100%;
  }
}
.Carousel_Box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.15rem dotted black;
  background: rgba(255, 255, 255, 0.805);
  height: 20rem;
  width: 70rem;
  margin: 0 0 0 15rem;
  .Pop {
    position: relative;
    bottom: -15.5rem;
    right: 0rem;
    color: black;
    z-index: 1;
    display: flex;
    align-items: center;
    p {
      font-size: 1.5rem;
      font-weight: 700;
      user-select: none;
      position: relative;
      width: 10rem;
      top: -2rem;
      left: -2rem;
    }
    &::after {
      position: absolute;
      content: "";
      width: 15rem;
      height: 3.5rem;
      background: rgb(241, 248, 253);
      border: 0.25rem dotted black;
      bottom: 1rem;
      left: -3.5rem;
      z-index: -1;
      border-radius: 0 5rem 5rem 0;
    }
    .Title_Bell {
      position: absolute;
      top: -3rem;
      right: -5rem;
      border-radius: 100%;
      border: 0.25rem solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.25rem;
      background: rgb(241, 248, 253);
    }
  }
  .Box {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 15rem;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem 1.5rem;
    &:first-child {
      margin-left: 10rem;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      transform: translateY(-10px);
      transition: all ease-in-out 75ms;
    }
    h2 {
      user-select: text;
    }
    .details {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        p {
          padding-left: 0.25rem;
        }
      }
    }
  }
}
</style>
