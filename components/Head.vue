<template>
  <div class="head">
    <div
      class="head__avatar"
      :class="{ active: largeAvatar }"
      @click="largeAvatar = !largeAvatar"
    >
      <img src="/img/choptr-avatar.jpg" alt="Chop Tr Avatar" />
    </div>
    <div class="typer__container" @click="onReplay">
      <p v-for="(g, i) in greetings" :key="`greeting-${i}`">
        <GreetingTyper
          v-if="greetingCounter >= i"
          :text="g"
          :repeat="0"
          @completed="onCompleted"
        />
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    greetings: { type: Array, required: true },
  },
  data() {
    return {
      greetingCounter: 0,
      largeAvatar: false,
    };
  },
  methods: {
    onCompleted() {
      setTimeout(() => {
        this.greetingCounter++;
        if (this.greetingCounter >= this.greetings.length) {
          this.$emit("done", true);
        }
      }, 200);
    },
    onReplay() {
      if (this.greetingCounter < this.greetings.length) {
        return;
      }
      this.greetingCounter = -1;
      setTimeout(() => {
        this.greetingCounter++;
      }, 200);
    },
  },
});
</script>

<style lang="scss" scoped>
.head {
  padding-top: 10rem;
  margin-bottom: 2rem;
  .head__avatar {
    margin: auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    overflow: hidden;
    transition: all 1000ms;
    $size: 7rem;
    width: $size;
    height: $size;
    @media (max-width: $breakpoint-md) {
      $size: 6rem;
      width: $size;
      height: $size;
    }
    img {
      width: 100%;
      height: 100%;
    }
    &.active {
      width: 300px;
      height: 300px;
      border-radius: 0;
    }
  }
  .typer__container {
    margin: auto;
    max-width: 500px;
    min-height: 9rem;
    text-align: center;
  }
}
</style>
