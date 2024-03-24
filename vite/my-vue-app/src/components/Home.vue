<script setup>
import { ref, reactive, onMounted } from "vue";
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import Navbar from "./Navbar.vue";

const state = reactive({
  maximum: 20,
  products: [],
  cart: [],
  sliderStatus: true,
});

onMounted(() => {
  fetch("http://hplussport.com/api/products/order/price")
    .then((response) => response.json())
    .then((data) => {
      state.products = data.map((product) => ({
        ...product,
        price: parseFloat(product.price),
      }));
      // console.log(state.products);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

const addItem = (product) => {
  const productIndex = state.cart.findIndex(
    (item) => item.product.id === product.id,
  );
  if (productIndex !== -1) {
    state.cart[productIndex].qty++;
  } else {
    state.cart.push({ product: product, qty: 1 });
  }
};
</script>

<template>
  <div class="container mx-auto">
    <div>
      <Navbar />
    </div>
    <div>
      <PriceSlider
        :sliderStatus="state.sliderStatus"
        :maximum.sync="state.maximum"
        @update:maximum="state.maximum = $event"
        class="pt-24"
      />
    </div>
    <div>
      <ProductList
        :products="state.products"
        :maximum="state.maximum"
        @add="addItem"
        class="pt-9"
      />
    </div>
  </div>
</template>
