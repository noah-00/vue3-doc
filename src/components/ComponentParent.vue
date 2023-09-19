<script setup lang="ts">
import { ref, type DefineComponent } from "vue";
import ComponentChild from "./ComponentChild.vue";
import ComponentList from "./ComponentList.vue";

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
</script>
<template>
  <div>
    <h1>Here is a child component!</h1>
    <ComponentChild title="title from parent"> slot </ComponentChild>
    <ComponentChild :isShow="false"> slot 2 </ComponentChild>
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
</template>
