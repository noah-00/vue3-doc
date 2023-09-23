<script setup lang="ts">
import { shallowRef } from "vue";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";

const current = shallowRef(CompA);
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <!-- Can hold a value -->
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
    <!-- Can hold only value of CompA -->
    <KeepAlive :include="['CompA']">
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
