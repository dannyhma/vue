const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      slugText: 'The Quick #(*!&@ Brown 29',
    };
  },
  computed: {
    now: function () {
      var date = new Date();
      return (
        String(date.getHours()) +
        ':' +
        String(date.getMinutes()) +
        ':' +
        String(date.getSeconds())
      );
    },

    slugTize: function () {
      return (
        this.slugText
          .toLowerCase()
          .replace(/[^\w]+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '') +
        '-' +
        // this.now()
        this.now
      );
    },
  },
  methods: {
    // now: function () {
    //   var date = new Date();
    //   return (
    //     String(date.getHours()) +
    //     ':' +
    //     String(date.getMinutes()) +
    //     ':' +
    //     String(date.getSeconds())
    //   );
    // },
  },
});

app.mount('#app');
