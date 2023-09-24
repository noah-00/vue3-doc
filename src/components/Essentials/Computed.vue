<script setup lang="ts">
import { computed, ref } from "vue";

const inputText = ref("");
const computedText = computed(() => {
  return inputText.value.length;
});

// Date.now() is not a reactive dependency, meaning that the following calculated properties will never be updated again:
const now = computed(() => Date.now());

// ------------------ type script ------------------
const nowTs = computed<number>(() => Date.now());
</script>

<template>
  <div>
    <h1>Computed</h1>
    <input v-model="inputText" />
    <p>Input text: {{ computedText }}</p>
  </div>
</template>
