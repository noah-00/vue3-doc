<script setup lang="ts">
import { onErrorCaptured, ref, type Ref } from "vue";
import FetchComponent from "./fetch.vue";

const error: Ref<any> = ref(null);

onErrorCaptured((err) => {
  console.log(err);
  console.log("Error captured");
  error.value = err;
});
</script>

<template>
  <div v-if="error">
    {{ error }}
  </div>
  <Suspense>
    <template #default>
      <FetchComponent />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>
