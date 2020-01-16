<template>
  <img :src="src" :srcset="srcset" :sizes="sizes" :alt="alt" />
</template>

<script>
import Vue from "vue";

const maxWidths = ["320px", "576px", "768px", "1024px", "1441px"];

export default Vue.extend({
  props: {
    src: { type: String, required: true },
    srcs: { type: String, required: false },
    alt: { type: String, required: false },
  },
  computed: {
    srcsArray() {
      return this.srcs ? this.srcs.split(",") : ["2x", "3x"];
    },
    srcset() {
      const lastDot = this.src.lastIndexOf(".");
      const ext = this.src.slice(lastDot, this.src.length);
      const name = this.src.slice(0, lastDot);
      if (![".jpeg", ".jpg", ".png"].includes(ext)) {
        return "";
      }
      const result = this.srcArray
        .reduce((acc, cur) => {
          acc.push(`${name}@${cur}${ext} ${cur}`);
          return acc;
        }, [])
        .join(", ");
      return result;
    },
    sizes() {
      const result = this.srcsArray
        .reduce((acc, cur, index) => {
          acc.push(`(max-width: ${maxWidths[index]}) ${cur}`);
          return acc;
        }, [])
        .join(", ");
      return result;
    },
  },
});
</script>
