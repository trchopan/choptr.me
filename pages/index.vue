<template>
  <div>
    <div class="container">
      <h1 v-show="false">Chop Tr</h1>
      <Head :greetings="greetings" @done="showBody = true" />
      <div class="body" :class="{ active: showBody }">
        <Sections :sections="sections" />
        <BodyList :blogposts="blogposts" :works="works" />
      </div>
    </div>
    <div class="footer" :class="{ active: showBody }">
      <Footer :footers="footers" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import index from "./index.yaml";

export default Vue.extend({
  data() {
    return {
      greetings: index.greetings,
      about: index.about,
      sections: index.sections,
      footers: index.footers,
      blogposts: index.blogposts,
      works: index.works,
      showBody: process.NODE_ENV != "production",
    };
  },
});
</script>

<style lang="scss" scoped>
.body,
.footer {
  opacity: 0;
  transition: opacity 500ms;
  padding: 0 0.5rem;
  &.active {
    opacity: 1;
  }
}
.container {
  max-width: 700px;
  margin: auto;
  margin-bottom: 1rem;
}
.footer {
  padding: 0;
}
</style>
