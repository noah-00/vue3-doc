<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useDisplayMedia } from "@vueuse/core";

const video = ref<HTMLVideoElement>();
const { stream, enabled } = useDisplayMedia();

watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value!;
});
</script>

<template>
  <div>
    <div>
      <button @click="enabled = !enabled">
        {{ enabled ? "Stop" : "Start" }} sharing my screen
      </button>
    </div>

    <div>
      <video ref="video" muted autoplay controls class="video" />
    </div>
  </div>
</template>

<style scoped>
.video {
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
</style>
