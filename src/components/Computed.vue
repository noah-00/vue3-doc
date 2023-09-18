<script setup lang="ts">
import { computed, ref } from "vue";

const inputText = ref("");
const computedText = computed(() => {
  return inputText.value.length;
});

// Date.now() はリアクティブな依存ではないため、次の算出プロパティは二度と更新されないことを意味します:
const now = computed(() => Date.now());
</script>

<template>
  <div>
    <h1>Computed</h1>
    <input v-model="inputText" />
    <p>Input text: {{ computedText }}</p>
  </div>
</template>
