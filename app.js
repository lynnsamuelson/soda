new Vue({
    el: '#app',
    
    data: {
        balance: 0
    },
    methods: {
        updateBalance(newBalance){
            this.balance = newBalance;
        },
       
    }
})