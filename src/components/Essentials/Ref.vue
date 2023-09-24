<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";

const input = ref<HTMLInputElement | null>(null);
onMounted(() => {
  input.value?.focus();
  console.log(itemRefs.value?.map((item) => console.log(item)));
});

const list = ref([1, 2, 3]);
const itemRefs = ref([]);

// ------------------ type script ------------------

// Ref<number | undefined>
const n = ref<number>();
const listTs: Ref<number[]> = ref([1, 2, 3]);
const itemRefsTs: Ref<string[]> = ref([]);
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
