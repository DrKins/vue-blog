<template>
  <div class="TopQuote_Container" v-for="(item, index) in GetAPI" :key="index">
    <div class="TopQuote">
      <p class="Quote">"{{ item.text }}"</p>
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
@Options({
  computed: {
    ...mapGetters(["GetAPI"]),
  },
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.TopQuote_Container {
  .TopQuote {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1em 0 1em;
    min-height: 10em;
    text-align: left;
    background: #ece9e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffffff,
      #ece9e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff,
      #ece9e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .Quote {
      font-style: italic;
      font-weight: 500;
      font-size: 1em;
    }
    .Reactions {
      display: flex;
      justify-content: space-evenly;
      color: white;
      padding: 1em 0;

      .Likes {
        display: flex;
        width: 50%;
        padding: 1em 2em;
        justify-content: center;
        align-items: center;
        border-radius: 0.5em 0 0 0.5em;
        background-image: linear-gradient(135deg, #81fbb8 10%, #28c76f 100%);
        margin-right: 0.5em;
        p {
          margin-left: 0.5em;
        }
      }
      .Dislikes {
        display: flex;
        padding: 1em 2em;
        width: 50%;
        justify-content: center;
        align-items: center;
        border-radius: 0 0.5em 0.5em 0;
        background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
        p {
          margin-left: 0.5em;
        }
      }
    }
  }
}
</style>
