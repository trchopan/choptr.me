<template functional>
  <div class="work__list">
    <h4>My Posts</h4>
    <p v-for="post in props.blogposts" class="work__item">
      <a :href="post.link" target="_blank">{{ post.name }}</a>
    </p>
    <h4>My Works</h4>
    <p v-for="work in props.works" class="work__item">
      <a :href="work.link" target="_blank">{{ work.name }}</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.work__list {
  list-style: none;
  padding: 0.5rem 1rem;
  h4 {
    margin: 1rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: normal;
  }
  p {
    position: relative;
    padding-left: 1rem;
    &::before {
      content: "+";
      position: absolute;
      left: 0;
    }
    a {
      color: map-get($colors, "hightlight2");
      text-decoration: none;
    }
  }
}
</style>
