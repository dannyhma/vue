<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps(["sliderStatus", "maximum"]);
const emits = defineEmits(["update:maximum"]);

const sliderState = computed(() => {
  return props.sliderStatus ? "flex" : "hidden";
});

const maxAmount = (event) => {
  emits("update:maximum", event.target.value);
};
</script>

<template>
  <transition
    name="fade"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <div v-if="sliderStatus">
      <div class="mt-6 grid grid-cols-12" :class="sliderState">
        <form class="col-span-2">
          <label>
            <span class="block text-sm font-medium text-slate-700"
              >Maximum</span
            >
            <input
              type="number"
              class="focus:ring-0g mt-1 block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500"
              :value="maximum"
              @input="maxAmount"
            />
          </label>
        </form>
        <input
          class="col-span-10 mt-4"
          type="range"
          min="0"
          max="200"
          :value="maximum"
          @input="maxAmount"
        />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease-in-out;
}
</style>
