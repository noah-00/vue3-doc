<script setup lang="ts">
// import ComponentSlot from "@/components/ComponentsInDepth/ComponentSlot.vue";

// -------------------provide / inject----------------------------
// ComponentProvideInjectDeepChild.vue
import ComponentProvideInjectParent from "@/components/ComponentsInDepth/ComponentProvideInjectParent.vue";
import { ref, provide } from "vue";
import { CountInjectKey } from "@/utils/Keys";
const count = ref<number>(0);
provide(CountInjectKey, count);

// readonly() is a function that returns a readonly proxy of the original object.
// provide("count", readonly(count));

// it is better to use a symbol as the key
// provide(CountInjectKey, readonly(count));
</script>

<template>
  <!----------------------- slot ----------------------------------->
  <!-- <ComponentSlot>
      <span>Click me</span>
      <span>+</span>
      <span>additional</span>
      <Computed />
      everything is ok
    </ComponentSlot> -->

  <!-- <ComponentSlot></ComponentSlot> -->
  <!-- <button class="fancy-btn">send</button>　-->
  <!-- <ComponentSlot>保存</ComponentSlot> -->
  <!-- <button class="fancy-btn">save</button>　-->

  <!--------------------named slot----------------------------->
  <!-- <ComponentSlot>
      <p>save</p>
      <template v-slot:first>
        <span>first slot</span>
      </template>
      <template #second>
        <span>second slot</span>
      </template>
      <template v-slot:[dynamicSlotName]>dynamicSlotName</template>
    </ComponentSlot> -->

  <!--------------------Scoped Slots-------------------------->
  <!-- v-slot="slotProps
    or
    <ComponentSlot v-slot="{ text, count }">
      {{ text }} {{ count }}
      hello 1
    </ComponentSlot> -->

  <!-------------------Provide / Inject------------------------>
  <ComponentProvideInjectParent />
</template>
