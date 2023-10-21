<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, "modelValue", emit);
</script>

<template>
  <input v-model="data" />
</template>
