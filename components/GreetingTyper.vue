<template functional>
  <client-only>
    <vue-typer
      :text="props.text"
      :repeat="props.repeat"
      :type-delay="100"
      v-on="listeners"
    ></vue-typer>
  </client-only>
</template>

<style lang="scss">
.vue-typer {
  font-family: "Fira Code", monospace;
  line-height: 2rem;
  font-size: 1.2rem;
  @media (max-width: $breakpoint-md) {
    line-height: 1.6rem;
    font-size: 1rem;
  }
  & .custom.char {
    color: map-get($colors, "text");
    background-color: map-get($colors, "darker");
    margin-bottom: 5px;
  }
  & .custom.char.selected {
    background-color: map-get($colors, "hightlight");
  }
  & .custom.caret {
    width: 10px;
    background-color: map-get($colors, "primary");
  }
}
</style>
