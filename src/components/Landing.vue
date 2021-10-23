<template>
  <div class="Landing_Container">
    <Card />
    <div class="ScrollButton animate__animated animate__fadeIn">
      <font-awesome-icon icon="chevron-circle-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./Card.vue";
@Options({
  components: {
    Card,
  },
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

.Likes,
.Dislikes {
  cursor: pointer;
}
.ScrollButton {
  -webkit-tap-highlight-color: transparent;
  animation: scrollBtn 2s ease-in-out infinite alternate-reverse;
}
/*
 * Author: http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries/
 */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px,) and (max-device-width: 480px,) {
  .Landing_Container {
    padding: 2em;
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
  .Landing_Container {
    padding: 2em;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

// /* Smartphones (portrait) ----------- */
// @media only screen and (max-width: 320px) {
//   /* Styles */
// }

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .Landing_Container {
    padding: 2em;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .Landing_Container {
    padding: 2em;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .Landing_Container {
    padding: 2em;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .Landing_Container {
    padding: 2em 40%;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .Landing_Container {
    padding: 2em 40%;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  .Landing_Container {
    padding: 2em;
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}
@keyframes scrollBtn {
  0% {
    transform: translateY(0.25em);
  }
  100% {
    transform: translateY(0em);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
</style>
