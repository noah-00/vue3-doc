<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

const parentString = ref<string>("parent string");
</script>

<template>
  {{ parentString }}
  <Child v-model="parentString" />
</template>
