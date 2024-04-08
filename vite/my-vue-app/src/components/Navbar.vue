<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav
    class="fixed start-0 top-0 z-50 w-full border-b bg-gray-50 p-6 shadow-sm"
  >
    <div class="ml-36 flex items-center justify-between">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >Flowshop</span
        >
      </a>
      <div class="mr-36 hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="mt-4 flex flex-row items-center space-x-10 border-0 p-0">
          <li>
            <div class="row w-100">
              <div class="col-md-6 navbar-text">
                <button
                  class="btn btn-success btn-sm dropdown-toggle"
                  id="dropDownCart"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="dropdown"
                >
                  <b>Cart: </b>
                  <span class="badge text-bg-success">{{ cartQty }}</span>
                  <font-awesome-icon
                    :icon="['fas', 'cart-shopping']"
                    class="mx-2"
                    aria-hidden="true"
                  >
                    <price
                      :value="Number(cartTotal)"
                      :prefix="'$'"
                      :precision="2"
                    />
                  </font-awesome-icon>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-label="dropDownCart"
                >
                  <div v-for="(item, index) in cart" :key="index">
                    <div class="dropdown-item-text text-nowrap text-right">
                      <span class="badge text-bg-warning mr-1 align-text-top">
                        {{ item.qty }}
                      </span>
                      {{ item.product.name }}
                      <b>
                        <price
                          :value="Number(item.product.price * item.qty)"
                          :prefix="'$'"
                          :precision="2"
                        />
                      </b>
                      <a
                        href="#"
                        class="badge bg-danger text-decoration-none text-white"
                        v-on:click="deleteItem(item.product)"
                        >-</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >About</a
            >
          </li>
          <li>
            <div class="items-center">
              <input
                type="text"
                id="search-navbar"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
          </li>
          <li>
            <button
              class="btn btn-sm btn-outline-success"
              aria-label="dollar-sign"
              v-on:click="style.sliderStatus = !style.sliderStatus"
            >
              <font-awesome-icon :icon="['fas', 'sliders']" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
