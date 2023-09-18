<script setup lang="ts">
import { ref } from "vue";

const message = ref("");
const multipleMessage = ref("");
const checkedNames = ref([]);
const picked = ref("One");
const multipleSelected = ref([]);
const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);
const age = ref(0);
const trimMessage = ref("");
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <p>Multiline message is:</p>
  <p style="white-space: pre-line">{{ multipleMessage }}</p>
  <textarea
    v-model="multipleMessage"
    placeholder="add multiple lines"
  ></textarea>

  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <p>Selected: {{ selected }}</p>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>multipleSelected: {{ multipleSelected }}</div>
  <div>
    <select v-model="multipleSelected" multiple>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>

  <!-- options -->
  <input v-model.lazy="message" placeholder="lazy input" />
  <input v-model.number="age" placeholder=".number" />
  <input v-model.trim="trimMessage" />
  <p>Trimmed message: "{{ trimMessage }}"</p>
</template>
