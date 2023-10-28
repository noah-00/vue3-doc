<script setup lang="ts">
import { useArrayJoin } from "@vueuse/core";
import { ref } from "vue";

const item1 = ref("foo");
const item2 = ref(0);
const item3 = ref({ prop: "val" });
const list = [item1, item2, item3];
const result = useArrayJoin(list);
console.log("🚀 ~ file: UseArrayJoin.vue:10 ~ result:", result.value);
// result.value: foo,0,[object Object]
item1.value = "bar";
// result.value: bar,0,[object Object]
console.log("🚀 ~ file: UseArrayJoin.vue:14 ~ result.value:", result.value);
</script>

<template>
  <div></div>
</template>
