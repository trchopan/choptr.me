<template>
  <footer class="footer__container">
    <div v-for="footer in footers" class="footer__item">
      <img :src="footer.icon" :alt="footer.h5" />
      <h5>
        <a :href="footer.link" target="_blank">{{ footer.h5 }}</a>
      </h5>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    footers: { type: Array, required: true },
  },
});
</script>

<style lang="scss" scoped>
.footer__container {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 1.6rem 2rem;
  background-color: map-get($colors, "darker");
  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    padding: 0.66rem 1rem;
  }
  .footer__item {
    display: flex;
    margin-bottom: 0.5rem;
    img {
      $size: 1.5rem;
      width: $size;
      height: $size;
      margin-right: 0.5rem;
    }
    h5 {
      font-size: 1rem;
      font-weight: normal;
      a {
        color: map-get($colors, "accent");
        text-decoration: none;
      }
    }
  }
}
</style>
