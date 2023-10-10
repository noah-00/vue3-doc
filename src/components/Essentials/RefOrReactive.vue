<!-- <script setup lang="ts">
import { ref } from "vue";

const age = ref(20);

const handleClick = () => {
  age.value++;
};
</script>

<template>
  <p>{{ age }}</p>
  <button @click="age++">Increment</button>
  <button @click="handleClick">Increment</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive } from "vue";

const age = reactive({ value: 20 });

const handleClick = () => {
  age.value++;
};
</script>

<template>
  <p>{{ age.value }}</p>
  <button @click="age.value++">Increment</button>
  <button @click="handleClick">Increment</button>
</template> -->

<!------------------------ object ------------------------------------->
<!-- <script setup lang="ts">
import { ref } from "vue";

const pokemon = ref({
  name: "ピカチュウ",
  type: "電気",
  level: 20,
});

const levelUp = () => {
  pokemon.value.level++;
};
</script>

<template>
  <p>{{ pokemon.name }} - {{ pokemon.type }} - Lv.{{ pokemon.level }}</p>
  <button @click="levelUp">Level up</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive } from "vue";

const pokemon = reactive({
  name: "ピカチュウ",
  type: "電気",
  level: 20,
});

const levelUp = () => {
  pokemon.level++;
};
</script>

<template>
  <p>{{ pokemon.name }} - {{ pokemon.type }} - Lv.{{ pokemon.level }}</p>
  <button @click="levelUp">Level up</button>
</template> -->

<!------------------------ array ------------------------------------->
<!-- <script setup lang="ts">
import { ref } from "vue";

const pokemons = ref(["ピカチュウ", "リザードン", "フシギバナ"]);

const addPokemon = (newPokemon: string) => {
  pokemons.value.push(newPokemon);
};
</script>

<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon">{{ pokemon }}</li>
  </ul>
  <button @click="addPokemon('カメックス')">カメックス ゲット</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive } from "vue";

const pokemons = reactive(["ピカチュウ", "リザードン", "フシギバナ"]);

const addPokemon = (newPokemon: string) => {
  pokemons.push(newPokemon);
};
</script>

<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon">{{ pokemon }}</li>
  </ul>
  <button @click="addPokemon('カメックス')">カメックス ゲット</button>
</template> -->

<!------------------------ division and assignment-------------------------->
<!-- <script setup lang="ts">
import { ref, toRefs } from "vue";

const pokemon = ref({
  name: "ピカチュウ",
  type: "電気",
  level: 20,
});

const { name, type, level } = toRefs(pokemon.value);
</script>

<template>
  <p>名前: {{ pokemon.name }}</p>
  <p>タイプ: {{ pokemon.type }}</p>
  <p>レベル: {{ pokemon.level }}</p>
  <button @click="pokemon.level++">Level up</button>

  こちらの上下のコードは同じ値が出力されます

  <p>名前: {{ name }}</p>
  <p>タイプ: {{ type }}</p>
  <p>レベル: {{ level }}</p>
  <button @click="level++">Level up</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive } from "vue";

const pokemon = reactive({
  name: "ピカチュウ",
  type: "電気",
  level: 20,
});

const { name, type, level } = pokemon;
</script>

<template>
  <p>名前: {{ name }}</p>
  <p>タイプ: {{ type }}</p>
  <p>レベル: {{ level }}</p>
  <button @click="level++">Level up</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive, toRefs } from "vue";

const pokemon = reactive({
  name: "ピカチュウ",
  type: "電気",
  level: 20,
});

const { name, type, level } = toRefs(pokemon);
</script>

<template>
  <p>名前: {{ pokemon.name }}</p>
  <p>タイプ: {{ pokemon.type }}</p>
  <p>レベル: {{ pokemon.level }}</p>
  <button @click="pokemon.level++">Level up</button>

  こちらの上下のコードは同じ値が出力されます

  <p>名前: {{ name }}</p>
  <p>タイプ: {{ type }}</p>
  <p>レベル: {{ level }}</p>
  <button @click="level++">Level up</button>
</template> -->

<!-- <script setup lang="ts">
import { ref } from "vue";

const pokemon = ref({
  name: "ピカチュウ",
  level: 20,
});

const changePokemon = () => {
  pokemon.value = { name: "カメックス", level: 40 };
};
</script>

<template>
  <p>名前: {{ pokemon.name }}</p>
  <p>レベル: {{ pokemon.level }}</p>
  <button @click="changePokemon()">カメックスと交換</button>
</template> -->

<!-- <script setup lang="ts">
import { reactive } from "vue";

const pokemon = reactive({
  name: "ピカチュウ",
  level: 20,
});

const changePokemon = () => {
  // pokemon = { name: "カメックス", level: 40 };
};
</script>

<template>
  <p>名前: {{ pokemon.name }}</p>
  <p>レベル: {{ pokemon.level }}</p>
  <button @click="changePokemon()">カメックスと交換</button>
</template> -->
