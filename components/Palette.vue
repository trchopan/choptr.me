<template>
  <nav class="nav">
    <button class="nav__button" @click="show = !show"></button>
    <div :class="{ active: show }" class="nav__palette">
      <div
        v-for="i in pallets"
        :key="`pallete-${i}`"
        :class="`nav__pallete-item nav__palette-item-${i}`"
      >
        <span>{{ i }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      show: false,
      pallets: [
        "primary",
        "accent",
        "hightlight",
        "hightlight2",
        "text",
        "shade",
        "fade",
        "darker",
        "background",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
/* Create the color scheme */
@each $k, $v in $colors {
  .nav__palette-item-#{$k} {
    background-color: $v;
  }
}
.nav {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  .nav__button {
    background: map-get($colors, "primary");
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .nav__palette {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    width: calc(100vw - 2rem);
    right: 0;
    top: 0;
    transform: translateX(calc(100%));
    opacity: 0;
    transition: all 200ms;
    &.active {
      opacity: 1;
      transform: translateX(-1.5rem);
    }
    .nav__pallete-item {
      display: inline-block;
      color: white;
      width: 4rem;
      height: 2rem;
      span {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
