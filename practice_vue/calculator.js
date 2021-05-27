var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      firstNum: "",
      secondNum: "",
      thirdNum: "",
      total: "",
    };
  },
  methods: {
    computeSum: function () {
      this.total = (parseInt(this.firstNum), parseInt(this.secondNum), parseInt(this.thirdNum));
      this.firstNum = "";
      this.secondNum = "";
      this.thirdNum = "";
    },
  },
});
