<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

export default {
  name: 'App',
};
</script>
<style lang="scss">
html, body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
