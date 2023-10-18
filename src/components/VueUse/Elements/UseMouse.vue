<script setup lang="ts">
// vue use
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();

// composables
import { useMouse as useMouseComposable } from "@/reuse/composables/mouse";
const { x: x_composables, y: y_composables } = useMouseComposable();
</script>

<template>
  <h1>useMouse</h1>
  <div>
    <p>vue use</p>
    {{ x }} {{ y }}
  </div>
  <div>
    <p>composables</p>
    {{ x_composables }} {{ y_composables }}
  </div>
</template>
