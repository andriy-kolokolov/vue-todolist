const APP = Vue.createApp({
    data() {
        return {
            newTodoText: '',
            arrTodos: [
                {
                    text: 'Become a Chief Technical Officer(CTO) at Google',
                    done: true
                },
                {
                    text: 'Become a millionaire',
                    done: false
                },
                {
                    text: 'Plant a tree',
                    done: true
                },
                {
                    text: 'Buy penthouse in Dubai',
                    done: false
                }
            ],
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                this.arrTodos.push({
                    text: this.newTodoText,
                    done: false
                })
                this.newTodoText = ''
            }
        },
        removeTodo(removeTodo) {
            const index = this.arrTodos.findIndex(todo => todo.text === removeTodo.text);
            // If findIndex() returns -1, it means that the item was not found in the array and therefore cannot be removed.
            if (index !== -1) {
                this.arrTodos.splice(index, 1);
            }
        }
    }
});

APP.mount('#app');