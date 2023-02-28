<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__creator">
        This site is made by team <a href="https://github.com/eeeeweeee">eeeeweeee</a>
      </div>
      <div class="footer__github">
        <a href="https://github.com/eeeeweeee/Gamenawa-front">github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter.vue',
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: auto;

  font-family: "Palatino Linotype", serif;

  &__container {
    display: flex;
    justify-content: right;
    gap: 16px;
  }

  &__creator {

  }

  &__github {

  }
}
</style>
