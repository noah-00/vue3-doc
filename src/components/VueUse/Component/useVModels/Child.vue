<script setup lang="ts">
import { useVModels } from "@vueuse/core";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ name: string; email: string }>();
const emit = defineEmits(["update:name", "update:email"]);
const { name, email } = useVModels(props, emit);
</script>

<template>
  <input v-model="name" />
  <input v-model="email" />
</template>
