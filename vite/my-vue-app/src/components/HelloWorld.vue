<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="container mx-auto text-3xl font-bold text-red-800">
    Hello world!
  </h1>
</template>
