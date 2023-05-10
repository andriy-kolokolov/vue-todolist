const APP = Vue.createApp({
    data() {
        return {
            arrTodos: [
                {
                    text: 'become rich',
                    done: false
                },
                {
                    text: 'go shopping',
                    done: false
                },
                {
                    text: 'cook pasta',
                    done: false
                }
            ]
        }
    },
    methods: {

    }
});

APP.mount('#app');