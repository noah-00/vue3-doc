<script setup lang="ts">
import { usePreferredLanguages } from "@vueuse/core";

const languages = usePreferredLanguages();
</script>

<template>
  <h1>usePreferredLanguages</h1>
  <p>
    your preferred languages are: <b>{{ languages.join(", ") }}</b>
  </p>
</template>
