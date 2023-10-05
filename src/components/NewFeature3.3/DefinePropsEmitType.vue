<script setup lang="ts">
// ------------------ before 3.3 ------------------
// interface Props {
//   id: number;
//   name: string;
// }
// interface Emits {
//   (event: "incrementPoint", id: number): void;
// }
// const props = defineProps<Props>();
// const emit = defineEmits<Emits>();

// ------------------ after 3.3 ------------------
import type { Props as PropsOrgin, NewEmitsType } from "../../utils/Type";

// and you can use extends to add new props
// Props = { id: number, name: string } & { note: string };
interface Props extends PropsOrgin {
  note: string;
}

const props = defineProps<Props>();
const emit = defineEmits<NewEmitsType>();
</script>

<template>
  <div></div>
</template>
