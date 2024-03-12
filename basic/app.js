const { createApp } = Vue;
// const dataProduct = {
//   maximum: 50,
//   products: [
//     {
//       id: '01',
//       image: 'https://unsplash.it/600/350.jpg?image=436',
//       name: 'Vue.js',
//       image_title: 'Vue.js',
//       description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan reaktif. Diciptakan oleh Evan You pada tahun 2014, Vue.js telah menjadi salah satu alat yang populer dalam pengembangan web karena kemudahannya dalam dipelajari dan digunakan.',
//       price: '49',
//     },
//     {
//       id: '02',
//       image: 'https://unsplash.it/600/350.jpg?image=506',
//       name: 'Vue.js',
//       image_title: 'Vue.js',
//       description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan reaktif. Diciptakan oleh Evan You pada tahun 2014, Vue.js telah menjadi salah satu alat yang populer dalam pengembangan web karena kemudahannya dalam dipelajari dan digunakan.',
//       price: '60',
//     },
//     {
//       id: '03',
//       image: 'https://unsplash.it/600/350.jpg?image=146',
//       name: 'Vue.js',
//       image_title: 'Vue.js',
//       description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan reaktif. Diciptakan oleh Evan You pada tahun 2014, Vue.js telah menjadi salah satu alat yang populer dalam pengembangan web karena kemudahannya dalam dipelajari dan digunakan.',
//       price: '99',
//     },
//     {
//       id: '04',
//       image: 'https://unsplash.it/600/350.jpg?image=345',
//       name: 'Vue.js',
//       image_title: 'Vue.js',
//       description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan reaktif. Diciptakan oleh Evan You pada tahun 2014, Vue.js telah menjadi salah satu alat yang populer dalam pengembangan web karena kemudahannya dalam dipelajari dan digunakan.',
//       price: '30',
//     },
//     {
//       id: '05',
//       image: 'https://unsplash.it/600/350.jpg?image=236',
//       name: 'Vue.js',
//       image_title: 'Vue.js',
//       description: 'Vue.js adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan reaktif. Diciptakan oleh Evan You pada tahun 2014, Vue.js telah menjadi salah satu alat yang populer dalam pengembangan web karena kemudahannya dalam dipelajari dan digunakan.',
//       price: '10',
//     },
//   ],
// };

const app = createApp({
  data() {
    return {
      // ...dataProduct,
      maximum: 50,
      products: null,
      cart: [],
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
  methods: {
    addItem: function (product) {
      this.cart.push(product);
    },
  },
});

app.mount('#app');
