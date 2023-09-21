<script setup lang="ts">
import { ref, onMounted } from "vue";

const input = ref<HTMLInputElement | null>(null);
onMounted(() => {
  input.value?.focus();
  console.log(itemRefs.value?.map((item) => console.log(item)));
});

const list = ref([1, 2, 3]);
const itemRefs = ref([]);
</script>

<template>
  <input ref="input" />

  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>

  <input
    :ref="
      (el) => {
        console.log(el); //function is called each time the component is updated
      }
    "
  />
</template>
