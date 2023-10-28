<script setup lang="ts">
import { isDefined } from "@vueuse/core";
import { ref } from "vue";

const example = ref(Math.random() ? "example" : undefined); // Ref<string | undefined>

if (isDefined(example)) example; // Ref<string
</script>

<template>
  <div></div>
</template>
