<script setup lang="ts">
// import TemplateLiteral from "./components/Essentials/TemplateLiteral.vue";
// import ListRendering from "./components/Essentials/ListRendering.vue";
// import Computed from "./components/Essentials/Computed.vue";
// import EventHnadling from "./components/Essentials/EventHandling.vue";
// import Form from "./components/Essentials/Form.vue";
// import LifeCycleHook from "./components/Essentials/LifeCycleHook.vue";
// import Watch from "./components/Essentials/Watch.vue";
// import Ref from "./components/Essentials/Ref.vue";
// import ComponentParent from "./components/ComponentsInDepth/ComponentParent.vue";
// import FallthroughAttributes from "./components/ComponentsInDepth/ComponentFallthroughAttributes.vue";
// import ComponentSlot from "./components/ComponentsInDepth/ComponentSlot.vue";

// -------------------provide / inject----------------------------
// ComponentProvideInjectDeepChild.vue
import ComponentProvideInjectParent from "./components/ComponentsInDepth/ComponentProvideInjectParent.vue";
import { ref, provide, readonly } from "vue";
import { CountInjectKey } from "@/utils/Keys";
const count = ref(0);
// provide("count", count);

// readonly() is a function that returns a readonly proxy of the original object.
// provide("count", readonly(count));

// it is better to use a symbol as the key
provide(CountInjectKey, readonly(count));
// ---------------------------------------------------------------
</script>

<template>
  <div>
    <!-- <TemplateLiteral /> -->
    <!-- <ListRendering /> -->
    <!-- <Computed /> -->
    <!-- <EventHnadling /> -->
    <!-- <Form /> -->
    <!-- <LifeCycleHook /> -->
    <!-- <Watch /> -->
    <!-- <Ref /> -->
    <!-- <ComponentParent /> -->
    <!-- <ComponentGlobal /> -->
    <!-- <FallthroughAttributes
      class="large"
      id="id"
      @click="console.log('clicked click me')"
    /> -->

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
  </div>
</template>
