<script setup lang="ts">
import { ref, type Ref } from "vue";

// ---------------------- v-text ----------------------
const msg: Ref<string> = ref("Hello World!");
</script>

<template>
  <!------------------- v-text -------------------------->
  <span v-text="msg"></span>
  <!-- same as -->
  <span>{{ msg }}</span>

  <!------------------- v-once -------------------------->
  <!-- if msg changes, the text will not change -->
  <div v-once>v-once: {{ msg }}</div>
  <input type="text" v-model="msg" />

  <!------------------- v-memo -------------------------->
  <!-- same as v-once, but only for reactive data -->
  <div v-memo="[]">v-memo : {{ msg }}</div>
  <!-- if msg changes, the text will not change -->
  <div v-memo="[msg]">v-memo : {{ msg }}</div>
</template>
