<script setup lang="ts">
import { inject } from "vue";
import { CountInjectKey } from "@/utils/Keys";

const count = inject(CountInjectKey, 0);
// inject("key", defaultValue)
// inject("key") // if no default value, it will throw an error
</script>
<template>
  <div>
    <h1>here is deep child component</h1>
    <p>Count from App.vue: {{ count }}</p>
    <button @click="count++">count up</button>
  </div>
</template>
