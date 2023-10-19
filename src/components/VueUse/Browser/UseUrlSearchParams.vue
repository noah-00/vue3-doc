<script setup lang="ts">
import { useUrlSearchParams } from "@vueuse/core";

const params = useUrlSearchParams("history");

console.log(params.p); //http://localhost:5173/?p=params
</script>

<template>
  <h1>useUrlSearchParams</h1>
</template>
