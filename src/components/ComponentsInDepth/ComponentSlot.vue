<script setup lang="ts">
type SlotsProps = {
  default?: (props: { text: string; count: number }) => any;
};
defineSlots<SlotsProps>();
</script>

<template>
  <!--------------------named slot --------------------->
  <!-- <button class="fancy-btn">
    <slot>submit</slot>
  </button>
  <div>
    <h1>first content</h1>
    <slot name="first"></slot>
  </div>
  <div>
    <h1>second content</h1>
    <slot name="second"></slot>
  </div> -->

  <!--------------------Scoped Slots--------------------->
  <slot :text="'hello'" :count="1"></slot>
</template>

<!--
ComponentSlot({
  first: `...`,
  second: `...`,
})

function ComponentSlot(slots) {
  return `
  <div>
    <div>
      <h1>first content</h1>
      <div>${slots.first}</div>
    </div>
    <div>
      <h1>second content</h1>
      <div>${slots.second}</div>
    </div>
  </div>`
} -->
