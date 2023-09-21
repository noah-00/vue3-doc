<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const name = ref("Vue.js");

const handleClick = () => {
  alert("clicked");
};

const say = (message: string) => {
  alert(message);
};

const warn = (message: string, event: Event) => {
  // get current event
  if (event) event.preventDefault();
  alert(message);
};
</script>

<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>

  <button @click="handleClick">handleClick</button>

  <button @click="say('Hello')">say</button>

  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

  <!-- Propagation of click events is stopped -->
  <!-- <a @click.stop="doThis"></a> -->

  <!-- Submit events no longer reload the page -->
  <!-- <form @submit.prevent="onSubmit"></form> -->

  <!-- Modifiers can be connected -->
  <!-- <a @click.stop.prevent="doThat"></a> -->

  <!-- It can be used just as a modifier -->
  <!-- <form @submit.prevent></form> -->

  <!-- The handler is called only if event.target is an element itself.-->
  <!-- That is, if it is a child element -->
  <!-- <div @click.self="doThat">...</div> -->

  <!-- about @keyup -->
  <!--
    .enter
    .tab
    .delete (captures both “Delete” and “Backspace” keys)
    .esc
    .space
    .up
    .down
    .left
    .right
  -->

  <!-- about system -->
  <!--
    .ctrl
    .alt
    .shift
    .meta
  -->

  <!-- about exact -->
  <!-- This will fire even if the Alt or Shift key is pressed. -->
  <!-- <button @click.ctrl="onClick">A</button> -->
  <!-- This is only issued when the Ctrl key is pressed and no other keys are pressed -->
  <!-- <button @click.ctrl.exact="onCtrlClick">A</button> -->
  <!-- This is only issued when no system modifier is pressed -->
  <!-- <button @click.exact="onClick">A</button> -->

  <!-- about mouse -->
  <!--
    .left
    .right
    .middle
  -->
</template>
