<template>
  <div>
    <h2>Examples</h2>
    <ul>
      <li v-for="example in examples" :key="example.id">
        {{ example.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, triggerRef, watchEffect } from "vue";

type Example = {
  id: number;
  name: string;
};

const examples = shallowRef<Example[]>([
  { id: 1, name: "Example 1" },
  { id: 2, name: "Example 2" },
  { id: 3, name: "Example 3" },
]);

watchEffect(() => {
  console.log("Detected a change in examples:", examples.value);
});

// watchEffect is not triggered when the value of an object inside the array changes
examples.value[0].name = "Updated Example 1";

// triggerRef is used to trigger a watchEffect
triggerRef(examples); // console.log → examples contain the 3 objects

// watchEffect is triggered when the value of the array changes
examples.value = [
  { id: 4, name: "Example 4" },
  { id: 5, name: "Example 5" },
]; // console.log → examples contain the 2 objects
</script>
