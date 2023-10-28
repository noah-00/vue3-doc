<script setup lang="ts">
import { watchArray } from "@vueuse/core";
import { onMounted, ref } from "vue";

const list = ref([1, 2, 3]);

watchArray(list, (newList, oldList, added, removed) => {
  console.log(newList); // [1, 2, 3, 4]
  console.log(oldList); // [1, 2, 3]
  console.log(added); // [4]
  console.log(removed); // []
});

onMounted(() => {
  list.value = [...list.value, 4];
});
</script>

<template>
  <div></div>
</template>
