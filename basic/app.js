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
        this.products = data;
        console.log(this.products);
      });
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
