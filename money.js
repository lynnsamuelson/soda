
Vue.component('test', {
    props: ['message'],
    template:`<div>{{message}} This is a test.</div>`,
       
})

Vue.component('money', {
    props: ['balance'],
    template: `
        <div>
            <h1 id="money">The balance is {{balance}} &#162;</h1>
            <button v-on:click="addQuarter" >Add Quarter</button>
            <button v-on:click="changeReturn" >Return Change</button>
        </div>`,
       
    methods: {
        addQuarter() {
            let newBalance = this.balance + 25;
            this.$emit("inputmoney", newBalance);
        },
        changeReturn() {
            let newBalance = 0;
            this.$emit("inputmoney", newBalance);
        }
    }
})

Vue.component('soda', {
    props: ['balance'],
    template: 
    `<div class="soda">
    <h1>Purchase Soda</h1>
        <h1>Number of Sodas left {{sodas}}</h1>
        <button
            :disabled="curbalance <50 || sodas < 1" 
            v-on:click="purchaseSoda"
        >Get Soda</button>
    </div>`,
    data()  {
        return {
            sodas: 10
        }
    },
    methods: {
        purchaseSoda(){
            let newBalance = this.curbalance - 50;
            this.sodas = this.sodas -1;
            console.log("sodas", this.sodas);
            console.log("balance", this.curbalance);
            this.$emit("inputmoney", newBalance);
        }
    },
    computed: {
       curbalance() {
           return this.balance;
       } 
    }
})


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