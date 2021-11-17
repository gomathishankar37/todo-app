const app = new Vue({
    // element of id "app"
    el: '#app',

    // data to show on the page
    data: {
        title: "Hello there!",
        newtodo: "",
        todos: []
    },

    // functions used on data
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newtodo,
                done: false
            });
            this.newtodo = "";
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            })
        }
    }
});