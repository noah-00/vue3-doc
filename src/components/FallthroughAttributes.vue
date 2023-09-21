<script setup lang="ts">
// If you do not want components to automatically inherit attributes
defineOptions({
  inheritAttrs: false,
});

// Accessing fall-through attributes within JavaScript
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>

<template>
  <!-- 　　　　　　　　Only a single root element　　　　　　　 -->
  <!--
    <FallthroughAttributes class="large" />
  　　　　　　　　　　　⇩
    <button class="large">click me</button>
  -->
  <!-- <button>click me</button> -->

  <!---------------------------------------------------------------->

  <!--
    <FallthroughAttributes class="large" />
  　　　　　　　　　　　⇩
    <button class="large btn">click me</button>
  -->
  <!-- <button class="btn">click me</button> -->

  <!---------------------------------------------------------------->

  <!--
    <FallthroughAttributes  @click="console.log('clicked click me')" />
  　　　　　　　　　　　⇩
    <button  @click="console.log('clicked click me')">click me</button>
  -->
  <!-- <button>click me</button> -->

  <!---------------------------------------------------------------->
  <!-- $attrs = { "class": "large", "id": "id" } -->

  <!-- <button class="btn" v-bind="$attrs">click me</button> -->
  <!--                     ⇩ 　　　　　　　　　　　　　　　　　　　 -->
  <!-- <button class="large btn" id="id">click me</button> -->
  <div>
    <button class="btn" v-bind="$attrs">click me</button>
    <span>Fallthrough attributes: {{ $attrs }}</span>
  </div>
</template>
