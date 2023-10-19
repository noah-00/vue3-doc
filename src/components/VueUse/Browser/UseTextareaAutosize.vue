<script setup lang="ts">
import { useTextareaAutosize } from "@vueuse/core";
const { textarea, input } = useTextareaAutosize();
</script>

<template>
  <textarea ref="textarea" v-model="input" class="resize-none" placeholder="What's on your mind?" />
</template>
