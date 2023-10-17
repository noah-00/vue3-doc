<script setup lang="ts">
import { ref, watch } from "vue";
import { useWindowFocus } from "@vueuse/core";

const startMessage = "👋 Hello there. Click away and come back!";
const message = ref(startMessage);
const focused = useWindowFocus();

watch(focused, (isFocused) => {
  if (isFocused) message.value = startMessage;
  else message.value = "👋 Come back!";
});
</script>

<template>
  <div>{{ message }}</div>
</template>
