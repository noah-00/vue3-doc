<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

const question = ref("");
const answer = ref("");

watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") === -1) {
    answer.value = "type a question mark in end of your question";
    return;
  }
  answer.value = "Thank you for your question";
});

// object
const obj = reactive({ count: 0 });

// it doesn't work
// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`);
// });
// instead of this:
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`);
  }
);
// { deep: true }
// { immediate: true }

const todoId = ref(1);
const data = ref(null);

watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    data.value = await response.json();
  },
  { immediate: true }
);

// watchEffect ↓ ↓ ↓
const stop = watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  data.value = await response.json();
});

// If you want to stop watching, you can call the stop function.
// stop()
</script>

<template>
  <div>
    <h1>Watch</h1>
    <input v-model="question" />
    <p>{{ answer }}</p>
  </div>

  <div>
    <h1>Watch</h1>
    <p>{{ obj.count }}</p>
    <button @click="obj.count++">count up</button>
  </div>
</template>
