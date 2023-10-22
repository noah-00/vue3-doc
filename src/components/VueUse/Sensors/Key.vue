<script setup lang="ts">
defineProps<{
  value: boolean;
}>();
</script>

<template>
  <div class="font-mono px-4 py-2 rounded" :class="value ? 'bg-blue-600' : 'bg-gray-600'">
    <slot />
  </div>
</template>
