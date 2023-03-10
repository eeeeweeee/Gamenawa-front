<template>
  <div class="game-info" :style="{width: width + 'px', height: height + 'px'}">
    <img
      class="game-info__image"
      src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/2055290\/header.jpg?t=1675709223"/>
    <div class="game-info__desc">
      <div class="game-info__desc--title">{{ props.games.name }}</div>
      <div class="game-info__desc--detail">dev: {{ props.games.developer }} </div>
      <div class="game-info__desc--detail">pub: {{ props.games.publisher }} </div>
      <div class="game-info__desc--detail">Steam: {{ props.games.steamScore }}</div>
      <div class="game-info__desc--detail">Meta: {{ props.games.metacriticScore }}</div>
      <div class="game-info__desc--detail">Open: {{ props.games.opencriticScore }}</div>
      <div class="game-info__desc--detail">releaseDate: {{ props.games.releaseDate }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IGame } from '../../interfaces/IGame.interface';

interface Props {
  width: string
  height: string
  games: IGame
}
const props = defineProps<Props>();

</script>

<style lang="scss" scoped>
.game-info {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  gap: 10px;
  box-shadow: 0 1px 1px $color-primary;
  &:hover {
    filter: brightness(80%);
    transform:scale(1.05);
    cursor: pointer;
  }
  &__image {
    width: 460px;
    border-radius: 8px;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &--title {
      font-weight: bold;
    }
    &--detail {
      font-size: 14px;
    }
  }
}
</style>
