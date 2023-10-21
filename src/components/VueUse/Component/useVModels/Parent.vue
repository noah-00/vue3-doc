<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";

const name = ref<string>("Ishizaka");
const email = ref<string>("test@gmai.com");
</script>

<template>
  <h1>use VModels</h1>
  <div>name:{{ name }}</div>
  <div>email:{{ email }}</div>
  <Child v-model:name="name" v-model:email="email" />
</template>
