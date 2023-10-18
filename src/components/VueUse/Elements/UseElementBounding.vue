<script setup lang="ts">
import { reactive, ref } from "vue";
import { useElementBounding } from "@vueuse/core";

const el = ref(null);
const rect = reactive(useElementBounding(el));
</script>

<template>
  <div style="min-height: 300px">
    <note> Resize the box to see changes </note>
    <textarea ref="el" readonly class="resizer" />
    <div>
      {{ rect }}
    </div>
  </div>
</template>
