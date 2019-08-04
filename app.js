new Vue({
    el: '#app',
    
    data: {
        balance: 0,
        purchased: []
    },
    methods: {
        updateBalance(newBalance){
            this.balance = newBalance;
        },
        updateHistory(purchase) {
            this.purchased.push(purchase);
        }
       
    }
})