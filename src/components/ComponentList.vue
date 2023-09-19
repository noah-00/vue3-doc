<script setup lang="ts">
// props
defineProps(["title"]);

// emits
const emit = defineEmits(["click-button"]);
emit("click-button");
</script>
<template>
  <h1>{{ title }}</h1>
  <button @click="$emit('click-button')">alert title</button>
</template>
