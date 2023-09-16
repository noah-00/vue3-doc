<script setup lang="ts">
const msg: string = "Hello Vue 3 + TypeScript + Vite";
const id = "templateLiteral";
const isButtonDisabled = true;
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
};
const number = 1;
const ok = true;
const message = "hello";
</script>

<template>
  <div>templateLiteral.vue</div>
  <div>aa</div>
  <div>{{ msg }}</div>
  <div :id="id">
    id
    <!--　id = templateLiteral -->
  </div>
  <button :disabled="isButtonDisabled">Button</button
  ><!-- it doesn't work -->
  <div v-bind="objectOfAttrs">
    <!-- id = container  -->
    <!-- class = wrapper -->
    a
  </div>

  {{ number + 1 }}
  {{ ok ? "YES" : "NO" }}
  {{ message.split("").reverse().join("") }}
  <div :id="`list-${id}`">list-templateLiteral</div>
</template>
