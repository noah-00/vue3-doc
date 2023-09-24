<script setup lang="ts">
// -------------------- component event emit -------------------
defineEmits<{
  (e: "someEvent"): void;
  (e: "increaseBy", n: number): void;
}>();

// ---------------------------- or -----------------------------

// defineEmits<{
//   someEvent: [];
//   increaseBy: [n: number];
// }>();
</script>

<template>
  <h1>event component</h1>
  <button @click="$emit('someEvent')">some event</button>
  <button @click="$emit('increaseBy', 1)">Increase by 1</button>
</template>
