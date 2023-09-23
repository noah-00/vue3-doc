<script setup lang="ts">
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await res.json();
</script>

<template>
  {{ posts }}
</template>
