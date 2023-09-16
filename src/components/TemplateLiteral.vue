<script setup lang="ts">
import { ref } from "vue";

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

const vif = ref(true);
const type = ref("A");
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

  <!-- v-if v-else -->
  <button @click="vif = !vif">v-if</button>
  <div v-if="vif">v-if</div>
  <div v-else>v-else</div>

  <!-- v-if v-else-if v-else -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <!-- v-show -->
  <button @click="vif = !vif">v-show</button>
  <div v-show="vif">v-show</div>
</template>
