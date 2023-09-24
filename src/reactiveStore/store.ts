import { reactive } from "vue";

type Store = {
  count: number;
  increment: () => void;
};

export const store = reactive<Store>({
  count: 0,
  increment() {
    this.count++;
  },
});

// import { store } from "@/reactiveStore/store";
// <div>{{ store }}</div>
// <button @click="store.increment()">
//   {{ store }}
// </button>
