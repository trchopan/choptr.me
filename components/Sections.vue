<template functional>
  <div class="sections">
    <section
      v-for="(section, i) in props.sections"
      :key="`section-${i}`"
      class="section__item"
    >
      <h2>{{ section.h2 }}</h2>
      <p v-for="(p, i) in section.p" :key="`sec--p-${i}`">{{ p }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section__item {
  background-color: map-get($colors, "fade");
  padding: 0.5rem 1rem;
  h2 {
  }
  p {
    padding-left: 1rem;
    position: relative;
    margin: 0.2rem 0;
    margin-left: 1rem;
    &::before {
      content: "λ";
      position: absolute;
      left: 0;
    }
  }
}
</style>
