new Vue({
    el: '#app',
    
    data: {
        balance: 0,
        historyList: []
    },
    methods: {
        updateBalance(newBalance){
            this.balance = newBalance;
        },
        updateHistory(purchase) {
            this.historyList.push(purchase);
        }
       
    }
})