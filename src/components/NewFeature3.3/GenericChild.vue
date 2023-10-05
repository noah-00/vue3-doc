<script setup lang="ts" generic="CN">
type Props = {
  classSizeList: Map<CN, number>;
  focused: CN;
};

const props = defineProps<Props>();
console.log(props);
</script>

<template>
  <ul>
    <li v-for="(value, key) in props.classSizeList" :key="key">
      <span v-if="value[0] === focused">!!</span>
      {{ value[1] }}
    </li>
  </ul>
</template>
