const app = Vue.createApp({
  data() {
    return {
      message: "Hello World",
      vueLink: "https://vuejs.org/",
      chgMsg: "Ace Vue.js",
      chgMsgopt: "Master Vue.js",
      rating: "",
      stars: "",
    };
  },
  methods: {
    randomMessage() {
      let randomNumber = Math.round(Math.random() * 10);
      if (randomNumber % 2 === 0) {
        return this.chgMsg;
      } else {
        return this.chgMsgopt;
      }
    },
    add() {
      this.stars = this.rating;
      this.rating = "";
      console.log(this.rating);
    },
  },
});

app.mount("#user-goal");
