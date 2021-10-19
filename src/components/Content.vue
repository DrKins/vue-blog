<template>
  <div class="ContentBox">
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
          titleName: "Example title",
          likes: 32,
          comments: 22,
          seens: 25,
          Image:
            "https://images.freeimages.com/images/large-previews/39a/nature-1225211.jpg",
        },
        {
          titleName: "Amazing Content",
          likes: 2,
          comments: 51,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/86f/black-worker-face-1438524.jpg",
        },
        {
          titleName: "Unexpected",
          likes: 11,
          comments: 12,
          seens: 22,
          Image:
            "https://images.freeimages.com/images/large-previews/c85/black-hole-1200379.jpg",
        },
        {
          titleName: "Let's hope",
          likes: 51,
          comments: 15,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/844/pizza-1326346.jpg",
        },
        {
          titleName: "World's best",
          likes: 62,
          comments: 12,
          seens: 22,
          Image:
            "https://images.freeimages.com/images/large-previews/f65/succulent-3-1174084.jpg",
        },
        {
          titleName: "Always",
          likes: 21,
          comments: 25,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/bc9/essential-kids-stuff-1235192.jpg",
        },
        {
          titleName: "Let's hope",
          likes: 51,
          comments: 15,
          seens: 23,
          Image:
            "https://images.freeimages.com/images/large-previews/844/pizza-1326346.jpg",
        },
      ],
    };
  },
})
export default class Content extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ContentBox {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;
  .Box {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.5rem 1.5rem;
    flex: 0 0 19%;
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
