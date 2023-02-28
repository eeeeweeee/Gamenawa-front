<template>
    <div class="search-view">
      <the-header/>
        Search!!
      <the-footer/>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/common/TheHeader.vue';
import TheFooter from '../components/common/TheFooter.vue';

</script>

<style>
.search-view {
  display: flex;
  flex-direction: column;

  flex: 1;
  overflow: auto;
}
</style>
