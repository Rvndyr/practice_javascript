/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from Vue.js!",
      name: "Randy",
      todos: [],
    };
  },
  created: function () {
    this.loadTodos();
  },
  methods: {
    changeText: function () {
      console.log("Changing text");
      this.message = "New Message!!";
    },
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log("First: ", response.data);

        this.todos = response.data;
      });
    },
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: function () {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
