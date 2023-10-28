<script setup lang="ts">
import { useArrayDifference } from "@vueuse/core";
import { ref } from "vue";

const list1 = ref([0, 1, 2, 3, 4, 5]);
const list2 = ref([4, 5, 6]);
const result = useArrayDifference(list1, list2);
console.log("🚀 ~ file: UseArrayDifference.vue:8 ~ result:", result.value);
// result.value: [0, 1, 2, 3]
list2.value = [0, 1, 2];
// result.value: [3, 4, 5]
console.log("🚀 ~ file: UseArrayDifference.vue:12 ~ result:", result.value);

const deepList1 = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
const deepList2 = ref([{ id: 4 }, { id: 5 }, { id: 6 }]);

const result2 = useArrayDifference(deepList1, deepList2, (value, othVal) => value.id === othVal.id);
console.log("🚀 ~ file: UseArrayDifference.vue:19 ~ result2:", result2.value);
// result.value: [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>

<template>
  <div></div>
</template>
