<script setup lang="ts">
import { ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
watch(targetIsVisible, (value) => {
  console.log(value);
});
</script>

<template>
  <div style="height: 200vh">
    <div ref="target">target element</div>
  </div>
</template>
