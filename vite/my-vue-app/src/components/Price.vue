<script setup>
import { defineProps } from "vue";

const props = defineProps({
  value: {
    type: Number,
  },
  prefix: {
    type: String,
    default: "$",
  },
  precision: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <span>{{ prefix + Number.parseFloat(value).toFixed(precision) }}</span>
</template>
