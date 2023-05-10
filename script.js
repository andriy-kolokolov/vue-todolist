const APP = Vue.createApp({
    data() {
        return {
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
            ]
        }
    },
    methods: {
        
    }
});

APP.mount('#app');