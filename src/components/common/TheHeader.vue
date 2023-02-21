<template>
  <div class="header">
    <div class="header__title" @click="routeHome">
      Gamenawa
    </div>
    <div class="header__search">
      <BaseSearch/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseSearch from '../base/BaseSearch.vue';

const router = useRouter();

function routeHome() {
  router.push('/');
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 10px;
  align-items: center;

  height: 64px;

  &__title {
    font-size: 40px;
    font-weight: 2000;
    color: $color-primary;

    cursor: pointer;
  }

  &__search {
    margin-top: 10px;
  }
}
</style>
