<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./components/Price.vue";
</script>

<template>
  <div class="container mx-auto">
    <p class="text-4xl font-bold">IDShop</p>
    <p class="animate__animated animate__fadeInTopRight">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt minima
      error labore. Magni hic qui dignissimos unde, quia nemo. Suscipit quo rem
      assumenda, officia sed, pariatur corrupti perferendis eligendi fuga
      deleniti porro. Reiciendis possimus eius animi repellendus nam. Aliquam
      dolorem in nam fugit unde quo dolores rerum fuga facere atque?
    </p>
    <font-awesome-icon icon="shopping-cart" /> <price :value="4.24" />
  </div>
</template>
