<script setup lang="ts">
import { computed, reactive, ref, toRef, toValue } from "vue";

// ---------------------- toRef ----------------------
const memberInfo = reactive({
  name: "Mike",
  state: 2,
});
const memberInfoName = toRef(memberInfo, "name");
// memberInfoName is reactive
memberInfoName.value = "Jane";
console.log(memberInfoName.value, "memberInfoName.value");
// memberInfoName.value is Jane
console.log(memberInfo.name, "memberInfo.name");
// memberInfo.name is Jane

// ---------------------- Getter ----------------------
const memberInfoWithFamily = reactive({
  name: "Mike",
  state: 2,
  family: {
    father: "John",
    mother: "Jane",
  },
});
// Getter using computed
// it is working, but it is not efficient
const motherName = computed((): string | undefined => {
  return memberInfoWithFamily.family?.mother;
});
console.log(motherName.value, "motherName.value");
memberInfoWithFamily.family.mother = "Jane Doe";
console.log(motherName.value, "motherName.value");

// replace computed with toRef
const motherNameWithToRef = toRef((): string | undefined => {
  return memberInfoWithFamily.family?.mother;
});

// ---------------------- toValue ----------------------
const memberName = ref("田中太郎");
const memberNameValue = toValue(memberName);
// memberNameValue is just a string

const motherNameWithToValue = toValue((): string | undefined => {
  return memberInfoWithFamily.family?.mother;
});
// motherNameWithToValue is just a string
</script>

<template>
  <h1>toRef toValue</h1>
</template>
