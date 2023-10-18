<script setup lang="ts">
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";

const Ref = ref<HTMLDivElement>();
const { width, height } = useElementSize(Ref);
</script>

<template>
  <textarea ref="Ref"></textarea>
  <div>{{ width }} x {{ height }}</div>
</template>
