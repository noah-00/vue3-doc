<script setup lang="ts">
import { reactive, ref } from "vue";

const items = ref([
  { message: "Foo", id: 1 },
  { message: "Bar", id: 2 },
]);

const myObject = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});
</script>

<template>
  <li v-for="(item, index) in items" :key="item.message">
    {{ index + "-" + item.message }}
  </li>
  <!-- Split assignment is possible-->
  <li v-for="({ message }, index) in items" :key="message">
    {{ message + "-" + index }}
  </li>

  <!-- Objects can be looped  -->
  <li v-for="(value, index) in myObject" :key="index">
    {{ value }}
  </li>

  <!-- Objects can be looped. key,value can be output. -->
  <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
  <li v-for="(value, key, index) in myObject" :key="index">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <!-- 10 times loop Integer can also be turned -->
  <span v-for="n in 10" :key="n">{{ n }}</span>

  <!-- If you want to use v-for and v-if in the same place is like this -->
  <!-- <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template> -->

  <!-- Component Loop -->
  <!-- <MyComponent
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
  /> -->
</template>
