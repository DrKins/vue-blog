<template>
  <div class="TopQuote_Container" v-for="(item, index) in fetch" :key="index">
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped></style>
