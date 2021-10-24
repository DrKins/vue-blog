<template>
  <div class="Landing_Container">
    <Card />
    <!-- <div class="ScrollButton animate__animated animate__fadeIn">
      <font-awesome-icon icon="chevron-circle-down" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { randomGenerate } from "@/scripts/randomGenerate";
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
@Options({
  components: {
    Card,
  },
  mounted() {
    this.GenerateC(8);
    this.scroll();
  },
  computed: {
    ...mapGetters(["GetAPI"]),
  },
  methods: {
    ...mapActions(["generateCard"]),
    //Generate 8 cards from api.
    async GenerateC(cards: number): Promise<void> {
      for (let index = 0; index < cards; index++) {
        this.generateCard(await randomGenerate.generateItem());
      }
    },
    //check if is scrolled to the bottom?
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.GenerateC(4);
        }
      };
    },
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
.Landing_Container {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  .ScrollButton {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  .Landing_Container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0.25em 30%;
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .Landing_Container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0.25em 30%;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .Landing_Container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 2em 30%;
  }
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .Landing_Container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 2em 30%;
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  .Landing_Container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .Landing_Container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

/* CSS */
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
