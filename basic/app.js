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
    sliderState: function () {
      return this.style.sliderStatus ? 'd-flex' : 'd-none';
    },
  },
  methods: {
    addItem: function (product) {
      this.cart.push(product);
    },
  },
});
app.mount('#app');
