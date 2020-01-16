<template>
  <div>
    <Palette />
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: "Play", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: map-get($colors, "text");
}

body {
  background-color: map-get($colors, "background");
}
</style>
