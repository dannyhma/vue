const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      slugText: 'The Quick #(*!&@ Brown 29',
    };
  },
  computed: {
    slugTize: function () {
      return this.slugText
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    },
  },
});

app.mount('#app');
