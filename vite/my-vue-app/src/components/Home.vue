<script setup>
import { ref, reactive, onMounted } from "vue";
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";

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
      <h1 class="text-4xl font-bold">IDShop</h1>
    </div>
    <div>
      <PriceSlider
        :sliderStatus="state.sliderStatus"
        :maximum.sync="state.maximum"
        @update:maximum="state.maximum = $event"
      />
    </div>
    <div>
      <ProductList
        :products="state.products"
        :maximum="state.maximum"
        @add="addItem"
      />
    </div>
  </div>
</template>
