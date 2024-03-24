const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      maximum: 50,
      products: null,
      cart: [],
      style: {
        head: ['h1'],
        fontSize: 72,
        sliderStatus: false,
      },
    };
  },

  mounted() {
    fetch('http://hplussport.com/api/products/order/price')
      .then((response) => response.json())
      .then((data) => {
        // Mengonversi nilai harga menjadi angka untuk setiap produk
        this.products = data.map((product) => ({
          ...product,
          price: parseFloat(product.price),
        }));
        // console.log(this.products);
      })
      .catch((error) => {
        // console.error('Error fetching data:', error);
      });
  },

  filters: {
    currencyFormat: function (value) {
      return 'Rp' + Number.parseFloat(value).toFixed(2);
    },
  },

  computed: {
    sliderState() {
      return this.style.sliderStatus ? 'd-flex' : 'd-none';
    },
    cartTotal() {
      let sum = 0;
      for (key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty() {
      let qty = 0;
      for (key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },

  methods: {
    addItem(product) {
      const productIndex = this.cart.findIndex(
        (item) => item.product.id === product.id
      );
      if (productIndex !== -1) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem(product) {
      const productIndex = this.cart.findIndex(
        (item) => item.product.id === product.id
      );
      if (productIndex !== -1) {
        if (this.cart[productIndex].qty > 1) {
          this.cart[productIndex].qty--;
        } else {
          this.cart.splice(productIndex, 1);
        }
      }
    },
  },
});

app.component('price', {
  data() {
    return {};
  },
  props: {
    value: Number,
    prefix: {
      type: String,
      default: 'Rp',
    },
    precision: {
      type: Number,
      default: 1,
    },
  },
  template:
    '<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }}</span>',
});

app.component('productlist', {
  props: ['products', 'maximum'],
  template: `
    <div class="row d-flex mb-3 align-items-center">
      <template v-for="(item, index) in products" :key="item.id">
        <div v-if="item.price <= Number(maximum)" class="col-md-12">
          <div class="row">
            <div class="col-1 m-auto">
              <button class="btn btn-danger" @click="$emit('add', item)">
                +
              </button>
            </div>
            <div class="col-md-4">
              <img
                class="img-fluid"
                :src="item.image"
                :alt="item.image_title"
                aria-label="random-image"
              />
            </div>
            <div class="col-md-7 d-flex align-items-center">
              <div>
                <h3 class="text-info">{{ item.name }}</h3>
                <p class="mb-0 text-justify">{{ item.description }}</p>
                <div class="h2 mt-3">
                  <price :value="Number(item.price)" :prefix="'$'" :precision="2"></price>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  `,
});

app.mount('#app');
