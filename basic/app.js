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
app.mount('#app');
