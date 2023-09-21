<script setup lang="ts">
import type { PropType } from "vue";

// defineProps(["modelValue"]);
// defineEmits(["update:modelValue"]);

// --------------------- component multiple v-model ---------------------
const props = defineProps({
  firstName: String,
  lastName: String,
  //  ---- custom modifier References v-model:first-name.capitalize ------
  firstNameModifiers: Object as PropType<{
    capitalize: boolean;
  }>,
});

const emit = defineEmits(["update:firstName", "update:lastName"]);

function emitValue(e: any) {
  let value = e.target.value;
  if (props.firstNameModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:firstName", value);
}
</script>

<template>
  <input type="text" :value="firstName" @input="emitValue" />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
