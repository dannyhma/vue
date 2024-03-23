<script setup>
import { ref } from "vue";

const props = defineProps({
  value: Number,
  prefix: {
    type: String,
    default: "Rp",
  },
  precision: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <span>{{
    this.prefix + Number.parseFloat(this.value).toFixed(this.precision)
  }}</span>
</template>
