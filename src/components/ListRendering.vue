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
  <!-- 分割代入が可能 -->
  <li v-for="({ message }, index) in items" :key="message">
    {{ message + "-" + index }}
  </li>

  <!-- オブジェクトをループ可能  -->
  <li v-for="(value, index) in myObject" :key="index">
    {{ value }}
  </li>

  <!-- オブジェクトをループ可能 key,valueを出力することも可能 -->
  <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
  <li v-for="(value, key, index) in myObject" :key="index">
    {{ index }}. {{ key }}: {{ value }}
  </li>

  <!-- 10回ループ 整数で回すことも可能 -->
  <span v-for="n in 10" :key="n">{{ n }}</span>

  <!-- v-for と　v-ifを同じところで使いたい場合 is like this -->
  <!-- <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template> -->

  <!-- コンポーネントのループ -->
  <!-- <MyComponent
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
  /> -->
</template>
