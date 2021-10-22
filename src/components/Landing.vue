<template>
  <div class="Landing_Container">
    <div class="TopQuote_Container" v-for="(item, index) in fetch" :key="index">
      <div class="QuoteHead">
        <img src="../assets/happy.svg" alt="emoji" />
      </div>
      <div class="TopQuote">
        <p class="Quote">"{{ item.quote }}"</p>
        <div class="Reactions">
          <div class="Likes">
            <font-awesome-icon icon="heart" />
            <p>{{ item.likes }}</p>
          </div>
          <div class="Dislikes">
            <font-awesome-icon icon="heart-broken" />
            <p>{{ item.dislikes }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ScrollButton animate__animated animate__fadeIn">
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
          dislikes: 2,
          quote: "Commodo amet in deserunt nostrud Lorem duis eiusmod.",
        },
        {
          titleName: "Example title",
          likes: 12,
          dislikes: 2,
          quote:
            "Incididunt enim nisi dolor Lorem. Velit aliqua enim ex consectetur sit Lorem fugiat et. Dolore quis pariatur exercitation pariatur dolore qui tempor sit et. Officia exercitation ea aute ea deserunt voluptate duis incididunt laboris nulla Lorem. Cillum est velit nostrud aute nisi ex exercitation et id aliquip incididunt anim labore non. Tempor laboris consequat velit velit officia commodo. Mollit et adipisicing cupidatat ad nulla nostrud ex consequat sunt mollit.",
        },
      ],
    };
  },
})
export default class Landing extends Vue {}
</script>

<style scoped lang="scss">
$border: #5f9ea0;
/*
 * Author: http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries/
 */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px,) and (max-device-width: 480px,) {
  .Landing_Container {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em 0 0 0;
    .TopQuote_Container {
      .QuoteHead {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1em;
        width: 2em;
        background: #fbfff1;
        border-radius: 1em;
        padding: 1em;
        position: relative;
        margin: 0 0 0.5em 0;
      }
      .TopQuote {
        margin: 0 0 4em 0;
        width: 20em;
        height: auto;
        background: #fbfff1;
        border-radius: 1em;
        padding: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
          margin-bottom: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 0 1em;
          .Likes {
            display: flex;
            width: 4em;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            border: 0.1em solid $border;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 4em;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            border: 0.1em solid $border;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width: 321px) {
  /* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  /* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  /* Styles */
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  /* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  /* Styles */
}
</style>
