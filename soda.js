Vue.component('soda', {
    props: ['balance'],
    template: 
    `<div class="soda">
    <h1>Purchase Soda</h1>
        <h1>Number of Sodas left {{sodas}}</h1>
        <p v-if="sodas < 1">We are currently out of soda. Please check back later."</p>
        <p v-else-if="curbalance < 50">Please add money to purchase a soda</p>
        <p v-else></p>
        <button
            :disabled="curbalance <50 || sodas < 1" 
            v-on:click="purchaseSoda"
        >Get Soda</button>
        <h2 v-if="purchased.length > 0">Purchase History</h2>
        <ul v-for="purchase in purchased">
            <li>
                <p>Purchased on: {{purchase.time}}</p>
                <p>Soda machine balance: {{purchase.balance}}&#162</p>
            </li>
        </ul>
    </div>`,
    data()  {
        return {
            sodas: 10,
            purchased: []
        }
    },
    methods: {
        purchaseSoda(){
            let newBalance = this.curbalance - 50;
            this.sodas = this.sodas - 1;
            let purchase = {
                time: (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "),
                number: 1,
                balance: newBalance
            }
            this.purchased.push(purchase)
            this.$emit("inputmoney", newBalance);
        }
    },
    computed: {
       curbalance() {
           return this.balance;
       } 
    }
})