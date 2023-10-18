<script setup lang="ts">
import { ref } from "vue";
import { useDropZone } from "@vueuse/core";

const dropZoneRef = ref<HTMLDivElement>();

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
  console.log(files);
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
  <div ref="dropZoneRef">Drop files here</div>
  {{ isOverDropZone }}
</template>
