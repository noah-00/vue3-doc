<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

// defineProps(["title", "isShow"]);
// or
const props = defineProps(["isShow", "title"]);
console.log(props.isShow);

// type script
// defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   isShow: {
//     type: Boolean,
//     default: true,
//     required: true,
//   },
// });
</script>

<template>
  <h1>{{ props.title }}</h1>
  <h2>
    <span>Here is </span>
    <slot></slot>
  </h2>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
