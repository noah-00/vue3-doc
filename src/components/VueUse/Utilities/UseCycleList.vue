<script setup lang="ts">
import { useCycleList } from "@vueuse/core";
import { ref } from "vue";

// const list = ref(["Dog", "Cat", "Lizard", "Shark", "Whale", "Dolphin", "Octopus", "Seal"]);

const deepList = ref([
  { name: "Dog", type: "mammal" },
  { name: "Cat", type: "mammal" },
  { name: "Lizard", type: "reptile" },
  { name: "Shark", type: "fish" },
  { name: "Whale", type: "mammal" },
  { name: "Dolphin", type: "mammal" },
  { name: "Octopus", type: "mollusk" },
  { name: "Seal", type: "mammal" },
]);

const { state, next, prev } = useCycleList(deepList);
</script>

<template>
  <div>
    <div class="text-primary text-lg font-bold">
      <p>name: {{ state.name }}</p>
      <p>type: {{ state.type }}</p>
    </div>
    <button @click="prev()">Prev</button>
    <button @click="next()">Next</button>
  </div>
</template>
