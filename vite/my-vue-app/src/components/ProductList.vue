<script setup>
import { computed, defineProps } from "vue";
import Price from "./Price.vue";

const props = defineProps(["products", "maximum"]);

const showItems = computed(() => {
  return props.products.filter((item) => item.price <= props.maximum);
});

const before = (el) => {
  el.classList.add("hidden");
};
const enter = (el) => {
  var delay = el.dataset.index * 100;
  setTimeout(function () {
    el.className = "grid grid-cols-12 animate__animated animate__fadeInRight";
  }, delay);
};
const leave = (el) => {
  var delay = el.dataset.index * 100;
  setTimeout(function () {
    el.className = "grid grid-cols-12 animate__animated animate__fadeOutRight";
  }, delay);
};
</script>

<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="hidden grid-cols-12"
      v-for="(item, index) in showItems"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-span-4">
        <div class="">
          <img :src="item.image" :alt="item.name" class="" />
        </div>
      </div>
      <div class="col-span-8 flex flex-col justify-center">
        <h3 class="text-4xl font-bold text-cyan-600">{{ item.name }}</h3>
        <p class="mb-4 mt-2">{{ item.description }}</p>
        <div class="text-2xl font-bold">
          <Price :value="Number(item.price)" />
        </div>
        <div class="mt-6">
          <button
            class="rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-700"
            @click="$emit('add', item)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </transition-group>
</template>
