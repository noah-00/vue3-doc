<script setup lang="ts">
import { ref, type DefineComponent } from "vue";
import ComponentChild from "./ComponentChild.vue";
import ComponentList from "./ComponentList.vue";
import ComponentEvent from "./ComponentEvent.vue";
import ComponentVModel from "./ComponentVModel.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

// :is
import Watch from "./Watch.vue";
import Ref from "./Ref.vue";
const currentTab = ref<"Watch" | "Ref">("Watch");
const tabs: Record<string, DefineComponent> = {
  Watch,
  Ref,
};

// v-bind props of object
const post = {
  title: "title from parent",
  isShow: true,
};

// --------------------- component v-model ---------------------
const modelValueFirst = ref("");
const modelValueLast = ref("");
</script>
<template>
  <div>
    <h1>Here is a child component!</h1>
    <ComponentChild title="title from parent"> slot </ComponentChild>
    <ComponentChild :is-show="false"> slot 2 </ComponentChild>
    <!-- ↓ is-show = true disabled = true-->
    <ComponentChild is-show disabled> slot 3 </ComponentChild>

    <!-- v-bind props of object :id="post.id" :title="post.title" -->
    <ComponentChild v-bind="post"> slot 4 </ComponentChild>
  </div>

  <div>
    <ComponentList
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @click-button="() => console.log(post.title)"
    />
  </div>

  <div id=":is">
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>

  <!--               event                       -->
  <ComponentEvent
    @someEvent="() => console.log('someEvent')"
    @increase-by="(n: number) => console.log(n)"
  />

  <!--             component v-model               -->
  <div>
    <!-- <ComponentVModel v-model="modelValue" /> -->
    <ComponentVModel
      v-model:first-name="modelValueFirst"
      v-model:last-name="modelValueLast"
    />
    <p>modelValue: {{ modelValueFirst + modelValueLast }}</p>

    <ComponentVModel
      v-model:first-name.capitalize="modelValueFirst"
      v-model:last-name="modelValueLast"
    />
  </div>
</template>
