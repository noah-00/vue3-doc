<script setup lang="ts">
import { ref } from "vue";
import GenericChild from "./GenericChild.vue";

const classSizeNoInit = new Map<number, number>();
classSizeNoInit.set(1, 35);
classSizeNoInit.set(2, 34);
const classSizeNo = ref(classSizeNoInit);
console.log(classSizeNo);
const focusedClassNo = ref(1);

const classSizeCharInit = new Map<string, number>();
classSizeCharInit.set("A", 35);
classSizeCharInit.set("B", 34);
const classSizeChar = ref(classSizeCharInit);
const focusedClassChar = ref("B");
</script>

<template>
  <section>
    <h2>Number of pairs 1-6</h2>
    <GenericChild
      v-bind:classSizeList="classSizeNo"
      v-bind:focused="focusedClassNo"
    />
  </section>
  <section>
    <h2>Number of A to F groups</h2>
    <GenericChild
      v-bind:classSizeList="classSizeChar"
      v-bind:focused="focusedClassChar"
    />
  </section>
</template>
