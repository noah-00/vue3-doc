<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);
const mouse = reactive(useMouseInElement(target));
</script>

<template>
  <div flex="~" gap="4">
    <div ref="target" class="target_div" />
    <pre lang="yaml">{{ mouse }}</pre>
  </div>
</template>

<style scoped>
.target_div {
  width: 200px;
  height: 200px;
  background-color: #eee;
}
</style>
