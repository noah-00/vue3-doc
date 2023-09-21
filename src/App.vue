<script setup lang="ts">
// import TemplateLiteral from "./components/TemplateLiteral.vue";
// import ListRendering from "./components/ListRendering.vue";
// import Computed from "./components/Computed.vue";
// import EventHnadling from "./components/EventHandling.vue";
// import Form from "./components/Form.vue";
// import LifeCycleHook from "./components/LifeCycleHook.vue"
// import Watch from "./components/Watch.vue";
// import Ref from "./components/Ref.vue";
// import ComponentParent from "./components/ComponentParent.vue";
import FallthroughAttributes from "./components/ComponentFallthroughAttributes.vue";
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
    <FallthroughAttributes
      class="large"
      id="id"
      @click="console.log('clicked click me')"
    />
  </div>
</template>
